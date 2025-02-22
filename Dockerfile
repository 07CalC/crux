FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install

CMD [ "bun", "start" ]
