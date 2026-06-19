# Site vitrine — PACO_98

Site one-page pour Paco_98, artiste rap lyonnais du collectif TKND.

**Live :** https://paco98.pierre-jean-martin.ch *(après déploiement)*

---

## Stack

- HTML + CSS + JS vanilla (aucune dépendance)
- Google Fonts : Bebas Neue + Inter
- Formspree (formulaire de contact)
- Spotify embed (player intégré)
- Behold.so (feed Instagram — à configurer)

## Structure

```
├── index.html       # page unique (8 sections)
├── css/style.css    # dark theme, responsive mobile-first
├── js/main.js       # burger menu, animations scroll, formulaire AJAX
├── assets/          # images
├── CLAUDE.md        # contexte projet pour Claude
└── AGENTS.md        # infos détaillées, workflow, todo
```

## Lancer en local

Double-cliquer sur `index.html` — aucun serveur requis.

## Déployer

Le site est servi par un conteneur **nginx** (`Dockerfile`) derrière le reverse-proxy
**Caddy** du VPS Infomaniak, à `https://paco98.pierre-jean-martin.ch`. Caddy gère le
hostname public et le HTTPS ; la config de déploiement (compose, routing Caddy) vit
dans le repo infra `/opt/infra`, séparé de ce repo. Ici, on ne touche qu'au site et à
son image.

## Contribuer

Voir [AGENTS.md](AGENTS.md) pour le workflow (Issues → branche → PR → merge).
