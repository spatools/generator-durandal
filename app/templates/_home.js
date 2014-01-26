define(["knockout", "durandal/app", "durandal/system"], function (ko, app, system) {
    var
        // Public Properties
        todos = ko.observableArray(),
        selectedTodo = ko.observable(),
        isLoading = ko.observable(false),

        // Private Properties
        messageTitle = "Application Message",
        message = "Hello from your application",

        // Event Handlers
        onTodoClick = function onTodoClick(note) {
            app.showMessage(note.content, note.title);
        },

        onButtonClick = function onButtonClick() {
            app.showMessage(message, messageTitle);
        },

        // Lifecycle Methods
        activate = function activate() {
            isLoading(true);

            return loadTodos().then(function (loadedTodos) {
                todos(loadedTodos);
                isLoading(false);
            });
        },

        deactivate = function deactivate() {
            selectedTodo(null);
        },

        // Private Methods
        loadTodos = function () {
            return system.defer(function (dfd) {
                setTimeout(function () {
                    dfd.resolve([
                        {
                            title: "Create your first ViewModel",
                            content: "To create a ViewModel using yeoman you could call <strong>$ yo durandal:viewmodel.</strong>"
                        },
                        {
                            title: "Test your first ViewModel",
                            content: "To create Spec for your ViewModel using yeoman you could call <strong>$ yo durandal:viewmodeltest.</strong>"
                        },
                        {
                            title: "Create View for your ViewModel",
                            content: "To create a View using yeoman you could call <strong>$ yo durandal:view.</strong>"
                        }
                    ]);
                }, 1500);
            });
        };

    return {
        todos: todos,
        selectedTodo: selectedTodo,
        isLoading: isLoading,

        onTodoClick: onTodoClick,
        onButtonClick: onButtonClick,

        activate: activate,
        deactivate: deactivate
    };
});
