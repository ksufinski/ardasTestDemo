var ardasTaskController = angular.module('ardasTaskController', []);
ardasTaskController.controller('taskCtrl', ['$http', '$routeParams', 'Task',
	function ($http, $routeParams, Task) {
		var vm = this;// jscs:ignore safeContextKeyword
		var task = Task.get({id: $routeParams.id})
		.$promise.then(function (task) {
			vm.taskName = task.taskParams[0].name;
			vm.objStatus = task.taskParams[0].obj_status;
			vm.taskDescription = task.taskParams[0].description;
		});


		vm.updateTask = function (taskParam, newValue){
			$http.put('tasks/'+$routeParams.id+'/'+taskParam, {taskParam: newValue});

		};

	},]);
