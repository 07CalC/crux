FROM oven/bun:1.1-alpine AS deps
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json ./

RUN bun install --frozen-lockfile

FROM oven/bun:1.1-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bunx prisma generate

RUN bun run build
FROM oven/bun:1.1-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 bunjs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:bunjs .next

COPY --from=builder --chown=nextjs:bunjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:bunjs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["bun", "server.js"]
