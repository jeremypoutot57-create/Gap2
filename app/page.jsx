import Fx from "../components/Fx";
import Video from "../components/Video";
import HeroForm from "../components/HeroForm";
import Formulaire from "../components/Formulaire";
import BarreFlottante from "../components/BarreFlottante";
import Schema from "../components/Schema";
import { FigTrajet, FigCalendrier, FigDecennie } from "../components/Figures";
import { Progression, Sommaire } from "../components/Chrome";
import { SCENES, LIVRABLES, AVIS, FAQ, PRENONS, REFUSONS } from "../components/donnees";
import { jsonLd } from "../components/jsonld";

const CAL = process.env.NEXT_PUBLIC_CAL_URL || "https://cal.com/arras-patrimoine/decouverte-rem";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Fx />
      <Progression />
      <Sommaire
        entrees={[
          ["constat", "Le constat"],
          ["scenes", "Vous reconnaîtrez"],
          ["perimetres", "Le problème"],
          ["methode", "La méthode"],
          ["preuve", "La preuve"],
          ["selectivite", "Sélectivité"],
          ["dossier", "Ouvrir mon dossier"],
        ]}
      />

      <div className="page">
        <header className="entete-site">
          <div className="wrap">
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <span className="wordmark wordmark--nav">
                Cap<span className="pt">.</span>
              </span>
              <span className="par">par Arras Patrimoine</span>
            </div>
            <a className="btn btn--primaire" href="#dossier" data-ev="cta_header">
              Voir si mon dossier passe <span className="fl">→</span>
            </a>
          </div>
        </header>

        {/* 01 · HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="pour-qui reveal">
                <i>✓</i> Pour les dirigeants de PME entre <b>150 k€ et 5 M€</b> de chiffre d&apos;affaires
              </div>
              <h1 className="reveal">
                Vous vous payez sûrement <span className="rose">plus cher que nécessaire</span>.
              </h1>
              <p className="promesse reveal">
                Cap. audite la façon dont vous vous rémunérez, arbitre avec vous, et vous remet
                un plan écrit en <b>30 jours</b>. Ordre de grandeur constaté sur nos dossiers :{" "}
                <b>20 à 30 000 € par an</b> récupérés, sans montage et sans produit à vous vendre.
              </p>
              <HeroForm />
              <p className="hero-secondaire reveal">
                Vous préférez en parler ?{" "}
                <a href={CAL} data-ev="cta_cal_hero">Réservez 30 minutes avec Jérémy</a>, sans engagement.
              </p>
            </div>

            <div className="hero-droite reveal">
              <Video />
              <div className="preuves">
                <div className="preuve"><b>30 000 €</b><span>récupérés la 1ʳᵉ année sur un dossier récent</span></div>
                <div className="preuve"><b>30 jours</b><span>du premier échange au plan signé</span></div>
                <div className="preuve"><b>8</b><span>dossiers acceptés par mois, pas un de plus</span></div>
              </div>
              <div className="avis-mini">
                <span className="et">★★★★★</span>
                <div>
                  <p>Conseil, expertise, professionnalisme. Une société orientée solution, où le mot problème devient challenge.</p>
                  <small>Mathieu F. · dirigeant et professionnel libéral · avis Google</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 · LE CONSTAT */}
        <section id="constat" data-cote="02" className="sombre">
          <div className="wrap wrap--etroit">
            <span className="eyebrow reveal">Le constat</span>
            <h2 className="reveal">
              Pourquoi un dirigeant qui gagne bien sa vie a quand même l&apos;impression de
              travailler pour les autres
            </h2>
            <p className="reponse reveal">
              Parce que sa rémunération n&apos;a jamais été décidée. Elle s&apos;est empilée : un
              salaire fixé au démarrage, des dividendes votés en fin d&apos;exercice, un compte
              courant qu&apos;on ne regarde plus, une prévoyance signée il y a huit ans. Chaque
              brique est correcte prise seule. L&apos;ensemble, personne ne l&apos;a jamais arbitré.
            </p>
            <p className="reveal">
              Votre expert-comptable travaille sur une société à la fois, sur un exercice fermé, avec
              les chiffres du passé. Ce n&apos;est pas un reproche, c&apos;est son métier et son
              mandat. Votre banquier regarde vos revenus déclarés pour savoir ce qu&apos;il peut vous
              prêter. Votre assureur vend de la couverture. Votre notaire intervient le jour où ça
              compte, c&apos;est-à-dire trop tard pour changer quoi que ce soit à la façon dont vous
              vous êtes payé pendant quinze ans.
            </p>
            <p className="reveal">
              Aucun d&apos;entre eux n&apos;a la mission, ni les informations, ni franchement
              l&apos;intérêt de vous dire : voilà ce que votre société produit, voilà ce qui arrive
              chez vous, voilà où ça se perd et voilà ce qu&apos;on peut légitimement récupérer. Ce
              poste existe dans les grands groupes. Il s&apos;appelle la direction financière. Dans
              une PME, il est vacant, et c&apos;est le dirigeant qui l&apos;occupe le dimanche soir,
              avec ce qu&apos;il a compris tout seul.
            </p>
            <p className="reveal">
              Le résultat est toujours le même. Vous payez ce qu&apos;il faut, parfois davantage.
              Vous avancez sans savoir si c&apos;est le bon chemin. Et vous avez le sentiment
              désagréable, jamais vérifié, que quelqu&apos;un de mieux organisé que vous s&apos;en
              sortirait mieux avec exactement les mêmes chiffres. Ce sentiment est juste. Ce
              n&apos;est pas une question de fraude ni d&apos;astuce, c&apos;est une question
              d&apos;architecture.
            </p>
          </div>
        </section>

        {/* 05 · SCÈNES MIROIR */}
        <section id="scenes" data-cote="03">
          <div className="wrap">
            <span className="eyebrow reveal">Vous reconnaîtrez peut-être</span>
            <h2 className="reveal">Cinq phrases que nous entendons chaque semaine</h2>
            <p className="reponse reveal">
              Ces situations viennent de dossiers réels. Si l&apos;une d&apos;elles vous ressemble,
              ce n&apos;est pas un hasard : ce sont les cinq configurations qui produisent le plus
              d&apos;écart entre ce que vous pourriez récupérer et ce que vous récupérez vraiment.
            </p>
            <div className="reveal">
              {SCENES.map((s, i) => (
                <div className="scene" key={i}>
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="dit">{s.dit}</p>
                    <p className="rep">{s.rep}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 · PÉRIMÈTRES */}
        <section id="perimetres" data-cote="04" className="sombre">
          <div className="wrap">
            <span className="eyebrow reveal">Le vrai problème</span>
            <h2 className="reveal">Chacun sa pièce, et personne dans le couloir</h2>
            <p className="reponse reveal">
              Vos conseils ne sont pas mauvais. Ils sont cloisonnés. Chacun voit une partie de votre
              situation, personne ne voit l&apos;ensemble, et l&apos;argent se perd exactement là où
              leurs périmètres ne se touchent pas. C&apos;est cette ligne que Cap. trace.
            </p>
            <Schema />

            <div style={{ marginTop: "18px" }}>
              <FigTrajet />
            </div>
          </div>
        </section>

        {/* 07 · OBJECTION REINE */}
        <section data-cote="05">
          <div className="wrap wrap--etroit">
            <span className="eyebrow reveal">L&apos;objection</span>
            <h2 className="reveal">« Mon expert-comptable dit qu&apos;on ne peut pas faire mieux »</h2>
            <p className="reponse reveal">
              C&apos;est la phrase que nous entendons le plus, et elle mérite mieux qu&apos;une
              réponse commerciale. Votre expert-comptable dit vrai dans son périmètre. Nous ne
              travaillons pas dans son périmètre, et nous ne travaillons jamais contre lui : nous lui
              apportons une vue qu&apos;il n&apos;a pas, et il valide.
            </p>
            <p className="reveal">
              Voilà comment ça se passe concrètement, parce que c&apos;est arrivé des dizaines de
              fois. Nous construisons le plan, puis nous demandons un rendez-vous à trois : vous,
              votre expert-comptable, nous. Nous posons le schéma sur la table et nous le déroulons
              devant lui, chiffres et textes à l&apos;appui.
            </p>
            <p className="reveal">
              Dans l&apos;immense majorité des cas, il valide. Et très souvent il ajoute une phrase
              qui vaut tout le reste : il n&apos;aurait pas pu vous le proposer lui-même, parce
              qu&apos;il ne voit qu&apos;une société quand le plan en fait travailler trois, parce
              que son mandat s&apos;arrête à la porte de votre foyer, et parce qu&apos;il n&apos;a
              matériellement pas le temps de refaire cette analyse pour chacun de ses clients.
            </p>
            <p className="reveal">
              Ce rendez-vous n&apos;est pas une confrontation, c&apos;est une passation. Vous
              ressortez avec un plan validé par les deux, et votre expert-comptable ressort avec les
              écritures à passer. Personne ne perd sa place. Si vous n&apos;avez pas envie de ce
              rendez-vous, nous vous remettons simplement le dossier et vous le transmettez
              vous-même.
            </p>
          </div>
        </section>

        {/* 08 · STRATÉGIE VS MONTAGE */}
        <section data-cote="06" className="sombre">
          <div className="wrap">
            <span className="eyebrow reveal">La différence qui compte</span>
            <h2 className="reveal">Une stratégie de rémunération n&apos;est pas un montage</h2>
            <p className="reponse reveal">
              Un montage est une construction qu&apos;on installe pour obtenir un effet, et
              qu&apos;on défend ensuite si on vous la conteste. Une stratégie de rémunération est une
              suite de décisions ordinaires, chacune parfaitement banale prise seule, dont
              l&apos;ordre et la combinaison produisent un résultat très différent. La première se
              démonte. La seconde s&apos;explique.
            </p>
            <div className="grille-2 reveal" style={{ marginTop: "2.4rem" }}>
              <div className="fiche fiche--neutre">
                <span className="num">Ce que nous ne faisons pas</span>
                <h3>Le montage</h3>
                <p>
                  Une structure créée pour l&apos;effet qu&apos;elle produit, et pas pour ce
                  qu&apos;elle fait. Un schéma qui ne tient que si personne ne pose de question. Une
                  opération dont vous ne sauriez pas expliquer la logique économique si on vous la
                  demandait un mardi matin.
                </p>
                <p style={{ marginTop: "1.1em", color: "var(--gris-bas)" }}>
                  Ce genre de dossier, nous le refusons. Pas par prudence excessive : parce
                  qu&apos;il vous coûtera plus cher que ce qu&apos;il vous rapporte, et que vous
                  dormirez mal.
                </p>
              </div>
              <div className="fiche">
                <span className="num">Ce que nous faisons</span>
                <h3>La stratégie</h3>
                <p>
                  Décider ce que vous vous versez, sous quelle forme, depuis quelle entité, à quel
                  moment de l&apos;année, et ce que vous faites de ce qui reste. Chaque décision est
                  prévue par les textes, chaque texte est cité, chaque arbitrage est écrit avec ce
                  qu&apos;il coûte et ce qu&apos;il vous fait perdre ailleurs.
                </p>
                <p style={{ marginTop: "1.1em", color: "var(--gris-bas)" }}>
                  Vous devez pouvoir défendre votre plan vous-même, sans nous. C&apos;est le seul
                  test qui compte.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 09 · MÉTHODE */}
        <section id="methode" data-cote="07">
          <div className="wrap">
            <span className="eyebrow reveal">La méthode</span>
            <h2 className="reveal">Trois temps, trente jours, un plan écrit</h2>
            <p className="reponse reveal">
              La mission dure trente jours au maximum, du premier échange à la remise du plan. Elle
              se déroule en trois temps : nous auditons ce qui existe, nous arbitrons avec vous
              scénario par scénario, puis nous documentons chaque décision par écrit. Tout se fait en
              visio, où que vous soyez.
            </p>
            <div className="grille-3 reveal" style={{ marginTop: "2.4rem" }}>
              <div className="fiche">
                <span className="num">Temps 1 · jours 1 à 10</span>
                <h3>Auditer</h3>
                <p>
                  Nous ouvrons tout : statuts, liasses des trois derniers exercices, contrats de
                  prévoyance et de retraite, comptes courants, avis d&apos;imposition du foyer,
                  crédits en cours. Nous mesurons l&apos;écart réel entre ce que la société produit
                  et ce qui arrive chez vous, en euros, sur douze mois.
                </p>
                <div style={{ marginTop: "1.4em" }}>
                  <span className="chip">Sortie : la cartographie</span>
                </div>
              </div>
              <div className="fiche">
                <span className="num">Temps 2 · jours 11 à 20</span>
                <h3>Arbitrer</h3>
                <p>
                  Nous construisons deux ou trois scénarios chiffrés jusqu&apos;à l&apos;euro et nous
                  les déroulons avec vous en séance. Chaque scénario porte son coût, son risque, sa
                  charge administrative et ce qu&apos;il vous fait perdre ailleurs. Vous tranchez.
                  Nous ne tranchons pas à votre place.
                </p>
                <div style={{ marginTop: "1.4em" }}>
                  <span className="chip">Sortie : les scénarios</span>
                </div>
              </div>
              <div className="fiche fiche--vert">
                <span className="num">Temps 3 · jours 21 à 30</span>
                <h3>Documenter</h3>
                <p>
                  Nous écrivons le plan : ce qui change, dans quel ordre, avec quel calendrier, sur
                  quel fondement, et qui fait quoi. Vous pouvez demander une validation par un avocat
                  fiscaliste partenaire, à votre main. Le rendez-vous avec votre expert-comptable se
                  cale à ce moment-là.
                </p>
                <div style={{ marginTop: "1.4em" }}>
                  <span className="chip chip--vert">Sortie : le plan signé</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "18px" }}>
              <FigCalendrier />
            </div>
          </div>
        </section>

        {/* 10 · LIVRABLE */}
        <section data-cote="08" className="sombre">
          <div className="wrap">
            <span className="eyebrow reveal">Le livrable</span>
            <h2 className="reveal">Ce que vous avez entre les mains au trentième jour</h2>
            <p className="reponse reveal">
              Un dossier écrit, pas une présentation. Six pièces, numérotées, que vous pouvez
              transmettre à votre expert-comptable, à votre banque ou à votre avocat sans avoir
              besoin de nous pour les expliquer.
            </p>
            <div className="livrables reveal" style={{ marginTop: "2.4rem" }}>
              {LIVRABLES.map(([n, titre, texte]) => (
                <div key={n}>
                  <span className="n">{n}</span>
                  <h4>{titre}</h4>
                  <p>{texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11 · CTA INTERMÉDIAIRE */}
        <section data-cote="09">
          <div className="wrap wrap--etroit">
            <span className="ancrage reveal">
              Coût de l&apos;inaction : 20 à 30 k€ par an, environ 150 k€ sur dix ans
            </span>
            <h2 className="reveal">Deux façons de commencer</h2>
            <p className="lead reveal">
              Répondez à cinq questions et vous obtenez immédiatement une fourchette chiffrée de ce
              que vous laissez probablement passer chaque année. Aucune coordonnée demandée à ce
              stade. Si vous préférez en parler d&apos;abord, prenez trente minutes, sans engagement
              et sans présentation commerciale.
            </p>
            <div className="actions reveal">
              <a className="btn btn--primaire" href="#dossier" data-ev="cta_milieu">
                Estimer ce que je laisse passer <span className="fl">→</span>
              </a>
              <a className="btn btn--fantome" href={CAL} data-ev="cta_cal_milieu">
                Réserver 30 minutes
              </a>
            </div>
            <p className="micro reveal">
              Réponse d&apos;un humain sous deux heures ouvrées. Vous saurez tout de suite si votre
              dossier relève de nous.
            </p>
          </div>
        </section>

        {/* 12 · ANATOMIE DU GAIN */}
        <section id="preuve" data-cote="10" className="sombre">
          <div className="wrap">
            <span className="eyebrow reveal">La preuve</span>
            <h2 className="reveal">Un dossier réel, démonté devant vous</h2>
            <p className="reponse reveal">
              Un chiffre qu&apos;on répète est un argument. Un chiffre qu&apos;on ouvre ligne à ligne
              est une preuve. Voici donc un dossier de cabinet, anonymisé : ce que nous avons trouvé,
              ce que nous avons déplacé, et ce que nous n&apos;avons pas touché.
            </p>

            <div className="fiche reveal" style={{ marginTop: "2.4rem" }}>
              <table className="anat">
                <caption>
                  Dossier anonymisé · dirigeant d&apos;un groupe de quatre entités · holding,
                  deux sociétés d&apos;exploitation, une SCI
                </caption>
                <thead>
                  <tr>
                    <th>Ce que nous avons arbitré</th>
                    <th>Avant</th>
                    <th>Après</th>
                    <th style={{ textAlign: "right" }}>Effet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Forme de la holding et statut du dirigeant</td>
                    <td className="gris">Société par actions, dirigeant assimilé salarié</td>
                    <td className="gris">Passage en gérance travailleur non salarié</td>
                    <td className="n">Coût du même net divisé</td>
                  </tr>
                  <tr>
                    <td>Remontée des résultats des filiales</td>
                    <td className="gris">Dividendes remontés sans régime</td>
                    <td className="gris">Régime mère-fille activé</td>
                    <td className="n">Frottement quasi supprimé</td>
                  </tr>
                  <tr>
                    <td>Compte courant d&apos;associé</td>
                    <td className="gris">Sommes laissées, non rémunérées</td>
                    <td className="gris">Convention écrite, intérêts servis</td>
                    <td className="n">Revenu supplémentaire</td>
                  </tr>
                  <tr>
                    <td>Calibrage des charges de la holding</td>
                    <td className="gris">Résultat imposé sans pilotage</td>
                    <td className="gris">Holding tenue proche du point mort</td>
                    <td className="n">Base imposable maîtrisée</td>
                  </tr>
                  <tr className="total">
                    <td colSpan={3}>Ordre de grandeur récupéré sur la première année</td>
                    <td className="n">30 000 €</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ marginTop: "1.7em", color: "var(--gris-bas)", fontSize: "14.5px" }}>
                Ce que nous n&apos;avons pas touché : l&apos;activité, les contrats commerciaux, la
                trésorerie d&apos;exploitation. Aucun produit financier n&apos;a été souscrit et
                aucune structure n&apos;a été créée pour l&apos;occasion. Chaque décision a été
                actée par écrit avec son fondement, puis passée par l&apos;expert-comptable du
                groupe.
              </p>
            </div>

            <div className="grille-2 reveal" style={{ marginTop: "18px" }}>
              <div className="fiche fiche--neutre">
                <span className="num">Ce que ça veut dire</span>
                <p>
                  Aucune de ces décisions n&apos;est exotique. Prises séparément, elles sont
                  banales. C&apos;est leur combinaison et leur ordre qui produisent le résultat, et
                  c&apos;est exactement ce que personne n&apos;avait le mandat de faire.
                </p>
              </div>
              <div className="fiche fiche--neutre">
                <span className="num">Ce que ça ne veut pas dire</span>
                <p>
                  Que ce sera votre chiffre. Certains dossiers dégagent moins, quelques-uns
                  davantage, et un sur cinq se conclut par « ne changez rien ». Nous ne promettons
                  aucun montant avant d&apos;avoir ouvert votre dossier.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "18px" }}>
              <FigDecennie />
            </div>

            <div className="actions reveal">
              <a className="btn btn--primaire" href="#dossier" data-ev="cta_apres_preuve">
                Voir ce que ça donne chez moi <span className="fl">→</span>
              </a>
              <a className="btn btn--texte" href={CAL} data-ev="cta_cal_preuve">
                Ou en parler trente minutes
              </a>
            </div>
            <p className="micro reveal">
              Deux minutes de questions, et vous obtenez une première estimation chiffrée avant même
              de nous laisser vos coordonnées.
            </p>
          </div>
        </section>

        {/* 13 · VERROUS */}
        <section data-cote="11">
          <div className="wrap">
            <span className="eyebrow reveal">Nos verrous</span>
            <h2 className="reveal">Trois règles qui vous protègent de nous</h2>
            <p className="reponse reveal">
              Le conseil patrimonial français a un problème structurel : la plupart des acteurs sont
              rémunérés par les produits qu&apos;ils placent. Nous avons donc posé trois règles qui
              rendent ce conflit impossible chez nous, et nous les écrivons sur la page plutôt que
              dans nos conditions générales.
            </p>
            <div className="grille-3 reveal" style={{ marginTop: "2.4rem" }}>
              <div className="fiche fiche--neutre">
                <span className="num">Premier verrou</span>
                <h3>Aucun produit maison</h3>
                <p>
                  Nous ne fabriquons rien, donc nous n&apos;avons rien à vous vendre. Si votre plan
                  ne nécessite aucun contrat, il n&apos;y en aura aucun.
                </p>
              </div>
              <div className="fiche fiche--neutre">
                <span className="num">Deuxième verrou</span>
                <h3>La mission est payée par vous</h3>
                <p>
                  Notre seule rémunération sur cette mission vient de vous. Personne d&apos;autre ne
                  nous paie pour orienter vos décisions.
                </p>
              </div>
              <div className="fiche fiche--neutre">
                <span className="num">Troisième verrou</span>
                <h3>Aucune promesse de rendement</h3>
                <p>
                  Nous chiffrons des écarts constatés sur votre situation. Nous ne projetons pas de
                  performance et nous ne garantissons aucun montant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 14 · SÉLECTIVITÉ */}
        <section id="selectivite" data-cote="12" className="sombre">
          <div className="wrap">
            <span className="eyebrow reveal">Sélectivité</span>
            <h2 className="reveal">Huit dossiers par mois, et nous choisissons lesquels</h2>
            <p className="reponse reveal">
              Ce n&apos;est pas une posture de rareté, c&apos;est une contrainte de méthode. Un
              dossier demande une trentaine d&apos;heures réparties sur trente jours, dont plusieurs
              séances avec vous. Au-delà de huit, la qualité tombe. Nous préférons refuser un dossier
              que le traiter à moitié.
            </p>
            <div className="accroche reveal">
              <p>Un dossier qui ne récupère rien nous coûte plus cher qu&apos;il ne vous coûte.</p>
            </div>
            <p className="reveal">
              Nous refusons aussi les dossiers où nous ne serions pas impactants, même quand le
              dirigeant est prêt à payer. Un accompagnement qui ne récupère rien vous coûte de
              l&apos;argent et nous coûte notre réputation. Voici donc les critères, écrits.
            </p>
            <div className="tri reveal" style={{ marginTop: "2.2rem" }}>
              <div className="col col--oui">
                <h3>Nous prenons</h3>
                <ul>
                  {PRENONS.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
              <div className="col col--non">
                <h3>Nous ne prenons pas</h3>
                <ul>
                  {REFUSONS.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="capacite reveal">
              <span>Règle de capacité</span>
              <span>
                Les huit dossiers du mois partis, nous décalons au mois suivant et{" "}
                <b>nous vous le disons dès la réponse</b>, plutôt que de vous faire patienter.
              </span>
            </div>
          </div>
        </section>

        {/* 15 · ET SI ON NE TROUVE RIEN */}
        <section data-cote="13">
          <div className="wrap wrap--etroit">
            <span className="eyebrow reveal">La question qu&apos;on nous pose rarement</span>
            <h2 className="reveal">Et si vous ne trouvez rien chez moi ?</h2>
            <p className="reponse reveal">
              Ça arrive dans environ un dossier sur cinq. Votre situation est déjà cohérente, votre
              expert-comptable a bien travaillé, il n&apos;y a pas d&apos;écart significatif à
              récupérer. Dans ce cas, nous vous le disons par écrit, avec le chiffrage qui le
              démontre.
            </p>
            <p className="reveal">
              Ce n&apos;est pas un échec, et ce n&apos;est pas rien. Vous repartez avec la
              cartographie complète de votre situation, la preuve chiffrée que vous ne passez pas à
              côté de vingt ou trente mille euros par an, et les trois signaux qui devront vous faire
              rouvrir le dossier plus tard. Beaucoup de dirigeants nous disent que c&apos;est la
              première fois qu&apos;ils dorment tranquilles sur ce sujet.
            </p>
            <p className="reveal">
              C&apos;est aussi pour cette raison que nous auditons avant de promettre. Un cabinet qui
              vous annonce un montant avant d&apos;avoir ouvert vos comptes vous vend un chiffre, pas
              un travail.
            </p>
          </div>
        </section>

        {/* 16 · QUI S'EN OCCUPE */}
        <section data-cote="14" className="sombre">
          <div className="wrap">
            <span className="eyebrow reveal">Qui s&apos;en occupe</span>
            <h2 className="reveal">Deux personnes, pas un service</h2>
            <p className="reponse reveal">
              Votre dossier est traité par deux personnes identifiées, du premier échange à la remise
              du plan. Vous ne passerez pas d&apos;un commercial à un chargé de mission puis à un
              assistant. C&apos;est aussi pour ça qu&apos;il n&apos;y a que huit dossiers par mois.
            </p>
            <div className="gens reveal" style={{ marginTop: "2.4rem" }}>
              <div className="p">
                {/* Remplacer par <img src="/jeremy.jpg" alt="Jérémy Poutot" className="ph" /> */}
                <div className="ph mono">JP</div>
                <div>
                  <h4>Jérémy Poutot</h4>
                  <span className="role">Fondateur · arbitrage</span>
                  <p>
                    Douze ans de pratique, deux masters en stratégies sociétaires et ingénierie
                    patrimoniale à Toulouse, diplômé fédéral juriste du patrimoine. Il mène les
                    séances d&apos;arbitrage et signe le plan. Il a aussi dirigé et perdu des
                    sociétés, ce qui change la façon dont on regarde un bilan.
                  </p>
                </div>
              </div>
              <div className="p">
                <div className="ph mono">MA</div>
                <div>
                  <h4>Marie-Amélie</h4>
                  <span className="role">Pôle ingénierie · construction</span>
                  <p>
                    Elle construit la cartographie et les scénarios chiffrés, et c&apos;est elle qui
                    va chercher la ligne qui manque dans la liasse. C&apos;est votre interlocutrice
                    au quotidien pendant les trente jours.
                  </p>
                </div>
              </div>
            </div>
            <div className="fiche fiche--neutre reveal" style={{ marginTop: "18px" }}>
              <span className="num">Autour d&apos;eux</span>
              <p>
                Cap. est l&apos;offre de stratégie de rémunération d&apos;Arras Patrimoine, cabinet
                d&apos;ingénierie patrimoniale installé à Arras et intervenant partout en France en
                visio. Le cabinet compte huit experts salariés et quinze experts externes
                mobilisables selon les dossiers, dont un avocat fiscaliste partenaire dont la
                validation vous est proposée en option.
              </p>
            </div>
          </div>
        </section>

        {/* 17 · PREUVE SOCIALE */}
        <section data-cote="15">
          <div className="wrap">
            <span className="eyebrow reveal">Ils l&apos;ont vécu</span>
            <h2 className="reveal">Ce que disent les dirigeants qui sont passés par là</h2>
            <p className="reponse reveal">
              Extraits d&apos;avis publics laissés par des clients du cabinet, reproduits tels quels.
            </p>
            <div className="avis reveal" style={{ marginTop: "2.4rem" }}>
              {AVIS.map(([texte, qui]) => (
                <div className="a" key={qui}>
                  <div>
                    <span className="et">★★★★★</span>
                    <p className="txt">{texte}</p>
                  </div>
                  <span className="qui">{qui}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 18 · FAQ */}
        <section data-cote="16" className="sombre">
          <div className="wrap wrap--etroit">
            <span className="eyebrow reveal">Questions fréquentes</span>
            <h2 className="reveal">Ce que les dirigeants nous demandent avant de se lancer</h2>
            <div className="faq reveal" style={{ marginTop: "2.2rem" }}>
              {FAQ.map(([q, r]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <div className="rep-faq">
                    <p>{r}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 18 bis · CE QUE DONNE L'APPEL */}
        <section data-cote="16b">
          <div className="wrap">
            <span className="eyebrow reveal">Sans engagement</span>
            <h2 className="reveal">Ce que vous repartez avec après trente minutes</h2>
            <p className="reponse reveal">
              L&apos;échange de découverte n&apos;est pas une présentation commerciale. Nous ouvrons
              votre situation à voix haute et vous repartez avec trois choses, que vous travailliez
              avec nous ensuite ou non.
            </p>
            <div className="grille-3 reveal" style={{ marginTop: "2.4rem" }}>
              <div className="fiche">
                <span className="num">01</span>
                <h3>Un avis franc</h3>
                <p>
                  Est-ce qu&apos;il y a un levier chez vous, oui ou non. Si la réponse est non, vous
                  l&apos;entendrez pendant l&apos;appel, pas après avoir signé.
                </p>
              </div>
              <div className="fiche">
                <span className="num">02</span>
                <h3>Un ordre de grandeur</h3>
                <p>
                  Ce que votre situation laisse probablement passer chaque année, avec la fourchette
                  et surtout ce qui la fait varier.
                </p>
              </div>
              <div className="fiche">
                <span className="num">03</span>
                <h3>Le prix, dit à voix haute</h3>
                <p>
                  Nous vous annonçons le tarif de la mission pendant l&apos;échange. Pas de
                  proposition envoyée trois jours plus tard, pas de relance.
                </p>
              </div>
            </div>
            <div className="rassure reveal" style={{ marginTop: "2rem" }}>
              <span>30 minutes, en visio</span>
              <span>Aucun document à préparer</span>
              <span>Aucune relance si vous ne donnez pas suite</span>
            </div>
          </div>
        </section>

        {/* 19 · QUESTIONNAIRE */}
        <section data-cote="17" id="dossier">
          <div className="wrap wrap--etroit">
            <span className="ancrage reveal">
              Ce que vous laissez peut-être passer : 20 à 30 k€ par an
            </span>
            <h2 className="reveal">Faites examiner votre situation</h2>
            <p className="reponse reveal">
              Douze questions, trois minutes, en quatre étapes. Elles servent à savoir si votre dossier
              relève de nous, pas à alimenter une base de prospection. Dès la deuxième étape, avant
              toute coordonnée, vous verrez apparaître une fourchette chiffrée de l&apos;écart annuel
              que nous irions chercher chez vous. Ensuite, une personne du cabinet vous répond sous
              deux heures ouvrées.
            </p>
            <Formulaire />
          </div>
        </section>

        {/* 20 · SORTIE DOUCE */}
        <section data-cote="18" className="sombre">
          <div className="wrap wrap--etroit">
            <div className="fiche fiche--neutre reveal">
              <span className="num">Si ce n&apos;est pas le moment</span>
              <h3>Prenez le temps, tout est expliqué gratuitement</h3>
              <p>
                Arras Patrimoine publie Les Planches : des fiches complètes, avec schémas et
                références officielles, sur le salaire et les dividendes, la holding, le compte
                courant d&apos;associé, la prévoyance ou combien se payer quand on dirige. C&apos;est
                pas compliqué, c&apos;est juste mal expliqué.
              </p>
              <div style={{ marginTop: "1.6em" }}>
                <a
                  className="btn btn--fantome"
                  href="https://www.arras-patrimoine.fr/planches"
                  data-ev="sortie_planches"
                >
                  Aller aux Planches <span className="fl">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="pied">
          <div className="wrap">
            <span className="wordmark" style={{ fontSize: "34px" }}>
              Cap<span className="pt">.</span>
            </span>
            <p style={{ marginTop: "1.4em" }}>
              Cap. est l&apos;offre de stratégie de rémunération d&apos;Arras Patrimoine, SARL
              immatriculée au RCS d&apos;Arras, boulevard de Strasbourg, 62000 Arras. Courtier en
              assurance et courtier en opérations de banque et services de paiement, immatriculé à
              l&apos;ORIAS sous le numéro 20006891, sous le contrôle de l&apos;ACPR.
            </p>
            <p>
              Cap. réalise de l&apos;ingénierie et de la stratégie de rémunération. Le cabinet ne
              délivre pas de consultation juridique : la validation juridique du plan est assurée, en
              option et à votre demande, par un avocat fiscaliste partenaire. Les cas chiffrés
              présentés sur cette page sont anonymisés et ne constituent ni une promesse ni un
              engagement de résultat.
            </p>
            <p style={{ marginTop: "1.6em" }}>
              <a href="https://www.arras-patrimoine.fr">Arras Patrimoine</a> ·{" "}
              <a href="https://www.arras-patrimoine.fr/planches">Les Planches</a> ·{" "}
              <a href="https://www.arras-patrimoine.fr/mentions-legales">Mentions légales</a> ·{" "}
              <a href="mailto:contact@arras-patrimoine.fr">contact@arras-patrimoine.fr</a>
            </p>
          </div>
        </footer>

        <BarreFlottante />
      </div>
    </>
  );
}
