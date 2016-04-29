(function () {
  angular.module('ardasApp', ['ngRoute']);

  function config($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'view/index/index.view.html',
      controller: 'indexCtrl',
      controllerAs: 'iC',
    })
		.when('/task', {
  templateUrl: 'view/task/task.view.html',
  controller: 'taskCtrl',
  controllerAs: 'tC',
		})
		.otherwise({ redirectTo: '/' });

  }

  angular.module('ardasApp').config(['$routeProvider', config]);
})();
