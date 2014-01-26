/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('durandal generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('durandal:app', [
                '../../app'
            ]);

            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files you expect to exist here.
            '.jshintrc',
            '.editorconfig',
            '.gitignore',
            '.gitattributes',
            'package.json',
            'bower.json',
            'README.md',
            'Gruntfile.js',
            'index.html',
            'app/main.js',
            'app/viewmodels/shell.js',
            'app/viewmodels/home.js',
            'app/views/shell.html',
            'app/views/home.html',
            'css/app.less'
        ];

        helpers.mockPrompt(this.app, {
            appname: "My Test Application",
            appid: "org.test.app",
            author: "SPA Tools",
            starterkit: false,
            features: ["bootstrap", "fontawesome", "modernizr", "less"]
        });

        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile.apply(helpers, expected);
            done();
        });
    });
});
