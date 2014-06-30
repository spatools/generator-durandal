requirejs.config({
    paths: {
        'text': '../bower_components/requirejs-text/text',
        'durandal': '../bower_components/durandal/js',
        'plugins': '../bower_components/durandal/js/plugins',
        'transitions': '../bower_components/durandal/js/transitions',
        'knockout': '../bower_components/knockout.js/knockout.debug',
        'jquery': '../bower_components/jquery/jquery',
        <% if (features.bootstrap) { %>'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',<% } %>
        <% if (features.modernizr) { %>'modernizr': '../bower_components/modernizr/modernizr',<% } %>
    },
    <% if (features.bootstrap || features.modernizr) { %>shim: {
    <% if (features.bootstrap) { %>bootstrap: {
            deps: ['jquery'],
            exports: 'jQuery'
        },<% } %>
    <% if (features.modernizr) { %>modernizr: {
            exports: 'Modernizr'
        }<% } %>
    }<% } %>
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'<% if (features.bootstrap) { %>, 'bootstrap'<% } %>],  function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = "<%= appname %>";

    app.configurePlugins({
        router:true,
        dialog: true,
        widget: true
    });

    app.start().then(function() {
        // Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        // Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        // Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell');
    });
});
