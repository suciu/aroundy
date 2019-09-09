FROM node:12.5.0-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PORT 3000
ENV NODE_ENV development

EXPOSE 3000

# Install app dependencies
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json

RUN npm install
RUN npm install -g create-react-app

# Bundle app source
COPY . /usr/src/app

CMD npm run start