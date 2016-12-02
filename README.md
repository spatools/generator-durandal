# generator-durandal [![Build Status](https://secure.travis-ci.org/spatools/generator-durandal.png?branch=master)](https://travis-ci.org/spatools/generator-durandal) [![NPM version](https://badge.fury.io/js/generator-durandal.png)](http://badge.fury.io/js/generator-durandal)

Complete [Yeoman](http://yeoman.io) generator for [Durandal](http://durandaljs.com/) with subgenerators.

## Getting Started

### Install Yeoman

This generator need Yeoman to be installed.

```
$ npm install -g yo
```

### Install Generator

To install generator-durandal from npm, run:

```
$ npm install -g generator-durandal
```

Then, initiate the generator:

```
$ yo durandal
```

Application is ready. Start development using a little HTTP server and live reload:

```
$ grunt serve
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## Development

### Build Configurations

Some build configurations are already defined using [Grunt](http://gruntjs.com).

#### build

Use build configuration to build your application to production.
It concatenates and minify your javascript, css, html and reduces your images' size.

```
$ grunt build
```

#### test

Use test configuration to test your application before building.
It tests your application using [jasmine](https://jasmine.github.io/) and [phantomjs](http://phantomjs.org/).

```
$ grunt test
```

#### serve

Use serve configuration to develop your application and test it into browser.
It host your application in a mini HTTP server with live reloading of your assets.

```
$ grunt serve
```

#### serve-build

Use serve configuration to develop your application and test it into browser.
It host your application in a mini HTTP server with live reloading of your assets.

```
$ grunt serve-build
```

#### default

Use default configuration to build and test your application.
It lints, builds and tests your application.

```
$ grunt
```

### Sub Generators

#### ViewModel

You can create a viewmodel using a yeoman subgenerator.
It allows to create a viewmodel, its view and append it to router.

```
$ yo durandal:viewmodel
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
