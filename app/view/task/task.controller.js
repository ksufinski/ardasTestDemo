var ardasTaskController = angular.module('ardasTaskController', []);
ardasTaskController.controller('taskCtrl', ['$routeParams', 'Task',
	function ($routeParams, Task) {
  var vm = this;// jscs:ignore safeContextKeyword
  Task.get({id:$routeParams.id})
		.$promise.then(function(task){
		vm.task = [task.taskParams[0].id, task.taskParams[0].name, task.taskParams[0].description];
	});
	},]);
