# ---------- Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy source code
COPY . .

# Remove old build (safety)
RUN rm -rf .next

# Build the Next.js app
RUN npm run build

# ---------- Runtime stage ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Copy standalone build
COPY --from=builder /app/.next/standalone ./

# Copy public folder
COPY --from=builder /app/public ./public

EXPOSE 8080

# Start server
CMD ["node", "server.js"]
