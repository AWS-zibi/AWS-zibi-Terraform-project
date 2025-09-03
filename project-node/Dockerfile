# Stage 1: Builder
FROM public.ecr.aws/docker/library/node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

# Stage 2: Runtime
FROM public.ecr.aws/docker/library/node:18-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node", "index.js"]
