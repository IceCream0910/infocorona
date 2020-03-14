
$(function() {
	
    $('#results').empty()
    keyWordsearch();
  
  
  function keyWordsearch(){
    gapi.client.setApiKey('AIzaSyDNWzGaX50QUdybwMKkcVYfMzGTqGZMlUs')
    gapi.client.load('youtube', 'v3', function() {
      makeRequest('코로나19')
    })
  }

  function makeRequest(query) {
    var request = gapi.client.youtube.search.list({
      q: query,
      part: 'snippet',
      maxResults: 5
    });

    request.execute(function(response)  {
      var srchItems = response.result.items;
      for (var i = 0; i < srchItems.length; i++) {
        var videoID = srchItems[i].id.videoId;
        var video = $('<iframe allowfullscreen>');
        video.attr('src', 'https://www.youtube.com/embed/' + videoID)
        video.css({
          border: 'none',
          margin: '20px',
          borderRadius: '15px'
        })
        $('#results').append(video)
      }
    })
  }

});

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


