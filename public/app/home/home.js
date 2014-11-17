'use strict';

app.factory('Home', ['$resource', function($resource){
    return $resource('/homeres/:id', {id:'@id'});
}]);

app.controller('homeCtrl', ['$scope', 'Home', function($scope, Home){
    $scope.imgs = Home.query();    
}]);