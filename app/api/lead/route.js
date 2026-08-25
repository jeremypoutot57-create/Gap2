export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CHAMPS = [
  "remuneration",
  "composition",
  "statut",
  "ca",
  "suivi",
  "email",
  "telephone",
  "message",
];

export async function POST(request) {
  let d;
  try {
    d = await request.json();
  } catch {
    return Response.json({ ok: false, erreur: "corps illisible" }, { status: 400 });
  }

  // Nettoyage et garde-fous simples
  const p = {};
  for (const c of CHAMPS) p[c] = typeof d?.[c] === "string" ? d[c].slice(0, 2000).trim() : "";
  if (!p.email || !p.email.includes("@")) {
    return Response.json({ ok: false, erreur: "email manquant" }, { status: 400 });
  }

  const sousDomaine = process.env.NOCRM_SUBDOMAIN;
  const cle = process.env.NOCRM_API_KEY;

  const titre = `CAP · ${p.statut || "statut inconnu"} · ${p.remuneration || "rémunération inconnue"}`;
  const description = [
    `Rémunération annuelle (salaire + dividendes) : ${p.remuneration}`,
    `Composition : ${p.composition}`,
    `Statut : ${p.statut}`,
    `Chiffre d'affaires : ${p.ca}`,
    `Quelqu'un s'en occupe aujourd'hui : ${p.suivi}`,
    `E-mail : ${p.email}`,
    `Téléphone : ${p.telephone}`,
    "",
    "Ce qui l'amène :",
    p.message || "(non renseigné)",
    "",
    "Source : landing Cap. (cap.arras-patrimoine.fr)",
  ].join("\n");

  // Sans configuration noCRM, on ne perd pas le lead : on le journalise et on répond OK.
  if (!sousDomaine || !cle) {
    console.warn("[cap] noCRM non configuré — lead journalisé :", titre);
    console.warn(description);
    return Response.json({ ok: true, mode: "journal" });
  }

  try {
    const r = await fetch(`https://${sousDomaine}.nocrm.io/api/v2/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-KEY": cle },
      body: JSON.stringify({
        title: titre,
        description,
        tags: ["CAP", "landing", p.statut].filter(Boolean),
        client: { email: p.email, phone: p.telephone },
      }),
    });
    if (!r.ok) {
      const texte = await r.text();
      console.error("[cap] noCRM a refusé le lead :", r.status, texte);
      console.error(description);
      return Response.json({ ok: true, mode: "journal" });
    }
    return Response.json({ ok: true, mode: "nocrm" });
  } catch (e) {
    console.error("[cap] noCRM injoignable :", e);
    console.error(description);
    return Response.json({ ok: true, mode: "journal" });
  }
}
