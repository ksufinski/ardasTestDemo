var ardasIndexController = angular.module('ardasIndexController', []);

ardasIndexController.controller('indexCtrl', ['Task',
function(Task){
	var vm = this;
	vm.tasks = Task.query();
}]);
