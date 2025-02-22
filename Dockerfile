FROM node:slim

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD [ "npm", "start" ]
