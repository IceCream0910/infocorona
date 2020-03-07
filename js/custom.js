
//초기화
window.onload = function() {
var welcomeTxt = new Array('외출할 땐,<br>마스크를 착용하세요!', '올바른 손씻기는<br>비누로 30초 이상!', '예방 수칙 준수로<br>이겨낼 수 있습니다.', '기침할 땐,<br>옷소매로 가리고 해주세요.', '열심히 일하시는<br>의료진분들께 박수!', '확진자 더 이상<br>안 늘게 해주세요...☹');
document.getElementById("suggestText").innerHTML = randomItem(welcomeTxt);

}

// 상단 텍스트 랜덤변경
function randomItem(a) {
  return a[Math.floor(Math.random() * a.length)];
}


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
    }
  },
   beforeMount(){
    this.runScraper()
    this.runScraperGlobe()
 }
});

