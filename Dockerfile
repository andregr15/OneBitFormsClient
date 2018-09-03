FROM node:10.9-alpine

ENV INSTALL_PATH /app

RUN npm install -g @angular/cli

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY . .

RUN npm install

CMD ["npm", "start"]