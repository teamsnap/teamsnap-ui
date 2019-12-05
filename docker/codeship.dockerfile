## This is intended to be ran by codeship's compose setup.

FROM node:10.16.0-alpine

WORKDIR /usr/app
COPY package.json .
COPY yarn.lock .
COPY src/core/test_environment.ts /usr/app/src/core/environment.ts
RUN yarn install

COPY . .
