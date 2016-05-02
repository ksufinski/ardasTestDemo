var ardasIndexController = angular.module('ardasIndexController', []);

ardasIndexController.controller('indexCtrl', ['$http', 'taskService',
function($http, taskService){
	var vm = this;

	taskService.getTasks().then(function(data){
		vm.tasks = data.data;
	});
}]);
