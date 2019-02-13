[![Build Status](https://travis-ci.org/pavocejudo/ProyectoIV.svg?branch=master)](https://travis-ci.org/pavocejudo/ProyectoIV)
# Proyecto IV - gAcademy

*gAcademy* es un proyecto en el marco de la asignatura [Infraestructuras Virtuales](https://github.com/JJ/IV-18-19) de la UGR. *gAcademy* nace para ser una herramienta basada en microservicios para ser utilizada en proyectos de **gestión de alumnos y profesores** en el ámbito académico.  
La idea principal es cambiar (y facilitar) la gestión de una academia donde hasta dar de alta un alumno puede ser una tarea tediosa. Los microservicios que incluirá este proyecto serán, entre otros, la creación de nuevos alumnos y profesores, asignación de grupos tanto a alumnos como a profesores y la gestión de horarios de aulas y grupos.

---

## Servicios
| Lenguaje | Base de datos | Infraestructura | IC | IaaS |
| -------- | ------------- | --------------- | -- | ---- |
| [Nodejs](https://nodejs.org/en/)  [Express.js](https://expressjs.com/)|[Mongodb](https://www.mongodb.com/es) | [Heroku](https://www.heroku.com/) | [Travis](https://travis-ci.org/) | [Digital Ocean](https://digitalocean.com) |

En el desarrollo de gAcademy emplearé Nodejs como lenguaje principal para el servidor ya que permite llamadas asíncronas y parte de la idea de hacer aplicaciones escalables. Para la realización de la API emplearé Expressjs, framework de Nodejs que facilita mucho la tarea para las operaciones CRUD (Create Read Update Delete). Pero todo este desarrollo no puede ir solo, necesita de unos test que permitan automatizar si los cambios realizados son correctos. Travis es una herramienta muy popular entre los desarrollados para la integración continua ya que se configura directamente con GitHub resultando mucho más cómodo.  

---
## Rutas API REST

LLamadas GET:
- ```/ ``` -> Devuelve status ok
- ```/status``` -> Al igual que ```/```
- ```/student/all``` -> Devuelve JSON con todos los datos de los estudiantes
- ```/teacher/all``` -> Devuelve JSON con todos los datos de los profesores
- ```/subject/<nombre>``` -> Devuelve JSON con información del a asignatura

LLamadas POST:
- ```/student/``` -> Registrar nuevo alumno. Los parámetros son *nombre*, *edad* y una lista de asignaturas separadas por comas
- ```/teacher/``` -> Registrar nuevo profesor. Los parámetros son *nombre* y *asignatura*

LLamadas PATCH:
- ```/student/<id>``` -> Actualizar información de un alumno como la edad o las asignaturas

LLamadas DELETE:
- ```/class/<alumno>/<asignatura>``` -> Elimina a un alumno de una asignatura



---
## Despliegue

Despliegue en [https://gacademy.herokuapp.com/](https://gacademy.herokuapp.com/)

El despliegue de la aplicación se ha realizado en Heroku. El uso de Heroku es debido a que se puede comenzar con una cuenta gratuita y en caso de querer ampliar las prestaciones
del servidor se puede contratar según las necesidades de la aplicación(dynos). Además Heroku proporciona un toolbet muy bien adaptado para trabajar con aplicaciones NodeJs.


---

## Despliegue mediante contenedor

Documentación de [Docker y DockerHub](https://pavocejudo.github.io/ProyectoIV/)


Contenedor: [https://docker-gacademy.herokuapp.com](https://docker-gacademy.herokuapp.com)

Enlace a [DockerHub](https://hub.docker.com/r/pavocejudo/proyectoiv/)

Despliegue final: 174.138.2.199

## Documentación del proyecto
[Online Docs](https://pavocejudo.github.io/ProyectoIV/)



Copyright (c) 2018 Sergio Rodríguez Marín
