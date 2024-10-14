# Stage 1: Build the NestJS application
FROM node:18-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy pnpm files (pnpm-lock.yaml, package.json)
COPY pnpm-lock.yaml ./
COPY package.json ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the source code
COPY . .

# Build the app
RUN pnpm run build

# Stage 2: Set up production-ready image
FROM node:18-alpine AS production

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy pnpm files and install only production dependencies
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install --prod

# Copy built files from the builder stage
COPY --from=builder /app/dist ./dist

# Copy any assets (like XML) from the source folder
COPY --from=builder /app/src/*.xml ./dist/src/

# Expose the application port
EXPOSE 3000

# Set the command to run the NestJS app
CMD ["node", "dist/main"]
