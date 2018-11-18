FROM node:9

#se crea directorio de la app
WORKDIR /application

#Instalando dependencias
COPY package.json /application/

RUN npm install

COPY . /application/

EXPOSE 8080
CMD [ "node","src/app.js" ]
