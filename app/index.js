'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var DurandalGenerator = module.exports = function DurandalGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(DurandalGenerator, yeoman.generators.Base);

DurandalGenerator.prototype.askFor = function askFor() {
    var done = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [
        {
            name: "appname",
            message: "What is your application name?"
        },
        {
            name: "appid",
            message: "What is your application id (eg: com.yourname.yourapp)?"
        },
        {
            name: "author",
            message: "What is your application author's name?"
        },
        {
            type: "checkbox",
            name: "features",
            message: "Which features do you want to include in your application?",
            when: function (props) { return !props.starterkit },
            choices: [
                {
                    name: "Bootstrap",
                    value: "bootstrap",
                    checked: true
                },
                {
                    name: "Font Awesome",
                    value: "fontawesome",
                    checked: true
                },
                {
                    name: "Modernizr",
                    value: "modernizr",
                    checked: true
                },
                {
                    name: "LESS",
                    value: "less",
                    checked: true
                }
            ]
        }
    ];

    this.prompt(prompts, function (props) {
        this.appname = props.appname;
        this.appid = props.appid;
        this.author = props.author;

        this.features = {
            bootstrap: props.features.indexOf("bootstrap") !== -1,
            fontawesome: props.features.indexOf("fontawesome") !== -1,
            modernizr: props.features.indexOf("modernizr") !== -1,
            less: props.features.indexOf("less") !== -1
        };

        done();
    }.bind(this));
};

DurandalGenerator.prototype.app = function app() {
    this.mkdir('app');
    this.mkdir('app/viewmodels');
    this.mkdir('app/views');
    this.mkdir('lib');
    this.mkdir('css');
    this.mkdir('assets');

    this.template('_README.md', 'README.md');
};

DurandalGenerator.prototype.starter = function starter() {
    this.template('_index.html', 'index.html');
    this.template('_main.js', 'app/main.js');

    this.copy('shell.js', 'app/viewmodels/shell.js');
    this.template('_home.js', 'app/viewmodels/home.js');

    this.template('_shell.html', 'app/views/shell.html');
    this.template('_home.html', 'app/views/home.html');

    if (this.features.less) {
        this.copy('app.less', 'css/app.less');
    }
    else {
        this.copy('app.css', 'css/app.css');
    }
};

DurandalGenerator.prototype.gruntfile = function gruntfile() {
    this.template('_gruntfile.js', 'Gruntfile.js');
};

DurandalGenerator.prototype.package = function _package() {
    this.template('_package.json', 'package.json');
};

DurandalGenerator.prototype.git = function git() {
    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');
};

DurandalGenerator.prototype.bower = function bower() {
    this.template('_bower.json', 'bower.json');
};

DurandalGenerator.prototype.jshint = function jshint() {
    this.copy('jshintrc', '.jshintrc');
};

DurandalGenerator.prototype.editorConfig = function editorConfig() {
    this.copy('editorconfig', '.editorconfig');
};

