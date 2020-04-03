
//초기화
window.onload = function() {
var welcomeTxt = new Array('사회적 거리두기에<br>동참해주세요.', '증상 발생 시,<br>1339로 전화하세요!', '올바른 손씻기는<br>비누로 30초 이상!', '예방 수칙 준수로<br>이겨낼 수 있습니다.', '기침할 땐,<br>옷소매로 가리고 해주세요.', '열심히 일하시는<br>의료진분들께 박수!', '확진자 더 이상<br>안 늘게 해주세요...☹', '예배, 집회, 모임 등은<br>자제해주세요!');
document.getElementById("suggestText").innerHTML = randomItem(welcomeTxt);

$.getJSON("http://www.ipinfo.io/json", function(result) {
      var regionKR = '';
        switch(result.region) {
          case "Gyeonggi-do":
           regionKR = "경기";
           break;

          case "Seoul":
           regionKR = "서울";
           break;

          case "Busan":
           regionKR = "부산";
           break;

          case "Daegu":
           regionKR = "대구";
           break;

          case "Incheon":
           regionKR = "인천";
           break;

          case "Gwangju":
           regionKR = "광주";
           break;
           
          case "Daejeon":
           regionKR = "대전";
           break;  

          case "Ulsan":
           regionKR = "울산";
           break; 

          case "Sejong":
           regionKR = "세종시";
           break; 

          case "Gangwon-do":
           regionKR = "강원";
           break; 

          case "Chungbuk-do":
           regionKR = "충청북도";
           break; 

          case "Chungnam-do":
           regionKR = "충청남도";
           break; 

          case "Jeollabuk-do":
           regionKR = "전라북도";
           break; 

          case "Jeollanam-do":
           regionKR = "전라남도";
           break; 

          case "Gyeongbuk-do":
           regionKR = "경상북도";
           break; 

          case "Gyeongnam-do":
           regionKR = "경상남도";
           break; 


        }

        $(".myRegion").html(regionKR);

    });

}

var audioFile = new Audio('voice.mp3');

// 상단 텍스트 랜덤변경
function randomItem(a) {
  return a[Math.floor(Math.random() * a.length)];
}

var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});


//현황 크롤링

