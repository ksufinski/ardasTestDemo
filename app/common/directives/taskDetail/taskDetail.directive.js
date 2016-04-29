(function (){
	angular
	.module('ardasApp')
	.directive('taskDetail', taskDetail);

	function taskDetail () {
		return {
			restrict: 'EA',
			templateUrl: 'common/directives/taskTable/taskDetail.template.html'
		}
	}
})();