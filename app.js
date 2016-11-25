(function(){
"use strict"
  var app = angular.module('blogApp', []);
  app.controller('mainCtrl', function($scope, $http){
   var vm = this;
   vm.title = "Blog APP in AngularJS uisng expressJS webApi"

  });

}());
