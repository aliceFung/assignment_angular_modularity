app.controller("PuppyCtrl",["$scope","$http", 'puppyService',
                          function($scope, $http, puppyService){

  $scope.puppies = [];

  $scope.getPuppies = function(){
    $scope.puppies = puppyService.getPuppies();
    console.log('inside get puppies');
    console.log($scope.puppies);
  };

  // getting breeds list
  $http.get('https://pacific-stream-9205.herokuapp.com/breeds.json').then(function(response) {
      $scope.breeds = response["data"];
  });



}]);