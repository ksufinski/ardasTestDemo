(function () {
  angular
  .module('ardasApp')
  .directive('taskTable', taskTable);

  function taskTable() {
    return {
      restrict: 'EA',
      templateUrl: 'common/directives/taskTable/taskTable.template.html',
    };
  }
})();
