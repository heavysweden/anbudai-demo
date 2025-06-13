
FROM node:18

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --production
COPY . .
RUN npx prisma generate
EXPOSE 3000
CMD ["npm", "start"]
