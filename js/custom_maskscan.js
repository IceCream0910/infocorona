
var app = new Vue({
  
  el : '#app',
  
  data : function(){
    return {
      sources : [
        {

          name: 'api',
          url : 'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=37.4492747&lng=127.1389214&m=1000',
          //url : 'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat='+'127.34'+'&lng='+'37.00'+'127.1389214&m=1000',
          posts : []
        }
      ]
    }
  },

  methods: {
    
    // Load all posts from separate APIs
    loadPosts : function(){
      
      var self = this;
      
      self.sources.forEach(function(source, index){
        
        self.$delete(source, 'count');

        // Get API with vue-resource     
        self.$http.get(source.url).then(function(response)  {
          self.$set(source, 'posts', response.body.stores);
         

        }, function(response) {

          console.log('Error');

        });
        
      });
      
    },

    myFunction: function () {   
   if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(this.showPosition);
   }else{
   alert('위치를 찾을 수 없습니다.');
     
   }
    },
  showPosition:function (position) {  
    return 'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat='+position.coords.latitude+'&lng='+position.coords.longitude+'127.1389214&m=1000';
  }
  },
  
  mounted : function(){
    
    this.$nextTick(function(){

      // Load posts on initial page load
      this.loadPosts();

    });
    
  },


  
});
