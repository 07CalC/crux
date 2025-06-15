
FROM node:18-alpine
WORKDIR /app

COPY . .
RUN npx prisma generate --no-engine
RUN npm run build

CMD npm start
