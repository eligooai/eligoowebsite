# context: repo root — builds the admin SPA, then runs the API which serves it
FROM node:22-bookworm-slim AS adminbuild
WORKDIR /admin
COPY admin/package.json admin/package-lock.json* ./
RUN npm install --no-audit --no-fund
COPY admin/ .
RUN npm run build

FROM node:22-bookworm-slim
WORKDIR /app
COPY server/package.json ./
RUN npm install --omit=dev --no-audit --no-fund
COPY server/src ./src
COPY --from=adminbuild /admin/dist ./admin-dist
ENV DATA_DIR=/data ADMIN_DIST=/app/admin-dist NODE_ENV=production
EXPOSE 4000
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s CMD node -e "fetch('http://127.0.0.1:4000/eapi/social').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "src/index.js"]
