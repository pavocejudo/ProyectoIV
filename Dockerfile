FROM node:9

#se crea directorio de la app
WORKDIR /application

#Instalando dependencias
COPY package.json /application/
COPY src/ /application/

RUN npm install


EXPOSE 8080
CMD [ "node","src/app.js" ]
