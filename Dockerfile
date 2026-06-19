# Site statique Paco_98 servi par nginx, derrière le reverse-proxy Caddy du VPS.
# Image sans étape de build : on copie tel quel le site (HTML/CSS/JS vanilla).
# Le hostname public (paco98.pierre-jean-martin.ch) vit uniquement dans le
# Caddyfile (repo infra séparé) — rien de spécifique au domaine ici.
FROM nginx:alpine

# COPY . ne récupère que ce que .dockerignore laisse passer (le site statique),
# jamais .git ni les fichiers de documentation/metadonnées du repo.
COPY . /usr/share/nginx/html
