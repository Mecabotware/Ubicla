![alt text](http://bicis.mecabotware.com/logo.svg "Ubicla")

Ubicla
======

Ubicla es el front-end de una aplicación web exportable a dispositivos móviles que provee información valiosa para ciclistas.

##Dependencias

```
$ npm install -g cordova ionic
```

##Instalación / Configuración 
###En el navegador
- Clona el proyecto 
- Corre un servidor HTTP en la carpeta www

Una opción puede ser utilizar  Simple HTTP Server de Python.

```
python -m SimpleHTTPServer

```

###En tu dispositivo
Sobre la raíz del proyecto ejecuta

```
ionic platform [plataforma]
ionic run [plataforma]
```
Por el momento las plataformas soportadas son `android` y `ios`

##Screenshots
![alt text](http://bicis.mecabotware.com/u1.png "Ubicla Inicio")
![alt text](http://bicis.mecabotware.com/u2.png "Ubicla Mapa")

##Demo
####[Demo](http://mecabotware.github.io/Ubicla)

##¿Preguntas o problemas? 
Si tienes algún problema con la aplicación o te gustaría proponer alguna funcionalidad te invitamos a la conversación del proyecto en nuestra 
página de [issues/problemas] (https://github.com/mecabotware/ubicla/issues). 

##¿Utilizando nuestro código? Nos encantaría saber 
Dado que este proyecto se hizo para el beneficio social a través de Open Data Puebla y Mecabotware nos gustaría saber el impacto que se puede generar.
Por eso te invitamos a que compartas la URL y algunos screenshots de tu aplicación a: <hola@hfpuebla.org> y a <mecabotware@mecabotware.com>

##Desarrollo
Ubicla está basada en [Ionic Framework](http://ionicframework.com/) que a su vez está basado en [AngularJS](https://angularjs.org/) y [Apache Cordova](http://cordova.apache.org/). Utilizamos [OpenStreetMap](http://www.openstreetmap.org/#map=5/23.944/-102.579) como servidor de mapas y  [Leaflet](http://leafletjs.com/) para manejarlos mediante [angular-leaflet-directive](http://tombatossals.github.io/angular-leaflet-directive/#!/). Los datos de los marcadores los obtenemos mediante la [API de Foursquare](https://developer.foursquare.com/).

##Contribuye
Te invitamos a que partucipes en el desarrollo de este proyecto, entra a la página de [issues/problemas] (https://github.com/mecabotware/ubicla/issues)
donde estamos discutiendo el desarrollo de nuevas funcionalidades y donde puedes tomar una tarea pendiente por hacer.

El objetivo en un futuro cercano es construir un backend para nuestra aplicación e integrar el conocimiento de más colectivos ciclistas. SI tienes alguna idea no dudes en escribirnos.

##Licencia
_Available under the license: GNU Affero General Public License (AGPL) v3.0. Read the document [LICENSE](/LICENSE) for more information_

##Equipo
Ubicla es un proyecto liderado por [Mecabotware](http://mecabotware.com), desarrollado como un proyecto de [Open Data Puebla](http://puebla.codeandomexico.org/) por una iniciativa del colectivo [Bicionudos](http://bicionudos.com/) y amorosamente mantenido por la comunidad  del capítulo de [Hackers and Founders Puebla](http://www.hfpuebla.org)

Nuestro core team:
- [Hugo Aguirre](https://github.com/bul-ikana)
- [Edson Cortés](https://github.com/edmodj)
- [Noé Domínguez](https://github.com/poguez)


![alt text](http://bicis.mecabotware.com/mecabotware.svg "Mecabotware")

![alt text](http://bicis.mecabotware.com/hf.svg "HF")

![alt text](http://bicis.mecabotware.com/opendata.svg "OpenData")

![alt text](http://bicis.mecabotware.com/Bicionudos.png "Bicionudos")
