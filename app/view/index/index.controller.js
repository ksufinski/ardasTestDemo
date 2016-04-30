var ardasIndexController = angular.module('ardasIndexController', []);

ardasIndexController.controller('indexCtrl', ['$http',
function($http){
	var vm = this;
	$http.get('/tasks').then(function(data){
		vm.tasks = data.data;
	})
}]);
