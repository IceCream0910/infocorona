
angular.module("myApp", ['ngRoute'])


.controller('mainCtrl', function($scope, getCoronaNewsArticles){
  
  getCoronaNewsArticles.getNewsArticles(function(response){
    $scope.articles = response.data.articles;   
  });  
})

.service('getCoronaNewsArticles', function($http){
   this.getNewsArticles = function(callback){
  $http.get('https://newsapi.org/v2/everything?q=코로나19&apiKey=d60ec4ccad4e46678ce633f1b4dfa2b1&pageSize=50&sortBy=publishedAt')
     .then(callback);
     
   };
})
