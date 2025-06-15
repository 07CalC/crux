# ---------- Dependencies ----------
FROM oven/bun:slim AS deps
WORKDIR /app

# Prisma needs OpenSSL
RUN apt-get update -y && apt-get install -y openssl

# Install all deps (not just prod)
COPY package.json bun.lock ./
COPY prisma ./prisma
RUN bun install && bunx prisma generate

# Copy source
COPY . .

# ---------- Build ----------
FROM oven/bun:slim AS build
WORKDIR /app

COPY --from=deps /app /app

# Build Next.js app (needs tailwindcss and postcss available)
RUN bun run build

# ---------- Production ----------
FROM oven/bun:slim AS production
WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy only what's needed
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/bun.lock ./bun.lock
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/next.config.ts ./next.config.ts
COPY --from=build /app/tsconfig.json ./tsconfig.json
COPY .env .env

ENV NODE_ENV=production

EXPOSE 3000
CMD ["bunx", "next", "start"]

