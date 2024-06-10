FROM node:lts

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

ENV MONGODB_URL="mongodb+srv://arifaevaixa:DRyokDZQO95JtnPp@devscaleid.diepraq.mongodb.net/digicommerce?retryWrites=true&w=majority&appName=DevscaleID"

EXPOSE 8006

CMD [ "npm", "run", "dev"]