
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci --production
# Build client if source exists
RUN if [ -d client ] && [ -f client/package.json ]; then cd client && npm ci && npm run build && cd ..; fi
EXPOSE 10000
ENV PORT=10000
CMD ["node", "server/index.js"]
