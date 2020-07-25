window.onload = function() {
    var e = new Array("모두를 위한 거리두기에<br>동참해주세요.", "증상 발생 시,<br>1339로 전화하세요!", "올바른 손씻기는<br>비누로 30초 이상!", "예방 수칙 준수로<br>이겨낼 수 있습니다.", "기침할 땐,<br>옷소매로 가리고 해주세요.", "모든 의료진분들을<br>응원합니다!", "거리는 멀어져도,<br>마음은 가까이!", "외출할 때는<br>마스크 착용 필수!");
    document.getElementById("suggestText").innerHTML = randomItem(e), $.getJSON("https://www.ipinfo.io/json", function(e) {
        var r = "전국";
        switch (e.region) {
            case "Gyeonggi-do":
                r = "경기";
                break;
            case "Seoul":
                r = "서울";
                break;
            case "Busan":
                r = "부산";
                break;
            case "Daegu":
                r = "대구";
                break;
            case "Incheon":
                r = "인천";
                break;
            case "Gwangju":
                r = "광주";
                break;
            case "Daejeon":
                r = "대전";
                break;
            case "Ulsan":
                r = "울산";
                break;
            case "Sejong":
                r = "세종시";
                break;
            case "Gangwon-do":
                r = "강원";
                break;
            case "Chungbuk-do":
                r = "충청북도";
                break;
            case "Chungnam-do":
                r = "충청남도";
                break;
            case "Jeollabuk-do":
                r = "전라북도";
                break;
            case "Jeollanam-do":
                r = "전라남도";
                break;
            case "Gyeongbuk-do":
                r = "경상북도";
                break;
            case "Gyeongnam-do":
                r = "경상남도"
        }
        $(".myRegion").html(r)
    })
};
var audioFile = new Audio("voice.mp3");

function randomItem(e) {
    return e[Math.floor(Math.random() * e.length)]
}
var track = document.getElementById("track"),
    controlBtn = document.getElementById("play-pause");

