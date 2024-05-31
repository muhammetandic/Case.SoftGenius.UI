FROM node:lts-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

FROM nginx:stable-alpine as production

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

