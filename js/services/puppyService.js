app.factory('puppyService', function($http){

  var obj = {};
  var _puppies = [];



  obj.getPuppies = function(){
    // getting puppy list
    $http.get('https://pacific-stream-9205.herokuapp.com/puppies.json').then(function(response) {

      console.log('re: ' +response);

      _puppies = response["data"];
    // console.log(_puppies);
      return _puppies;
    });

  };

  return obj;

});


