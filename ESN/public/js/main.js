var app = angular.module("fse-recitation", ["ui.router", "ngNotify" /* declare use of module here */]);

app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('helloworld', {
		url: '/helloworld',
		templateUrl: '../templates/helloworld.html',
		controller: "helloWorldController"
	})
	.state('directives', {
		url: '/directives',
		templateUrl: '../templates/directives.html',
		controller: "directivesController"
	})
	.state('objectsAndExpressions', {
		url: '/objectsAndExpressions',
		templateUrl: '../templates/objectsAndExpressions.html',
		controller: "objectsAndExpressionsController"
	})
	.state('dependencyInjection', {
		url: '/dependencyInjection',
		templateUrl: '../templates/dependencyInjection.html',
		controller: "dependencyInjectionController"
	})
	.state('scope', {
		url: '/scope',
		templateUrl: '../templates/scope.html',
		controller: "scopeController"
	});

	$urlRouterProvider.otherwise("helloworld");
});