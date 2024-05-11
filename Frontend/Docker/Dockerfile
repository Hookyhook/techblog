FROM node:20.9-alpine as base

FROM base as dependencies
WORKDIR /app
COPY package.json  package-lock.json*  ./
RUN npm ci

FROM base as builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base as runner
RUN npm i -g serve
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve","-s", "app/dist"]