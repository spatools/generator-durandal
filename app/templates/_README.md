# <%= appname  %>

This document explain how to develop and build this application.

## Getting Started

### Install dependencies

Install all dependencies

```
$ npm install & bower install
```

### Build configurations

[GruntJS](http://gruntjs.com/) is used to build application. 
Multiple grunt definitions is defined to build, test, serve and live-reload your application.

#### Default

Allow to build application : merge, minify and test your application into __build/__ directory.

```
$ grunt
```

#### Build

Allow to build application : merge and minify your files into __build/__ directory.

```
$ grunt build
```

#### Test

Allow to test your application : lint and test your application.

```
$ grunt test
```

#### Serve

Start a mini server to test application in browser with livereload.

```
$ grunt serve
```

## Development

To contribute to development of this application, some conventions have to be used.

### Sub Generators

#### ViewModel

You can create a viewmodel using a yeoman subgenerator.
It allows to create a viewmodel, its view and append it to router.

```
$ yo durandal:viewmodel
```

### Directory Structure

#### ViewModels

Viewmodels have to be placed into __app/viewmodels/__ folder. 

#### Views

Views are partial html files and have to be placed into __app/views/__ folder. 

#### Assets

Assets (images, txt, xml, json, etc.) have to be placed into __assets/__ folder. 

#### Styles

Styles (CSS, LESS) have to be placed into __css/__ folder. 

#### Scripts (modules)

Scripts which have a common task and are included using require.js have to be placed into __app/modules/__ folder. 

#### Scripts (not require)

Scripts which are not included using require.js have to be placed into __js/__ folder. 
