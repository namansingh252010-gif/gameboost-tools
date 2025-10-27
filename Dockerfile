FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --omit=dev
EXPOSE 10000
CMD ["node", "index.js"]
