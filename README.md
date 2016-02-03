
kibana-plugin-line
==================


Introduction
-------------

Ce plugin permet la création d'un graphique de type jauge sur Kibana Version 4.3.0:

* Définition du label
* Choix des couleurs
* Choix des niveaux


Contenu
-------
```
.
+-- index.js
+-- package.json
+-- public
    +-- bower_components
    ¦   +-- c3
    ¦   +-- moment
    +-- line_sg_controller.js
    +-- line_sg.html
    +-- line_sg.js
    +-- line_sg.less
    +-- line_sg_params.html
    +-- styles
        +-- accordion.css
```
Le plugin a été créé à partir des librairies Kibana et basé sur le framework Angularjs.

Liste des librairies ajoutées:

* c3.js: C3 makes it easy to generate D3-based charts by wrapping the code required to construct the entire chart. We don't need to write D3 code any more. (http://c3js.org/)
* moment.js: Parse, validate, manipulate, and display dates in JavaScript.(http://momentjs.com/)


Installation
------------

**1)** Ajouter le plugin 
```
	$ cd <path>/kibana/src/plugins
	$ git clone <depot> line-sg	
```

**2)** Redémarrer kibana 
```
	$ sudo supervisorctl restart kibana
```
