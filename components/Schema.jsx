export default function Schema() {
  return (
    <div className="cadre-fig reveal" style={{ marginTop: "2.4rem" }}>
      <svg
        className="plan"
        viewBox="0 0 900 420"
        role="img"
        aria-label="Schéma des quatre périmètres cloisonnés et de la ligne d'arbitrage qui les traverse"
      >
        <defs>
          <pattern id="g" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M30 0H0V30" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="900" height="420" fill="url(#g)" />
        <text className="titre" x="24" y="34">
          Ce que chacun voit de votre rémunération
        </text>
        <line className="trait" x1="24" y1="48" x2="876" y2="48" />

        <g>
          <rect className="boite" x="24" y="86" width="196" height="120" rx="2" />
          <text className="lbl" x="42" y="118">Expert-comptable</text>
          <text className="lbl-mini" x="42" y="140">Une société à la fois</text>
          <text className="lbl-mini" x="42" y="158">Clôture, liasse, bilan</text>
          <text className="lbl-mini" x="42" y="176">Ne voit pas le foyer</text>
        </g>
        <g>
          <rect className="boite" x="242" y="86" width="196" height="120" rx="2" />
          <text className="lbl" x="260" y="118">Banquier</text>
          <text className="lbl-mini" x="260" y="140">Capacité d&apos;emprunt</text>
          <text className="lbl-mini" x="260" y="158">Revenus déclarés</text>
          <text className="lbl-mini" x="260" y="176">Ne voit pas la holding</text>
        </g>
        <g>
          <rect className="boite" x="460" y="86" width="196" height="120" rx="2" />
          <text className="lbl" x="478" y="118">Assureur</text>
          <text className="lbl-mini" x="478" y="140">Prévoyance, retraite</text>
          <text className="lbl-mini" x="478" y="158">Contrats en cours</text>
          <text className="lbl-mini" x="478" y="176">Ne voit pas l&apos;arbitrage</text>
        </g>
        <g>
          <rect className="boite" x="678" y="86" width="198" height="120" rx="2" />
          <text className="lbl" x="696" y="118">Notaire</text>
          <text className="lbl-mini" x="696" y="140">Transmission, actes</text>
          <text className="lbl-mini" x="696" y="158">Le jour où ça compte</text>
          <text className="lbl-mini" x="696" y="176">Ne voit pas le flux</text>
        </g>

        <line className="trait" x1="122" y1="206" x2="122" y2="252" />
        <line className="trait" x1="340" y1="206" x2="340" y2="252" />
        <line className="trait" x1="558" y1="206" x2="558" y2="252" />
        <line className="trait" x1="777" y1="206" x2="777" y2="252" />

        <text className="lbl" x="24" y="240" fill="#E85D8A">
          La ligne que Cap. occupe
        </text>
        <path className="arbitrage march" d="M24 252 H876" />
        <line className="trait" x1="450" y1="252" x2="450" y2="300" />

        <rect className="boite-rose" x="300" y="300" width="300" height="86" rx="2" />
        <text className="lbl" x="330" y="332" fill="#fff">Vous</text>
        <text className="lbl-mini" x="330" y="352" fill="#C6D2E0">Le seul qui voit tout</text>
        <text className="lbl-mini" x="330" y="370" fill="#C6D2E0">et qui n&apos;a pas le temps</text>
      </svg>
      <span className="fig-legende">
        Quatre spécialistes compétents. Aucun n&apos;a le mandat de regarder l&apos;ensemble.
      </span>
    </div>
  );
}
