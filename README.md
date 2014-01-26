# generator-durandal [![Build Status](https://secure.travis-ci.org/spatools/generator-durandal.png?branch=master)](https://travis-ci.org/spatools/generator-durandal)

Complete [Yeoman](http://yeoman.io) generator for [Durandal](http://durandaljs.com/) with subgenerators.

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-durandal from npm, run:

```
$ npm install -g generator-durandal
```

Then, initiate the generator:

```
$ yo durandal
```

Now your application is ready, you can start developping :

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
It tests your application using [jasmine](http://pivotal.github.io/jasmine/) and [phantomjs](http://phantomjs.org/).

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
