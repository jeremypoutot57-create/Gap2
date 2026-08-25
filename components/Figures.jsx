/* Schémas de la page. Une idée par figure, pas plus. */

export function FigTrajet() {
  const etapes = [
    ["100 €", "produits par la société", false],
    ["≈ 62 €", "après les charges", false],
    ["≈ 44 €", "réellement chez vous", true],
  ];
  return (
    <div className="figure reveal">
      <div className="fig-titre">
        <b>Sur 100 € produits, ce qui arrive vraiment chez vous</b>
        <span>Illustration de principe, le vrai chiffre dépend de votre dossier</span>
      </div>
      <svg className="plan" viewBox="0 0 900 190" role="img" aria-label="Trajet simplifié d'un euro produit jusqu'au foyer du dirigeant">
        {etapes.map(([val, txt, rose], i) => {
          const x = 24 + i * 316;
          return (
            <g key={val}>
              <rect className={rose ? "socle-rose" : "socle"} x={x} y="30" width="220" height="92" rx="12" />
              <text className={"val" + (rose ? " val-rose" : "")} x={x + 24} y="72" fontSize="30">{val}</text>
              <text className="txt" x={x + 24} y="102">{txt}</text>
              {i < 2 ? (
                <>
                  <line className="flux" x1={x + 220} y1="76" x2={x + 316} y2="76" />
                  <path d={`M${x + 308} 70 L${x + 316} 76 L${x + 308} 82`} className="flux" />
                  <text className="txt-s" x={x + 268} y="150" textAnchor="middle" fill="#E0A94B">
                    {i === 0 ? "charges sociales" : "impôt du foyer"}
                  </text>
                  <line className="fuite" x1={x + 268} y1="90" x2={x + 268} y2="130" />
                </>
              ) : null}
            </g>
          );
        })}
      </svg>
      <p className="fig-note">
        Cap. ne change pas ce que la société produit. Il change la forme, la source et le moment de
        ce que vous vous versez : c&apos;est là que se joue l&apos;écart entre 44 et davantage.
      </p>
    </div>
  );
}

export function FigCalendrier() {
  const temps = [
    ["Auditer", 0, 10, "rgba(255,255,255,.28)"],
    ["Arbitrer", 10, 20, "#E85D8A"],
    ["Documenter", 20, 30, "#4FB286"],
  ];
  const x = (j) => 90 + (j / 30) * 760;
  return (
    <div className="figure reveal">
      <div className="fig-titre">
        <b>Trente jours, trois temps</b>
        <span>Trois à quatre heures de votre côté, le reste chez nous</span>
      </div>
      <svg className="plan" viewBox="0 0 900 170" role="img" aria-label="Calendrier de la mission sur trente jours">
        {[0, 10, 20, 30].map((j) => (
          <g key={j}>
            <line className="axe" x1={x(j)} y1="20" x2={x(j)} y2="128" strokeDasharray="2 4" />
            <text className="txt-s" x={x(j)} y="152" textAnchor="middle">{"Jour " + j}</text>
          </g>
        ))}
        {temps.map(([nom, d, f, c], i) => (
          <g key={nom}>
            <rect x={x(d) + 4} y={30 + i * 34} width={x(f) - x(d) - 8} height="26" rx="6" fill={c} />
            <text className="txt" x={x(d) + 16} y={48 + i * 34} fill="#0C1626" fontWeight="600">{nom}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// Remplace la courbe sur dix ans : deux barres, une lecture immédiate.
export function Repetition() {
  return (
    <div className="repetition reveal">
      <div className="rep-l">
        <span>Première année</span>
        <div className="rep-b"><i style={{ width: "10%" }} /></div>
        <b>30 000 €</b>
      </div>
      <div className="rep-l">
        <span>Sur dix ans, si rien ne change</span>
        <div className="rep-b"><i style={{ width: "100%" }} /></div>
        <b>300 000 €</b>
      </div>
      <p>
        Une correction de trajectoire ne rapporte pas une fois : elle se répète chaque année tant que
        la situation reste la même. C&apos;est pour ça qu&apos;un dossier vaut d&apos;être regardé
        maintenant plutôt que l&apos;an prochain.
      </p>
    </div>
  );
}
