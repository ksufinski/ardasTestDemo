var ardasTaskController = angular.module('ardasTaskController', []);
ardasTaskController.controller('taskCtrl', ['$http', '$routeParams', 'Task', 'taskService',
	function ($http, $routeParams, Task, taskService) {
		var taskParam, newValue, vm = this;// jscs:ignore safeContextKeyword

		Task.get({id: $routeParams.id})
		.$promise.then(function (task) {
			vm.taskName = task.taskParams[0].name;
			vm.objStatus = task.taskParams[0].obj_status;
			vm.taskDescription = task.taskParams[0].description;
		});

		vm.updateTask = function( taskParam, newValue){
			taskService.updateTask(taskParam, newValue, $routeParams.id);

		};

	},]);
