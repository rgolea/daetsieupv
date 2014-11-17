var admin = angular.module('admin', ['ngRoute', 'ngResource']);

admin.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html'
      })
      .when('/home', {
        templateUrl: 'partials/home.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
              
admin.value('Domain', {
        url: document.domain
});

admin.factory('Home', ['$resource', function($resource){
    return $resource('/homeres/:id', {id:'@id'});
}]);
              
              
admin.controller('homeCtrl', ['$scope', 'Home', function($scope, Home){
    $scope.urls = Home.query();
    $scope.post = new Home();
    
    
    $scope.remove = function(i){
        $scope.urls[i].$remove().then(function(s, e){
            if(s){
                $scope.urls.splice(i, 1);
            }
        });
    };
    
    $scope.add = function(){
        $scope.post.$save().then(function(s){
            $scope.urls.push(s);
            $scope.post = new Home();
        });
    };
    
}]);