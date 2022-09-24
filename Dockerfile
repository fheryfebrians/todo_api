FROM node:latest

WORKDIR /app
EXPOSE 3030

COPY package.json .
RUN npm install

COPY . .

CMD [ "npm", "start" ]