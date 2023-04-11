FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app
COPY . .

# Build app
RUN npm run build

EXPOSE 3004
CMD [ "node", "dist/index.js" ]