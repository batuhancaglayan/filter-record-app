FROM node:12.13.1-alpine3.9

WORKDIR /usr/src/app

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./
RUN npm install

COPY build build
COPY config config
EXPOSE 8080
CMD [ "npm", "run", "start" ]
