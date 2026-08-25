# Cap. — landing de la stratégie de rémunération du dirigeant

Site satellite d'Arras Patrimoine, destiné au sous-domaine `cap.arras-patrimoine.fr`.
Next.js 14 (App Router), aucun framework CSS, aucune dépendance superflue.

## Démarrer en local

```bash
npm install
cp .env.example .env.local   # puis renseigner les variables
npm run dev                  # http://localhost:3000
```

## Variables d'environnement

| Variable | Obligatoire | Rôle |
|---|---|---|
| `NOCRM_SUBDOMAIN` | oui | Sous-domaine noCRM, sans `.nocrm.io` |
| `NOCRM_API_KEY` | oui | Clé API noCRM. **À régénérer** : l'ancienne a transité par une discussion |
| `NEXT_PUBLIC_SITE_URL` | oui | `https://cap.arras-patrimoine.fr` |
| `NEXT_PUBLIC_CAL_URL` | non | Lien Cal, par défaut `.../decouverte-rem` |
| `NEXT_PUBLIC_BUNNY_LIBRARY` | non | Bibliothèque Bunny, par défaut `602292` |
| `NEXT_PUBLIC_BUNNY_VIDEO` | non | Identifiant de la vidéo |
| `NEXT_PUBLIC_MOIS_COURANT` | non | Bloc capacité : mois en cours de constitution |
| `NEXT_PUBLIC_PROCHAINE_OUVERTURE` | non | Bloc capacité : prochaine ouverture |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | non | Active le script Plausible |
| `NEXT_PUBLIC_GA_ID` | non | Réservé si vous branchez GA4 via GTM |

Sans clé noCRM, la route `/api/lead` ne perd rien : elle journalise le lead dans les logs Vercel
et répond quand même en succès. À surveiller les premiers jours.

## Déploiement GitHub puis Vercel

```bash
git init && git add . && git commit -m "Cap. v2"
git remote add origin git@github.com:VOTRE-COMPTE/cap-arras-patrimoine.git
git push -u origin main
```

Sur Vercel : *Add New Project*, importer le dépôt, framework détecté automatiquement,
ajouter les variables d'environnement, déployer. Puis *Settings → Domains* et ajouter
`cap.arras-patrimoine.fr`. Chez Infomaniak, faire pointer l'enregistrement `cap` en `CNAME`
vers `cname.vercel-dns.com`.

## Ce qui reste à faire avant la mise en ligne

1. **La ventilation des 30 000 €.** Le tableau de la section preuve porte encore des `[LOCK]`.
   Les remplir dans `app/page.jsx` (constante `POSTES` dans `components/donnees.js` pour les
   libellés, valeurs dans le tableau). Renseigner aussi le secteur et la tranche de CA du dossier.
2. **Les deux photos.** Déposer `public/jeremy.jpg` et `public/marie-amelie.jpg`, puis remplacer
   les blocs `<div className="ph">[LOCK]</div>` par les `<img className="ph" />` commentés à côté.
3. **Le bloc capacité.** Renseigner `NEXT_PUBLIC_MOIS_COURANT` et `NEXT_PUBLIC_PROCHAINE_OUVERTURE`,
   ou supprimer le bloc `.capacite` si vous ne voulez pas le tenir à jour.
4. **La mesure.** Renseigner `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`, ou poser GTM dans `app/layout.jsx`.
5. **Le maillage.** Ajouter depuis les Planches 02, 07, 08 et 18 du hub un lien vers ce sous-domaine.

## Événements mesurés

`video_lecture`, `scroll_25` à `scroll_100`, `micro_engagement` (avec la tranche choisie),
`form_demarre`, `form_etape2`, `lead_envoye`, `faq_ouverte`, et `clic_*` pour chaque CTA
identifié par emplacement (`cta_header`, `cta_milieu`, `cta_apres_preuve`, `cta_flottant`,
`cta_cal_hero`, `cta_cal_milieu`, `cta_cal_preuve`, `sortie_planches`).

Tout passe par `window.dataLayer` et par Plausible si présent : voir `components/mesure.js`.

## Structure

```
app/
  layout.jsx        métadonnées, polices, script de mesure
  page.jsx          les 20 blocs de la landing (composant serveur)
  globals.css       tout le design system
  robots.js         indexation ouverte + sitemap
  sitemap.js
  api/lead/route.js création du lead noCRM
components/
  Fx.jsx            révélations, compteurs, mesure du scroll et des clics
  MicroEngagement   la question unique du hero
  Formulaire.jsx    le questionnaire en deux écrans + écran de succès avec Cal embarqué
  Video.jsx         Bunny en click-to-play
  BarreFlottante    CTA mobile
  Schema.jsx        FIG. 01, la ligne d'arbitrage
  donnees.js        contenu éditorial (scènes, livrables, avis, FAQ, critères)
  jsonld.js         balisage schema.org
public/llms.txt     fiche destinée aux moteurs génératifs
```

## Règles à ne pas casser

- Aucun label ne sort de sa boîte dans le SVG : mono 10 px maximum, 24 caractères par ligne.
- Le rose `#E85D8A` ne sert jamais de fond de section : trait, surligneur, point de marque, CTA.
- Le vocabulaire : ingénierie et stratégie de rémunération, jamais « optimisation fiscale »,
  jamais de pourcentage de gain. La validation juridique appartient à l'avocat partenaire.
- Sous chaque `h2`, le paragraphe `.reponse` répond avant de développer : c'est ce bloc que les
  moteurs génératifs découpent et citent.
