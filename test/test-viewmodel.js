/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;
var fs = require("fs");

var tmpDir = path.join(__dirname, 'temp'),
    appDir = path.join(tmpDir, 'app'),
    vmDir = path.join(appDir, 'viewmodels'),
    shellPath = path.join(vmDir, 'shell.js');

describe('durandal viewmodel subgenerator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(tmpDir, function (err) {
            if (err) {
                return done(err);
            }

            this.viewmodel = helpers.createGenerator('durandal:viewmodel', [
                '../../viewmodel'
            ], ["test"]);

            fs.mkdirSync(appDir);
            fs.mkdirSync(vmDir);
            fs.writeFileSync(shellPath, '\n  /*{durandal:routes}*/');

            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files you expect to exist here.
            'app/viewmodels/test.js',
            'app/views/test.html'
        ];

        helpers.mockPrompt(this.viewmodel, {
            view: true,
            route: true,
            title: "Test Page",
            menu: true
        });

        this.viewmodel.options['skip-install'] = true;
        this.viewmodel.run({}, function () {
            helpers.assertFile.apply(helpers, expected);
            helpers.assertFileContent(
                shellPath,
                /\s{2}\{"route":"test","moduleId":"viewmodels\/test","title":"Test Page","nav":true\},\n\s{2}\/\*\{durandal:routes\}\*\//
            );

            done();
        });
    });
});
