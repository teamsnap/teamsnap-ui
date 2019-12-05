## This is intended to be ran by codeship's compose setup.

FROM node:10.16.0-alpine

WORKDIR /usr/app
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
