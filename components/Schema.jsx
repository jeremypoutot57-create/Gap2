export default function Schema() {
  const boites = [
    ["Expert-comptable", "Tient les comptes d'une société à la fois", "Ne voit pas votre foyer"],
    ["Banquier", "Lit vos revenus déclarés", "Ne voit pas la holding"],
    ["Assureur", "Place de la couverture", "Ne voit pas l'arbitrage"],
    ["Notaire", "Intervient le jour venu", "Ne voit pas le flux"],
  ];
  return (
    <div className="figure reveal">
      <div className="fig-titre">
        <b>Ce que chacun voit de votre rémunération</b>
        <span>Quatre spécialistes compétents, aucun mandat pour regarder l&apos;ensemble</span>
      </div>
      <svg className="plan" viewBox="0 0 900 360" role="img" aria-label="Quatre conseils cloisonnés, et la ligne d'arbitrage que Cap. occupe entre eux et vous">
        {boites.map(([nom, fait, angle], i) => {
          const x = 24 + i * 216;
          return (
            <g key={nom}>
              <rect className="socle" x={x} y="20" width="196" height="118" rx="10" />
              <text className="lbl" x={x + 20} y="52">{nom}</text>
              <text className="lbl-mini" x={x + 20} y="80">{fait}</text>
              <text className="lbl-mini" x={x + 20} y="116" fill="#E0A94B">{angle}</text>
              <line className="flux" x1={x + 98} y1="138" x2={x + 98} y2="196" strokeDasharray="3 4" />
            </g>
          );
        })}
        <rect x="24" y="196" width="852" height="1" fill="#E85D8A" />
        <rect x="24" y="186" width="852" height="20" fill="url(#lueur)" opacity=".5" />
        <defs>
          <linearGradient id="lueur" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#E85D8A" stopOpacity="0" />
            <stop offset=".5" stopColor="#E85D8A" stopOpacity=".35" />
            <stop offset="1" stopColor="#E85D8A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect className="socle-rose" x="330" y="222" width="240" height="44" rx="22" />
        <text className="lbl" x="450" y="250" textAnchor="middle" fill="#fff">La ligne que Cap. occupe</text>
        <line className="flux" x1="450" y1="266" x2="450" y2="300" />
        <rect className="socle" x="300" y="300" width="300" height="50" rx="10" />
        <text className="lbl" x="450" y="331" textAnchor="middle">Vous, qui voyez tout et n&apos;avez pas le temps</text>
      </svg>
    </div>
  );
}
