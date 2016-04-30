var ardasService = angular.module('ardasService', ['ngResource']);
ardasService.factory('Task', ['$resource',
	function ($resource) {
		return $resource('/tasks/:id', {id: '@id'}, {});
	}]);

var taskService = angular.module('taskService', ['ngRoute']);
taskService.service('taskService',  function($http){

	var getTasks = function(){
		return $http.get('/tasks');
	};

	var updateTask = function( taskParam, newValue, id) {
		return $http.put('tasks/'+id+'/'+taskParam, {taskParam: newValue});
	};

	return {
		getTasks: getTasks,
		updateTask: updateTask
	}

});