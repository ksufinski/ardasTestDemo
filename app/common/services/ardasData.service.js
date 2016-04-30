
  var ardasService = angular.module('ardasService', ['ngResource']);
  ardasService.factory('Task', ['$resource',
    function ($resource) {
      return $resource('/tasks/:id', {id: '@id'}, {
    });
  }]);
