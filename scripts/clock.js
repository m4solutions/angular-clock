// MODULE
var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);
"use strict";


// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$filter', '$resource', '$http',
                                         function ($scope, $log, $filter, $resource, $http) {
                                           
    var dateTimeEndpoint =  'http://time.jsontest.com/';                                

    $http.get(dateTimeEndpoint)
                .success(function (result){
                      $scope.dateTime = result;
      					 $log.info('Response from: '+ dateTimeEndpoint);
      					 $log.info(result);
                }).error(function (result, status){
                      $log.error(result);
      					 $scope.dateTime
                });
                                           
                                           
    $log.log('started...');

}]);




