"use client";
import { useEffect, useRef, useState } from "react";
import { ev } from "./mesure";

const CAL = process.env.NEXT_PUBLIC_CAL_URL || "https://cal.com/arras-patrimoine/decouverte-rem";

const VIDE = {
  remuneration: "",
  composition: "",
  statut: "",
  ca: "",
  suivi: "",
  email: "",
  telephone: "",
  message: "",
};

export default function Formulaire() {
  const [d, setD] = useState(VIDE);
  const [etape, setEtape] = useState(1);
  const [etat, setEtat] = useState("saisie"); // saisie | envoi | succes | erreur
  const demarre = useRef(false);
  const bloc = useRef(null);

  useEffect(() => {
    const surTranche = (e) => setD((x) => ({ ...x, remuneration: e.detail }));
    window.addEventListener("cap:tranche", surTranche);
    return () => window.removeEventListener("cap:tranche", surTranche);
  }, []);

  const maj = (champ) => (e) => {
    if (!demarre.current) {
      demarre.current = true;
      ev("form_demarre");
    }
    setD((x) => ({ ...x, [champ]: e.target.value }));
  };

  const versEtape2 = () => {
    const requis = ["remuneration", "composition", "statut", "ca", "suivi"];
    const manquant = requis.find((c) => !d[c]);
    if (manquant) {
      document.getElementById("ch-" + manquant)?.focus();
      return;
    }
    setEtape(2);
    ev("form_etape2");
    bloc.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const envoyer = async (e) => {
    e.preventDefault();
    setEtat("envoi");
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(d),
      });
      if (!r.ok) throw new Error("api");
      setEtat("succes");
      ev("lead_envoye", { statut: d.statut, remuneration: d.remuneration });
      bloc.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch {
      setEtat("erreur");
    }
  };

  if (etat === "succes") {
    return (
      <div className="form reveal" ref={bloc}>
        <div className="succes on">
          <span className="chip chip--vert" style={{ marginBottom: "1.4em" }}>
            DOSSIER REÇU
          </span>
          <h3>Votre fiche est arrivée chez nous.</h3>
          <p>
            Jérémy ou Marie-Amélie vous répond sous deux heures ouvrées, personnellement. Si votre
            dossier ne relève pas de Cap., vous le saurez dans le même délai, avec une indication de
            ce qu&apos;il faut regarder à la place.
          </p>
          <p>
            Vous pouvez déjà poser votre créneau de trente minutes ci-dessous. C&apos;est autant de
            gagné, et cela nous permet d&apos;ouvrir votre situation dès le premier échange.
          </p>
          <div className="cal-embed">
            <iframe
              src={CAL + "?embed=true"}
              title="Réserver 30 minutes avec Arras Patrimoine"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="form reveal" ref={bloc} onSubmit={envoyer}>
      <div className="entete">
        <div className="ligne">
          <span>
            {etape === 1 ? "Étape 1 sur 2 · votre situation" : "Étape 2 sur 2 · vos coordonnées"}
          </span>
          <span>Réponse sous 2 h ouvrées</span>
        </div>
        <div className="jauge">
          <i style={{ width: etape === 1 ? "50%" : "100%" }} />
        </div>
      </div>

      <div className="corps">
        <div className={"ecran" + (etape === 1 ? " on" : "")}>
          <div className="champ">
            <label htmlFor="ch-remuneration">
              Ce que vous vous versez par an, salaire et dividendes confondus
            </label>
            <select id="ch-remuneration" value={d.remuneration} onChange={maj("remuneration")}>
              <option value="">Choisir</option>
              <option>Moins de 30 000 €</option>
              <option>30 000 à 50 000 €</option>
              <option>50 000 à 80 000 €</option>
              <option>80 000 à 120 000 €</option>
              <option>Plus de 120 000 €</option>
            </select>
          </div>
          <div className="duo">
            <div className="champ">
              <label htmlFor="ch-composition">Comment cela se compose</label>
              <select id="ch-composition" value={d.composition} onChange={maj("composition")}>
                <option value="">Choisir</option>
                <option>Surtout du salaire</option>
                <option>Surtout des dividendes</option>
                <option>Un mélange des deux</option>
                <option>Je ne sais pas exactement</option>
              </select>
            </div>
            <div className="champ">
              <label htmlFor="ch-statut">Votre statut</label>
              <select id="ch-statut" value={d.statut} onChange={maj("statut")}>
                <option value="">Choisir</option>
                <option>Gérant de SARL ou EURL</option>
                <option>Président de SAS ou SASU</option>
                <option>Profession libérale</option>
                <option>Artisan, bâtiment</option>
                <option>Autre</option>
              </select>
            </div>
          </div>
          <div className="duo">
            <div className="champ">
              <label htmlFor="ch-ca">Chiffre d&apos;affaires annuel</label>
              <select id="ch-ca" value={d.ca} onChange={maj("ca")}>
                <option value="">Choisir</option>
                <option>Moins de 150 000 €</option>
                <option>150 000 à 500 000 €</option>
                <option>500 000 € à 1 M€</option>
                <option>1 à 5 M€</option>
                <option>Plus de 5 M€</option>
              </select>
            </div>
            <div className="champ">
              <label htmlFor="ch-suivi">Quelqu&apos;un s&apos;occupe-t-il de ce sujet aujourd&apos;hui</label>
              <select id="ch-suivi" value={d.suivi} onChange={maj("suivi")}>
                <option value="">Choisir</option>
                <option>Personne</option>
                <option>Mon expert-comptable, quand j&apos;y pense</option>
                <option>Un conseiller, mais je ne suis pas convaincu</option>
                <option>Oui, et je cherche un deuxième avis</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1.2em", alignItems: "center", flexWrap: "wrap" }}>
            <button className="btn btn--primaire" type="button" onClick={versEtape2}>
              Continuer <span className="fl">→</span>
            </button>
            <span className="micro" style={{ margin: 0 }}>
              Aucune coordonnée demandée à cette étape.
            </span>
          </div>
        </div>

        <div className={"ecran" + (etape === 2 ? " on" : "")}>
          <div className="duo">
            <div className="champ">
              <label htmlFor="ch-email">E-mail</label>
              <input
                id="ch-email"
                type="email"
                required
                placeholder="vous@societe.fr"
                value={d.email}
                onChange={maj("email")}
              />
            </div>
            <div className="champ">
              <label htmlFor="ch-telephone">Téléphone</label>
              <input
                id="ch-telephone"
                type="tel"
                required
                placeholder="06 00 00 00 00"
                value={d.telephone}
                onChange={maj("telephone")}
              />
            </div>
          </div>
          <div className="champ">
            <label htmlFor="ch-message">Ce qui vous amène, en deux lignes</label>
            <textarea
              id="ch-message"
              placeholder="Écrivez-le comme vous le diriez au téléphone."
              value={d.message}
              onChange={maj("message")}
            />
          </div>
          <div style={{ display: "flex", gap: "1.2em", alignItems: "center", flexWrap: "wrap" }}>
            <button className="btn btn--primaire" type="submit" disabled={etat === "envoi"} data-ev="submit">
              {etat === "envoi" ? "Envoi en cours…" : "Faire examiner ma situation"}{" "}
              <span className="fl">→</span>
            </button>
            <button className="btn btn--texte" type="button" onClick={() => setEtape(1)}>
              Revenir en arrière
            </button>
          </div>

          {etat === "erreur" ? (
            <p style={{ color: "#E85D8A", fontSize: "14.5px", margin: 0 }}>
              L&apos;envoi n&apos;a pas abouti. Réessayez, ou écrivez directement à
              contact@arras-patrimoine.fr en indiquant votre statut et ce que vous vous versez.
            </p>
          ) : null}

          <div className="ensuite">
            <div>
              <span className="t">ENSUITE · 1</span>Nous lisons votre fiche et nous vérifions si le
              levier existe chez vous.
            </div>
            <div>
              <span className="t">ENSUITE · 2</span>Jérémy ou Marie-Amélie vous répond sous deux
              heures ouvrées, personnellement.
            </div>
            <div>
              <span className="t">ENSUITE · 3</span>Si le dossier tient, on cale trente minutes.
              Sinon, on vous dit quoi regarder à la place.
            </div>
          </div>
          <p style={{ fontSize: "13.5px", color: "var(--gris-bas)", margin: 0 }}>
            Vos informations servent uniquement à qualifier votre dossier. Aucune inscription à une
            liste de diffusion, aucun partage avec un tiers.
          </p>
        </div>
      </div>
    </form>
  );
}
