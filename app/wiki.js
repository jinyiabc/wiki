angular.module('myWikiviewer',[])

// myWikiviewer.config(['$sceDelegateProvider', function($sceDelegateProvider) {
//   // We must whitelist the JSONP endpoint that we are using to show that we trust it
//   $sceDelegateProvider.resourceUrlWhitelist([
//     'self',
//     'https://en.wikipedia.org/w/api.php**'
//   ]);
// }])

.controller('WikiController',['$scope','$http',function($scope,$http){

  $scope.submit = function(){
  var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+$scope.text+'&limit=10&namespace=0&format=json' ;//'data/sample.json';



  var config = {
      headers: {
          'Content-Type':'text/plain'
      }
  };

  $http.get(url,config).then(successCallback, errorCallback);   // replace 'data/sample.json' with url

  function successCallback(response){
        $scope.samples = response
        //$scope.search_key = response[1];
        //$scope.search_title = response[2];
      }
  function errorCallback(error){
      //error code
  }


 };



}]);
