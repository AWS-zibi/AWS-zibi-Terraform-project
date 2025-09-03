# ---------- Base dependencies ----------
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev

# ---------- Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- Production runtime ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy only what’s needed for runtime
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copy public folder *only if it exists*
# (comment this line out if your repo has no /public directory)
# COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
