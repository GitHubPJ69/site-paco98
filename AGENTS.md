# Infos projet — Site Paco_98

## Les personnes

**PJ (Pierre-Jean)** — le dev du projet
- Prénom : Pierre-Jean
- Email : pierrejean.remy.martin@gmail.com
- Rôle : construit et maintient le site pour son frère

**Paco_98 (Nicolas Martin)** — l'artiste, sujet du site
- Vrai nom : Nicolas Martin
- Pseudo artiste : Paco_98
- Collectif : TKND (association loi 1901), fondé par trois amis d'enfance lyonnais
- Style : rap urbain, lyonnais
- LinkedIn : https://www.linkedin.com/in/nicolas-paco-martin/

---

## Réseaux sociaux de Paco_98

| Plateforme | URL |
|---|---|
| Instagram | https://www.instagram.com/paco_98_/ |
| Spotify | https://open.spotify.com/artist/3wsjrXnaGevtYHtap2lctk |
| Deezer | https://www.deezer.com/fr/artist/188001047 |
| SoundCloud | https://soundcloud.com/nicolas-martin-395728650/prof-re-fe-rent |
| YouTube | https://www.youtube.com/channel/UCdO8j2PFrubkBNB-XV-fJzA |
| LinkedIn | https://www.linkedin.com/in/nicolas-paco-martin/ |

---

## Intégrations techniques

### Formspree (formulaire de contact)
- Endpoint : `https://formspree.io/f/xredrlby`
- Email de réception : pierrejean.remy.martin@gmail.com
- Intégré dans `index.html` via `action="https://formspree.io/f/xredrlby"`
- La logique AJAX est dans `js/main.js`

### Spotify embed
- Iframe dans la section Musique de `index.html`
- URL embed : `https://open.spotify.com/embed/artist/3wsjrXnaGevtYHtap2lctk?utm_source=generator&theme=0`

### Instagram feed (à configurer)
- Service : Behold.so (free tier — 150 posts/mois)
- Compte à connecter : @paco_98_
- Placeholder actuel dans `index.html` section Instagram
- Une fois configuré : remplacer le bloc `.instagram__placeholder` par le script embed Behold

---

## Stack technique

- HTML + CSS + JS vanilla (aucune dépendance)
- Google Fonts : Bebas Neue (titres) + Inter (corps)
- Hébergement prévu : Infomaniak (FTP vers dossier `web/`)
- Repo Git : à configurer sur GitHub

---

## Structure des fichiers

```
site_web_nico/
├── index.html       — page unique complète (8 sections)
├── css/style.css    — dark theme, responsive mobile-first
├── js/main.js       — burger menu, scroll animations, formulaire AJAX
├── assets/          — dossier pour les photos (vide pour l'instant)
├── CLAUDE.md        — point d'entrée pour Claude
└── agents.md        — ce fichier
```

---

## Sections du site (ordre scroll)

1. **Hero** — PACO_98, tagline, réseaux sociaux, CTA
2. **À Propos** — Collectif TKND, citation, photo (placeholder)
3. **Musique** — Spotify embed + liens Deezer / SoundCloud / YouTube
4. **Événements** — 100% Rap Lyonnais · La Pente, Lyon 69001
5. **Ateliers** — interventions scolaires (voir liste ci-dessous)
6. **Instagram** — feed auto Behold.so (placeholder actuel)
7. **Contact** — formulaire Formspree + email PJ

---

## Interventions scolaires de Paco_98

- Collège la Xavière, Chaponnay 69970 — atelier écriture rap, élèves de 5ème (cours de français)
- École primaire New-School, 69 Av. Jean Mermoz, 69008 Lyon
- Collège Marcel-Pagnol, Oullins-Pierre-Bénite 69149 — Clip RAP, projet pHARe, concours Non Au Harcèlement — Lauréat départemental
- Festival du Conte de l'Ilose, Parc de Miribel — création musicale collective

---

## À faire / en attente

- [x] Repo GitHub : https://github.com/GitHubPJ69/site-paco98
- [ ] Configurer Behold.so et remplacer le placeholder Instagram
- [ ] Ajouter une vraie photo de Paco dans la section À Propos (remplacer le SVG placeholder)
- [ ] Déployer sur Infomaniak
- [ ] Mettre à jour l'email contact@tknd.fr quand disponible (actuellement pierrejean.remy.martin@gmail.com)
