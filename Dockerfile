# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Instala dependencias de forma determinista
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copia el resto del proyecto y construye
COPY . .
ENV CI=true
RUN npm run build

# Production stage: nginx sirve los archivos estáticos
FROM nginx:stable-alpine

# Borra contenido por defecto y copia build
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html

# (Opcional) copia un nginx.conf personalizado si lo necesitas:
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s \
  CMD wget -qO- --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]