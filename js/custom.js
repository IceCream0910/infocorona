window.onload = function() {
    var e = new Array("모두를 위한 거리두기에<br>동참해주세요.", "증상 발생 시,<br>1339로 전화하세요!", "올바른 손씻기는<br>비누로 30초 이상!", "예방 수칙 준수로<br>이겨낼 수 있습니다.", "기침할 땐,<br>옷소매로 가리고 해주세요.", "모든 의료진분들을<br>응원합니다!", "거리는 멀어져도,<br>마음은 가까이!", "외출할 때는<br>마스크 착용 필수!", "한순간의 방심이<br>재확산의 시작이 됩니다.", "나 하나쯤이야 라는 생각이<br>모두의 안전을 위협합니다", "진정한 인싸라면<br>클럽말고 집으로", "밀집된 사람들 속에<br>방심한 너와나 거리", "당연한 것들을 누릴<br>그날이 빨리 오길", "집콕운동,<br>모두를 위한 스포츠", "우리의 일상은 잠시 멈춤<br>서로의 마음은 계속 끈끈", "집회, 모임, 종교행사는<br>잠시 자제해주세요.", "모두 만나요.<br>온라인에서", "다시 만날 그때까지<br>힘내요, 우리!", "꼭 다시 만나자,<br>잃어버린 모든 것들아); 
    document.getElementById("suggestText").innerHTML=randomItem(e);
};


function randomItem(e) {
    return e[Math.floor(Math.random() * e.length)]
}
var ttsurl = "정보 없음.";

function getTTS() {
    var ttsdata1 = document.getElementById("confirmed").innerHTML;
        var ttsdata2 = document.getElementById("confirmedPM").innerHTML.replace("확진자", "").replace("(+", "").replace(")", "").replace(/\s/gi, "");
        var ttsdata3 = document.getElementById("cure").innerHTML;
        var ttsdata4 = document.getElementById("curePM").innerHTML.replace("격리해제자", "").replace("(+", "").replace(")", "").replace(/\s/gi, "");
        var ttsdata5 = document.getElementById("death").innerHTML;
        var ttsdata6 = document.getElementById("deathPM").innerHTML.replace("사망자", "").replace("(+", "").replace(")", "").replace(/\s/gi, "");
        var ttsdata7 = document.getElementById("localConfirmed").innerHTML.replace("해외유입", "해외유입 사례는").replace('<br>', "이고, ").replace("국내발생", "국내발생 환자는")+"입니다.";

ttsurl = '국내 코로나일구 누적 확진자는 전일 0시 대비' + ttsdata2.toString() + '명 증가해 총 ' + ttsdata1.toString() + '이고, 격리해제자는 '+ ttsdata4.toString() + '명 증가해 총 '+ ttsdata3.toString() + '입니다. 사망자는 '+ttsdata6.toString() + '명 추가되어 총 '+ttsdata5.toString()+' 입니다. 신규 환자 중 '+ttsdata7;
document.getElementById("track").src="https://google-translate-proxy.herokuapp.com/api/tts?query="+ttsurl+"&language=ko&speed=1";
document.getElementById("play-pause").style.color = "#556ee6";
document.getElementById("play-pause").style.border = "solid 1.5px #556ee6";
}

var track = document.getElementById("track");
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
        url: "",
        response: null
    }),
    methods: {
        runScraperGlobe: function() {
            this.scraperRunning = !0, this.url.includes("http"), this.url = "https://cors-anywhere.herokuapp.com/http://www.worldometers.info/coronavirus/", this.$http.get(this.url).then(e => {
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
            this.scraperRunning = !0, this.url.includes("http"), this.url = "https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus/countries-where-coronavirus-has-spread/", this.$http.get(this.url).then(e => {
                this.scraperRunning = !1, document.createElement("div").innerHTML = e.body;
                var r = e.body,
                    a = r.indexOf("table-responsive"),
                    n = r.substr(a + 19, 6e3).replace("Country", "국가").replace("Cases", "확진자").replace("Deaths", "사망자").replace("Region", "대륙").replace("United States", "미국").replace("Italy", "이탈리아").replace("Spain", "스페인").replace("China", "중국").replace("Germany", "독일").replace("France", "프랑스").replace("Iran", "이란").replace("United Kingdom", "영국").replace("Switzerland", "스위스").replace("Turkey", "터키").replace("Belgium", "벨기에").replace("Netherlands", "네덜란드").replace("Austria", "호주").replace("South Korea", "대한민국").replace("Canada", "캐나다").replace("Portugal", "포르투갈").replace("Brazil", "브라질").replace("Russia", "러시아").replace("India", "인도").replace("Peru", "페루").replace("Saudi Arabia", "사우디아라비아").replace("Chile", "칠레").replace("South Africa", "남아프리카공화국").replace("Mexico", "멕시코").replace("Pakistan", "파키스탄").replace("Colombia", "콜롬비아");
                document.getElementById("tableByCountry").innerHTML = n.substr(0, 5400)
            })
        },

        paths: function() {
            this.scraperRunning = !0, this.url.includes("http"), this.url = "https://cors-anywhere.herokuapp.com/http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=12", this.$http.get(this.url).then(e => {
                this.scraperRunning = !1, document.createElement("div").innerHTML = e.body;
                var pathsData = e.body,
                    pathsData1 = pathsData.indexOf('확진환자의 이동경로 등 정보 공개 안내(3판)'), //c
                    pathsData2 = pathsData.indexOf('추가 정보는 공식 브리핑 및 지자체별'), //f
                    pathsString = pathsData.substr(pathsData1 + 0, pathsData2-pathsData1).replace("확진환자의 이동경로 등 정보 공개 안내(3판)('20.6.30.)", "").replace("에 따라  확진자가 마지막 접촉자와 접촉한 날로부터 14일 경과 시, 이동경로에 대한 부분은 공개되지 않음을 알려드립니다.", "")
                    .replace('"', '').replace("※ 집단발생 관련 반복대량 노출장소 현황", "").replace('<br class="p_dp_n t_dp_n" />', '');
                document.getElementById("patientsPaths").innerHTML = pathsString;

                console.clear();

            })
        },



        detailData: function() {
            this.scraperRunning = !0, this.url.includes("http"), this.url = "https://cors-anywhere.herokuapp.com/http://ncov.mohw.go.kr/bdBoardList_Real.do", this.$http.get(this.url).then(e => {
                this.scraperRunning = !1;

                var UpdateData = (n = e.body).indexOf('<h5 class="s_title_in3">누적 확진자 현황 <span class="t_date">');
                var updateDisplayed = n.substr(UpdateData, 90).replace(/(\s*)/g, "").replace(/\"/gi, "").replace('<h5class=s_title_in3>누적확진자현황<spanclass=t_date>', '').replace("</span></h5>", "").replace("<", "").replace("(", "").replace("기준)", "");
                document.getElementById('whenUpdate').innerHTML = updateDisplayed.replace('d', '')+" 기준";
                


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


                var deathData = (n = e.body).indexOf('<strong class="ca_top">사망</strong>');
                var deathDisplayed = n.substr(deathData, 212).replace(/(\s*)/g, "").replace(/\"/gi, "").replace('<strongclass=ca_top>사망</strong><ulclass=ca_body><li><dl><dtclass=ca_subtit>누적</dt><ddclass=ca_value>', '').replace("</dd></dl>", "")+"명";
                document.getElementById('death').innerHTML = deathDisplayed;

                var deathchangeData = n.substr(deathData).indexOf('<dt class="ca_subtit">전일대비</dt>');
                var deathchangeDisplayed = "사망자 ("+(n.substr(deathData)).substr(deathchangeData, 150).replace(/(\s*)/g, "").replace(/\"/gi, "").replace('<dtclass=ca_subtit>전일대비</dt><ddclass=ca_value><spanclass=txt_ntc>', '').replace("</span></dd></dl>", "")+")";
                document.getElementById('deathPM').innerHTML = deathchangeDisplayed;
                


                var r = (n = e.body).indexOf('<strong class="inner_tit">해외유입');
                var a = n.substr(r, 123).replace(/(\s*)/g, "").replace(/\"/gi, "").replace("<strongclass=inner_tit>해외유입</strong><pclass=", "").replace("inner_value>", "").replace("</p></li><li>", "");
                
                var m = (n = e.body).indexOf('<strong class="inner_tit">국내발생');
                var b  = n.substr(m, 124).replace(/(\s*)/g, "").replace(/\"/gi, "").replace("<strongclass=inner_tit>국내발생</strong><pclass=", "").replace("inner_value>", "").replace("</p></li></ul>", "");
         
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
        this.runScraperGlobe(), this.runScraperTableByCountry(), this.detailData(), this.paths()
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
            $http.get('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=코로나19&apiKey=d60ec4ccad4e46678ce633f1b4dfa2b1&pageSize=15&sortBy=publishedAt')
                .then(callback);

        };
    })

