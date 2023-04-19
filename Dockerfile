FROM node:lts-alpine

MAINTAINER wr_zhang25

RUN mkdir -p /app
COPY . /app/
WORKDIR /app

RUN node -v
RUN npm install pnpm -g
RUN pnpm i
RUN pnpm run build

EXPOSE 8080
CMD ["node", "./dist/main.js" ]
