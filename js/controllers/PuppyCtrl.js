app.controller("PuppyCtrl",["$scope","$http", function($scope, $http){

  $http.get('https://pacific-stream-9205.herokuapp.com/puppies.json').then(function(response) {
      $scope.puppies = response["data"];
  }, function(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

}]);