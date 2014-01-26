'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require("path");
var fs = require("fs");

var ViewmodelGenerator = module.exports = function ViewmodelGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the viewmodel subgenerator with the argument ' + this.name + '.');
};

util.inherits(ViewmodelGenerator, yeoman.generators.NamedBase);

ViewmodelGenerator.prototype.askFor = function askFor() {
    var done = this.async();

    var prompts = [
        {
            type: "confirm",
            name: "view",
            message: "Would you like to create an associated view?",
            default: true
        },
        {
            type: "confirm",
            name: "route",
            message: "Would you like to append route to your shell?",
            default: true
        },
        {
            name: "title",
            message: "What is your page title?",
            when: function (props) { return !!props.route; },
            default: this.name
        },
        {
            type: "confirm",
            name: "menu",
            message: "Would you like to append route to menu?",
            when: function (props) { return !!props.route; },
            default: true
        }
    ];

    this.prompt(prompts, function (props) {
        this.view = props.view;
        this.route = props.route;
        this.title = props.title;
        this.menu = props.menu;

        this.module = "viewmodels/" + this.name;

        done();
    }.bind(this));
};

ViewmodelGenerator.prototype.files = function files() {
    this.template('_viewmodel.js', "app/".concat(this.module, ".js"));

    if (this.view)
        this.template('_view.html', "app/views/".concat(this.name, ".html"));
};

ViewmodelGenerator.prototype.appendRoute = function appendRoute() {
    if (!this.route)
        return;

    var shellPath = 'app/viewmodels/shell.js',
        content = this.readFileAsString(shellPath),
        route = JSON.stringify({
            route: this.name,
            moduleId: this.module,
            title: this.title,
            nav: this.menu
        });

    content = content.replace(/(\s*)(\/\*\{durandal:routes\}\*\/)/, "$1" + route + ",$1$2");
    fs.writeFileSync(shellPath, content);
};