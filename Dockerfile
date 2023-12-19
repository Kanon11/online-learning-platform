
FROM node:16
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENV PORT=3000 
# RUN npm test
CMD ["node", "--max-old-space-size=4096", "index.js"]
