FROM oven/bun:1.3.14 AS build

WORKDIR /app
COPY package.json bun.lock ./

RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:alpine

ENV PORT=8080
RUN sed -i 's/worker_processes  auto;/worker_processes  1;/' /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/templates/default.conf.template

EXPOSE 80 8080

CMD ["nginx", "-g", "daemon off;"]