function playPause() {
    track.paused ? (track.play(), controlBtn.className = "pause") : (track.pause(), controlBtn.className = "play")
}
controlBtn.addEventListener("click", playPause), track.addEventListener("ended", function() {
    controlBtn.className = "play"
}), new Vue({
    el: "#scraper",
    data: () => ({
        scraperRunning: !1,
        url: "m.news.naver.com/covid19/index.nhn",
        response: null
    }),
    methods: {
        runScraperGlobe: function() {
            this.scraperRunning = !0, this.url.includes("http"), this.url = "https://cors-coronacoc.herokuapp.com/http://www.worldometers.info/coronavirus/", this.$http.get(this.url).then(e => {
                this.scraperRunning = !1, document.createElement("div").innerHTML = e.body;
                var r = (n = e.body).indexOf("<h1>Coronavirus Cases:</h1>"),
                    a = n.substr(r, 123).replace("<h1>Coronavirus Cases:</h1>", "").replace(/(\s*)/g, "").replace(/\"/gi, "").replace("divclass=maincounter-number", "").replace("<", "").replace(">", "");
                document.getElementById("globeConfirmed").innerHTML = a + "<span>명</span>";
                var n, t = (n = e.body).indexOf("<h1>Deaths:</h1>"),
                    c = n.substr(t, 123).replace("<<h1>Deaths:</h1>", "").replace(/(\s*)/g, "").replace(/\"/gi, "").replace("h1Deaths:<>", "").replace("h1Deaths:", "").replace(">", "");
                document.getElementById("globeDeath").innerHTML = c + "<span>명</span>"
            })
        },
        runScraperTableByCountry: function() {
            this.scraperRunning = !0, this.url.includes("http"), this.url = "https://cors-coronacoc.herokuapp.com/https://www.worldometers.info/coronavirus/countries-where-coronavirus-has-spread/", this.$http.get(this.url).then(e => {
                this.scraperRunning = !1, document.createElement("div").innerHTML = e.body;
                var r = e.body,
                    a = r.indexOf("table-responsive"),
                    n = r.substr(a + 19, 6e3).replace("Country", "국가").replace("Cases", "확진자").replace("Deaths", "사망자").replace("Region", "대륙").replace("United States", "미국").replace("Italy", "이탈리아").replace("Spain", "스페인").replace("China", "중국").replace("Germany", "독일").replace("France", "프랑스").replace("Iran", "이란").replace("United Kingdom", "영국").replace("Switzerland", "스위스").replace("Turkey", "터키").replace("Belgium", "벨기에").replace("Netherlands", "네덜란드").replace("Austria", "호주").replace("South Korea", "대한민국").replace("Canada", "캐나다").replace("Portugal", "포르투갈").replace("Brazil", "브라질").replace("Russia", "러시아").replace("India", "인도").replace("Peru", "페루").replace("Saudi Arabia", "사우디아라비아").replace("Chile", "칠레").replace("South Africa", "남아프리카공화국").replace("Mexico", "멕시코").replace("Pakistan", "파키스탄").replace("Colombia", "콜롬비아");
                document.getElementById("tableByCountry").innerHTML = n.substr(0, 5400)
            })
        },



        detailData: function() {
            this.scraperRunning = !0, this.url.includes("http"), this.url = "https://cors-coronacoc.herokuapp.com/http://ncov.mohw.go.kr/bdBoardList_Real.do", this.$http.get(this.url).then(e => {
                this.scraperRunning = !1,
                console.log(e.body);

                var UpdateData = (n = e.body).indexOf('<h5 class="s_title_in3">누적 확진자 현황 <span class="t_date">');
                var updateDisplayed = n.substr(UpdateData, 90).replace(/(\s*)/g, "").replace(/\"/gi, "").replace('<h5class=s_title_in3>누적확진자현황<spanclass=t_date>', '').replace("</span></h5>", "").replace("<", "").replace("(", "").replace("기준)", "");
                document.getElementById('whenUpdate').innerHTML = updateDisplayed+" 기준";
                


                var confirmedData = (n = e.body).indexOf('<strong class="ca_top">확진환자</strong>');
                var confimredDisplayed = n.substr(confirmedData, 212).replace(/(\s*)/g, "").replace(/\"/gi, "").replace('<strongclass=ca_top>확진환자</strong><ulclass=ca_body><li><dl><dtclass=ca_subtit>누적</dt><ddclass=ca_value>', '').replace("</dd></dl>", "")+"명";
                document.getElementById('confirmed').innerHTML = confimredDisplayed;

                var confirmedchangeData = n.substr(confirmedData).indexOf('<dt class="ca_subtit">전일대비</dt>');
                var confimredchangeDisplayed = "확진자 ("+(n.substr(confirmedData)).substr(confirmedchangeData, 212).replace(/(\s*)/g, "").replace(/\"/gi, "").replace('<dtclass=ca_subtit>전일대비</dt><ddclass=ca_value><ul><li><strongclass=inner_titsum>소계</strong><pclass=inner_value>', '').replace("</p>", "")+")";
                document.getElementById('confirmedPM').innerHTML = confimredchangeDisplayed;


                var cureData = (n = e.body).indexOf('<strong class="ca_top">격리해제</strong>');
                var cureDisplayed = n.substr(cureData, 212).replace(/(\s*)/g, "").replace(/\"/gi, "").replace('<strongclass=ca_top>격리해제</strong><ulclass=ca_body><li><dl><dtclass=ca_subtit>누적</dt><ddclass=ca_value>', '').replace("</dd></dl>", "")+"명";
                document.getElementById('cure').innerHTML = cureDisplayed;


                var curechangeData = n.substr(cureData).indexOf('<dt class="ca_subtit">전일대비</dt>');
                var curechangeDisplayed = "격리해제자 ("+(n.substr(cureData)).substr(curechangeData, 150).replace(/(\s*)/g, "").replace(/\"/gi, "").replace('<dtclass=ca_subtit>전일대비</dt><ddclass=ca_value><spanclass=txt_ntc>', '').replace("</span></dd></dl>", "")+")";
                document.getElementById('curePM').innerHTML = curechangeDisplayed;
                console.clear();
                console.log(curechangeDisplayed);


                var deathData = (n = e.body).indexOf('<strong class="ca_top">사망</strong>');
                var deathDisplayed = n.substr(deathData, 212).replace(/(\s*)/g, "").replace(/\"/gi, "").replace('<strongclass=ca_top>사망</strong><ulclass=ca_body><li><dl><dtclass=ca_subtit>누적</dt><ddclass=ca_value>', '').replace("</dd></dl>", "")+"명";
                document.getElementById('death').innerHTML = deathDisplayed;

                var deathchangeData = n.substr(deathData).indexOf('<dt class="ca_subtit">전일대비</dt>');
                var deathchangeDisplayed = "사망자 ("+(n.substr(deathData)).substr(deathchangeData, 150).replace(/(\s*)/g, "").replace(/\"/gi, "").replace('<dtclass=ca_subtit>전일대비</dt><ddclass=ca_value><spanclass=txt_ntc>', '').replace("</span></dd></dl>", "")+")";
                document.getElementById('deathPM').innerHTML = deathchangeDisplayed;
                


                var r = (n = e.body).indexOf('<strong class="inner_tit">해외유입');
                var a = n.substr(r, 123).replace(/(\s*)/g, "").replace(/\"/gi, "").replace("<strongclass=inner_tit>해외유입</strong><pclass=", "").replace("inner_value>", "").replace("</p></li><li>", "");
                
                var m = (n = e.body).indexOf('<strong class="inner_tit">국내발생');
                var b  = n.substr(m, 123).replace(/(\s*)/g, "").replace(/\"/gi, "").replace("<strongclass=inner_tit>국내발생</strong><pclass=", "").replace("inner_value>", "").replace("</p></li></ul>", "");
         
               document.getElementById("localConfirmed").innerHTML = "해외유입 "+ a + "명<br>국내발생 "+b+"명";

               var o = e.body,
                    c = o.indexOf('<h5 class="s_title_in3">해외유입 환자현황'),
                    f = o.indexOf('<h5 class="s_title_in3">누적 검사현황'),
                    d = o.substr(c + 0, f-c).replace("해외유입 환자현황표 - 구분, 합계, 유입국가(중국, 중국외 아시아, 유럽, 미주, 아프리카), 확인단계(검역 단계, 지역사회), 국적(내국인, 외국인)으로 구성", "").replace('<h5 class="s_title_in3">해외유입 환자현황', '');
                document.getElementById("localTable").innerHTML = d;
               
                
                
            })
        },
    },
    beforeMount() {
        this.runScraperGlobe(), this.runScraperTableByCountry(), this.detailData()
    }
});




angular.module("myApp", ['ngRoute'])

    .controller('mainCtrl', function($scope, getCoronaNewsArticles) {

        getCoronaNewsArticles.getNewsArticles(function(response) {
            $scope.articles = response.data.articles;
        });
    })


    .service('getCoronaNewsArticles', function($http) {
        this.getNewsArticles = function(callback) {
            $http.get('http://cors-coronacoc.herokuapp.com/http://newsapi.org/v2/everything?q=코로나19&apiKey=d60ec4ccad4e46678ce633f1b4dfa2b1&pageSize=15&sortBy=publishedAt')
                .then(callback);

        };
    })

