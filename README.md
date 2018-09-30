# Proyecto IV - gAcademy

*gAcademy* es un proyecto en el marco de la asignatura [Infraestructuras Virtuales](https://github.com/JJ/IV-18-19) de la UGR. *gAcademy* nace para ser una herramienta basada en microservicios para ser utilizada en proyectos de **gestión de alumnos y profesores** en el ámbito académico.  
La idea principal es cambiar (y facilitar) la gestión de una academia donde hasta dar de alta un alumno puede ser una tarea tediosa. Los microservicios que incluirá este proyecto serán, entre otros, la creación de nuevos alumnos y profesores, asignación de grupos tanto a alumnos como a profesores y la gestión de horarios de aulas y grupos. 

## Servicios
| Lenguaje | Base de datos | Infraestructura | IC |
| -------- | ------------- | --------------- | -- |
| [Nodejs](https://nodejs.org/en/)  [Express.js](https://expressjs.com/)|[Mongodb](https://www.mongodb.com/es) | [Azure](https://azure.microsoft.com/en-es/) o [Heroku](https://www.heroku.com/) | [Travis](https://travis-ci.org/) |

En el desarrollo de gAcademy emplearé Nodejs como lenguaje principal para el servidor ya que permite llamadas asíncronas y parte de la idea de hacer aplicaciones escalables. Para la realización de la API emplearé Expressjs, framework de Nodejs que facilita mucho la tarea para las operaciones CRUD (Create Read Update Delete). Pero todo este desarrollo no puede ir solo, necesita de unos test que permitan automatizar si los cambios realizados son correctos. Travis es una herramienta muy popular entre los desarrollados para la integración continua ya que se configura directamente con GitHub resultando mucho más cómodo.  
Para el despliegue de la aplicación está en mente el uso de Heroku o de Azure. El uso de Heroku es debido a que se puede comenzar con una cuenta gratuita y en caso de querer ampliar las prestaciones del servidor se puede contratar según las necesidades de la aplicación. Por otra parte, Azure también ofrece una cuenta gratuita durate 12 meses en los que podemos utilizar su infraestructura ampliable según necesidades.


## Project Documentation
[Online Docs](https://pavocejudo.github.io/ProyectoIV/)



Copyright (c) 2018 Sergio Rodríguez Marín
