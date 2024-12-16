# syntax=docker/dockerfile:1.4

# -------------------------------------------------------------------
# Development Stage
# -------------------------------------------------------------------
FROM --platform=$BUILDPLATFORM node:20-slim AS development
WORKDIR /app

# Install dependencies first (including devDependencies)
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]