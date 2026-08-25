/* Schémas de la page. Aucun label ne sort de sa boîte : 12 px maximum, 26 caractères par ligne. */

export function FigTrajet() {
  return (
    <div className="figure reveal">
      <div className="fig-titre">
        <b>FIG. 02</b>
        <span>Le trajet de l&apos;euro, de la société jusqu&apos;à vous</span>
      </div>
      <svg className="plan" viewBox="0 0 900 330" role="img" aria-label="Trajet d'un euro produit par la société jusqu'au foyer du dirigeant, avec les points de fuite">
        <rect className="socle" x="20" y="40" width="180" height="76" rx="8" />
        <text className="val" x="40" y="72">100 €</text>
        <text className="txt" x="40" y="94">produits</text>
        <text className="txt-s" x="40" y="110">par la société</text>

        <path className="flux" d="M200 78 H320" />
        <path className="fuite" d="M260 78 V150" />
        <text className="txt-s" x="228" y="172">charges sociales</text>

        <rect className="socle" x="320" y="40" width="180" height="76" rx="8" />
        <text className="val" x="340" y="72">≈ 62 €</text>
        <text className="txt" x="340" y="94">après charges</text>
        <text className="txt-s" x="340" y="110">sur le chemin choisi</text>

        <path className="flux" d="M500 78 H620" />
        <path className="fuite" d="M560 78 V150" />
        <text className="txt-s" x="524" y="172">impôt du foyer</text>

        <rect className="socle-rose" x="620" y="40" width="180" height="76" rx="8" />
        <text className="val val-rose" x="640" y="72">≈ 44 €</text>
        <text className="txt" x="640" y="94">chez vous</text>
        <text className="txt-s" x="640" y="110">réellement disponibles</text>

        <line className="axe" x1="20" y1="212" x2="880" y2="212" />
        <text className="txt" x="20" y="240">Ce que Cap. déplace</text>
        <path className="flux-rose" d="M20 262 H880" strokeDasharray="8 6" />
        <text className="txt-s" x="20" y="288">La forme, la source, le moment et le montant de ce que vous vous versez.</text>
        <text className="txt-s" x="20" y="306">Chaque décision est ordinaire. C&apos;est leur combinaison qui change le résultat.</text>
      </svg>
      <p className="fig-note">
        Illustration de principe, volontairement simplifiée. Les proportions réelles dépendent de
        votre statut, de votre foyer et de la structure de votre groupe : c&apos;est précisément ce
        que la mission mesure sur vos chiffres.
      </p>
    </div>
  );
}

export function FigCalendrier() {
  const temps = [
    ["Auditer", 0, 10, "var(--trait-fort)"],
    ["Arbitrer", 10, 20, "var(--rose)"],
    ["Documenter", 20, 30, "var(--vert)"],
  ];
  const x = (j) => 90 + (j / 30) * 740;
  return (
    <div className="figure reveal">
      <div className="fig-titre">
        <b>FIG. 03</b>
        <span>Trente jours, jalon par jalon</span>
      </div>
      <svg className="plan" viewBox="0 0 900 250" role="img" aria-label="Calendrier de la mission sur trente jours">
        {[0, 10, 20, 30].map((j) => (
          <g key={j}>
            <line className="axe" x1={x(j)} y1="34" x2={x(j)} y2="196" />
            <text className="txt-s" x={x(j) - 12} y="222">{"J" + j}</text>
          </g>
        ))}
        {temps.map(([nom, d, f, couleur], i) => (
          <g key={nom}>
            <rect x={x(d)} y={54 + i * 46} width={x(f) - x(d)} height="30" rx="6" fill={couleur} opacity={i === 1 ? 0.9 : 0.55} />
            <text className="txt" x={x(d) + 14} y={74 + i * 46} fill="#0C1626" fontWeight="600">{nom}</text>
            <text className="txt-s" x="20" y={74 + i * 46}>{"Temps " + (i + 1)}</text>
          </g>
        ))}
        <text className="txt-s" x={x(0)} y="182">Collecte et mesure</text>
        <text className="txt-s" x={x(10)} y="182">Séance d&apos;arbitrage</text>
        <text className="txt-s" x={x(20)} y="182">Rédaction et remise</text>
      </svg>
      <p className="fig-note">
        Vous intervenez trois à quatre heures au total, réparties sur le mois. Le reste du travail se
        fait chez nous.
      </p>
    </div>
  );
}

export function FigDecennie() {
  const pts = [];
  for (let a = 0; a <= 10; a++) pts.push([60 + a * 78, 240 - a * 19]);
  const chemin = pts.map((p, i) => (i ? "L" : "M") + p[0] + " " + p[1]).join(" ");
  return (
    <div className="figure reveal">
      <div className="fig-titre">
        <b>FIG. 04</b>
        <span>Pourquoi une année corrigée compte dix fois</span>
      </div>
      <svg className="plan" viewBox="0 0 900 300" role="img" aria-label="Écart cumulé entre une trajectoire corrigée et une trajectoire inchangée sur dix ans">
        <line className="axe" x1="60" y1="250" x2="860" y2="250" />
        <line className="axe" x1="60" y1="30" x2="60" y2="250" />
        <path d={chemin + " L840 250 L60 250 Z"} fill="var(--rose-14)" />
        <path className="flux-rose" d={chemin} />
        <line className="flux" x1="60" y1="250" x2="840" y2="250" strokeDasharray="6 5" />
        <text className="txt-s" x="66" y="268">Aujourd&apos;hui</text>
        <text className="txt-s" x="770" y="268">Dans 10 ans</text>
        <text className="val val-rose" x="600" y="70">Écart cumulé</text>
        <text className="txt" x="600" y="92">Une correction annuelle</text>
        <text className="txt" x="600" y="110">ne se produit pas une fois.</text>
        <text className="txt" x="600" y="128">Elle se répète.</text>
        <text className="txt-s" x="66" y="238">Trajectoire inchangée</text>
      </svg>
      <p className="fig-note">
        La courbe illustre un principe, pas une promesse : un écart annuel corrigé se reproduit tant
        que la situation ne change pas. Le montant, lui, dépend entièrement de votre dossier.
      </p>
    </div>
  );
}
