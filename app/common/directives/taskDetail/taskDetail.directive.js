(function () {
  angular
  .module('ardasApp')
  .directive('taskDetail', taskDetail);

  function taskDetail() {
    return {
      restrict: 'EA',
      templateUrl: 'common/directives/taskDetail/taskDetail.template.html',
    };
  }
})();
