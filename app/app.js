
var app = angular.module('ardasApp', ['ngRoute',
	'ardasService',
	'ardasIndexController',
	'ardasTaskController',
	'backendMock',]);

app.config(['$routeProvider',
	function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view/index/index.view.html',
    controller: 'indexCtrl',
    controllerAs: 'index',
  })
		.when('/task/:id', {
  templateUrl: 'view/task/task.view.html',
  controller: 'taskCtrl',
  controllerAs: 'task',
		})
		.otherwise({ redirectTo: '/' });

	}]);

