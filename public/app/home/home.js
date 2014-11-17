'use strict';

admin.factory('Home', ['$resource', 'Domain', function($resource, Domain){
    return $resource('/homeres/:id', {id:'@id'});
}]);

admin.controller('homeCtrl', ['$scope', 'Home', function($scope, Home){
    $scope.imgs = Home.query();    
}]);