new Vue({
  el: "#scraper",

  data() {
    return {
      scraperRunning: false,
      url: "m.news.naver.com/covid19/index.nhn",
      response: null
    }
  },

  methods: {
    runScraper: function() {
      this.scraperRunning = true

      if(!this.url.includes("http")) {
        this.url = "https://cors-anywhere.herokuapp.com/http://m.news.naver.com/covid19/index.nhn";

      } else {
        this.url = "https://cors-anywhere.herokuapp.com/http://m.news.naver.com/covid19/index.nhn";
      }

      // GET URL
      this.$http.get(this.url).then(
        // success callback
        response => {
          this.scraperRunning = false

          let responseEl = document.createElement("div");
          responseEl.innerHTML = response.body;
          //start traversing the responseEl to scrape data

          var allResponse = response.body;
          var confirmedTargetFirstString = allResponse.indexOf("확진환자</em>");
          var tempConfirmed = allResponse.substr(confirmedTargetFirstString, 78);
          var confirmedValue = tempConfirmed.replace("확진환자</em>", "").replace(/(\s*)/g, "").replace(/\"/gi, "").replace("spanclass=info_count", "").replace("<", "").replace(">", "");
          document.getElementById("confirmed").innerHTML = confirmedValue+"명";

          var cureTargetFirstString = allResponse.indexOf("격리해제</em>");
          var tempCure = allResponse.substr(cureTargetFirstString, 78);
          var cureValue = tempCure.replace("격리해제</em>", "").replace(/(\s*)/g, "").replace(/\"/gi, "").replace("spanclass=info_count", "").replace("<", "").replace(">", "");
          document.getElementById("cure").innerHTML = cureValue+"명";

          var deathTargetFirstString = allResponse.indexOf("사망자</em>");
          var tempDeath = allResponse.substr(deathTargetFirstString, 78);
          var deathValue = tempDeath.replace("사망자</em>", "").replace(/(\s*)/g, "").replace(/\"/gi, "").replace("spanclass=info_count", "").replace("<", "").replace("/a", "").replace(">", "");
          document.getElementById("death").innerHTML = deathValue+"명";

          var dateTargetFirstString = allResponse.indexOf("topStateLayer");
          var tempDate = allResponse.substr(dateTargetFirstString, 78);
          var dateValue = tempDate.replace("topStateLayer", "").replace(/\"/gi, "").replace("spanclass=info_count", "").replace("<", "").replace("/button>", "").replace(">", "");
          document.getElementById("whenUpdate").innerHTML = dateValue+"";

          var confirmedPMTargetFirstString = allResponse.indexOf("info_variation");
          var tempconfirmedPM = allResponse.substr(confirmedPMTargetFirstString, 94);
          var confirmedPmValue = tempconfirmedPM.replace("info_variation", "").replace(/\"/gi, "").replace("<spanclass=", "").replace("<", "").replace("/button>", "").replace(">", "");
          document.getElementById("confirmedPM").innerHTML = "확진자 (+"+confirmedPmValue+")";
        }
      )
    },

    runScraperGlobe: function() {
      this.scraperRunning = true

      if(!this.url.includes("http")) {
        this.url = "https://cors-anywhere.herokuapp.com/http://www.worldometers.info/coronavirus/";

      } else {
        this.url = "https://cors-anywhere.herokuapp.com/http://www.worldometers.info/coronavirus/";
      }

      // GET URL
      this.$http.get(this.url).then(
        // success callback
        response => {
          this.scraperRunning = false

          let responseEl = document.createElement("div");
          responseEl.innerHTML = response.body;
          //start traversing the responseEl to scrape data

          var allGlobeResponse = response.body;
          var globeconfirmedTargetFirstString = allGlobeResponse.indexOf("<h1>Coronavirus Cases:</h1>");
          var tempGlobeConfirmed = allGlobeResponse.substr(globeconfirmedTargetFirstString, 123);
          var globeconfirmedValue = tempGlobeConfirmed.replace("<h1>Coronavirus Cases:</h1>", "").replace(/(\s*)/g, "").replace(/\"/gi, "").replace("divclass=maincounter-number", "").replace("<", "").replace(">", "");
          document.getElementById("globeConfirmed").innerHTML = globeconfirmedValue+"<span>명</span>";

          var allGlobeResponse = response.body;
          var globedeathTargetFirstString = allGlobeResponse.indexOf("<h1>Deaths:</h1>");
          var tempGlobeDeath = allGlobeResponse.substr(globedeathTargetFirstString, 123);
          var globedeathValue = tempGlobeDeath.replace("<<h1>Deaths:</h1>", "").replace(/(\s*)/g, "").replace(/\"/gi, "").replace("h1Deaths:<>", "").replace("h1Deaths:", "").replace(">", "");
          document.getElementById("globeDeath").innerHTML = globedeathValue+"<span>명</span>";
        }
      )
    },

    runScraperTableByCountry: function() {
      this.scraperRunning = true

      if(!this.url.includes("http")) {
        this.url = "https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus/countries-where-coronavirus-has-spread/";

      } else {
        this.url = "https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus/countries-where-coronavirus-has-spread/";
      }

      // GET URL
      this.$http.get(this.url).then(
        // success callback
        response => {
          this.scraperRunning = false

          let responseEl = document.createElement("div");
          responseEl.innerHTML = response.body;

          //start traversing the responseEl to scrape data

          var allTableResponse = response.body;
          var globeTableInitial = allTableResponse.indexOf("table-responsive");
          var tempGlobeTable = allTableResponse.substr(globeTableInitial+19, 6000);
          var globeTableByCountry = tempGlobeTable.replace("Country", "국가").replace("Cases", "확진자").replace("Deaths", "사망자").replace("Region", "대륙")
          .replace("United States", "미국").replace("Italy", "이탈리아").replace("Spain", "스페인").replace("China", "중국").replace("Germany", "독일")
          .replace("France", "프랑스").replace("Iran", "이란").replace("United Kingdom", "영국").replace("Switzerland", "스위스").replace("Turkey", "터키")
          .replace("Belgium", "벨기에").replace("Netherlands", "네덜란드").replace("Austria", "호주").replace("South Korea", "대한민국").replace("Canada", "캐나다")
          .replace("Portugal", "________");
          document.getElementById("tableByCountry").innerHTML = globeTableByCountry.substr(0, 5400);

        }
      )
    },

    runScraperCBS: function() {
      this.scraperRunning = true

      if(!this.url.includes("http")) {
        this.url = "https://cors-anywhere.herokuapp.com/https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&query="+regionKR+"%20사회안전 재난문자";

      } else {

        setTimeout(function() {
        var regionKR = $(".myRegion").html();
        }, 2000);
        this.url = "https://cors-anywhere.herokuapp.com/https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&query=경기%20사회안전 재난문자";
        
      }

      // GET URL
      this.$http.get(this.url).then(
        // success callback
        response => {
          this.scraperRunning = false

          let responseEl = document.createElement("div");
          responseEl.innerHTML = response.body;
          //start traversing the responseEl to scrape data

          var allCBSresponse = response.body;
          var CBSfrom1FirstString = allCBSresponse.indexOf("area_name");
          var tempCBSfrom1 = allCBSresponse.substr(CBSfrom1FirstString, 123);
          var resultCBSfrom1 = tempCBSfrom1.replace("area_name", "").replace(/\"/gi, "").replace("<button", "").replace("<", "").replace("/em>", "").replace(">", "");
          document.getElementById("cbs_from1").innerHTML = resultCBSfrom1;

          var allCBSresponse = response.body;
          var CBSCT1FirstString = allCBSresponse.indexOf("dsc _text");
          var tempCBSCT1 = allCBSresponse.substr(CBSCT1FirstString, 213);
          var resultCBSCT1 = tempCBSCT1.replace("dsc _text", "").replace(/\"/gi, "").replace("펼쳐보기", "").replace("h1Deaths:", "").replace(">", "");
          document.getElementById("cbs_ct1").innerHTML = resultCBSCT1;


          ////

          var SecondCBSresponse = response.body.substr(CBSfrom1FirstString+213, 800);
          var CBSfrom2FirstString = SecondCBSresponse.indexOf("area_name");
          var tempCBSfrom2 = SecondCBSresponse.substr(CBSfrom2FirstString, 123);
          var resultCBSfrom2 = tempCBSfrom2.replace("area_name", "").replace(/\"/gi, "").replace("<button", "").replace("<", "").replace("/em>", "").replace(">", "");
          document.getElementById("cbs_from2").innerHTML = resultCBSfrom2+"<br>";

          var SecondCBSresponse = response.body.substr(CBSfrom1FirstString+500, 1000);
          var CBSCT2FirstString = SecondCBSresponse.indexOf("dsc _text");
          var tempCBSCT2 = SecondCBSresponse.substr(CBSCT2FirstString, 213);
          var resultCBSCT2 = tempCBSCT2.replace("dsc _text", "").replace(/\"/gi, "").replace("펼쳐보기", "").replace("h1Deaths:", "").replace(">", "");
          document.getElementById("cbs_ct2").innerHTML = resultCBSCT2;
        }
      )
    }

    
  },
   beforeMount(){
    this.runScraper()
    this.runScraperGlobe()
    this.runScraperCBS()
    this.runScraperTableByCountry()
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
  $http.get('https://newsapi.org/v2/everything?q=코로나19&apiKey=d60ec4ccad4e46678ce633f1b4dfa2b1&pageSize=15&sortBy=publishedAt')
     .then(callback);
     
   };
})
