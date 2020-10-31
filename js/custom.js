function randomItem(e) {
    return e[Math.floor(Math.random() * e.length)]
}

function welcome() {
    // var special = new Array("마스크 미착용,<br>가장 무서운 변장입니다", "이번 핼러윈은 집에서<br>즐겨주세요.", "단체 모임은<br>자제해주세요.", "유흥시설 방문은<br>자제해주세요.", "hell러윈이 되지 않도록,<br>방역수칙 준수는 필수!");
    var e = new Array("모두를 위한 거리두기에<br>동참해주세요.", "증상 발생 시,<br>1339로 전화하세요!", "올바른 손씻기는<br>비누로 30초 이상!", "예방 수칙 준수로<br>이겨낼 수 있습니다.", "기침할 땐,<br>옷소매로 가리고 해주세요.", "모든 의료진분들을<br>응원합니다!", "거리는 멀어져도,<br>마음은 가까이!", "외출할 때는<br>마스크 착용 필수!", "한순간의 방심이<br>재확산의 시작이 됩니다.", "나 하나쯤이야 라는 생각이<br>모두의 안전을 위협합니다", "진정한 인싸라면<br>클럽말고 집으로", "밀집된 사람들 속에<br>방심한 너와나 거리", "당연한 것들을 누릴<br>그날이 빨리 오길", "집콕운동,<br>모두를 위한 스포츠", "우리의 일상은 잠시 멈춤<br>서로의 마음은 계속 끈끈", "집회, 모임, 종교행사는<br>잠시 자제해주세요.", "모두 만나요.<br>온라인에서", "다시 만날 그때까지<br>힘내요, 우리!", "꼭 다시 만나자,<br>잃어버린 모든 것들아", "힘을 내요, 대한민국.<br>마음을 모아 이겨냅시다.", "비정상이 일상이 된 지금<br>함께 극복할 수 있어요!");
    document.getElementById("suggestText").innerHTML = randomItem(e)
}
window.onload = function() {
    welcome()
};
var ttsurl = "정보 없음.";

function getTTS() {
    var e = document.getElementById("confirmed").innerHTML,
        r = document.getElementById("confirmedPM").innerHTML.substring(0, 12).replace("확진자", "").replace("<br", "").replace("치료중", "").replace(":", "").replace("(+", "").replace(")", "").replace(/\s/gi, ""),
        t = document.getElementById("cure").innerHTML,
        n = document.getElementById("curePM").innerHTML.replace("격리해제자", "").replace("(+", "").replace(")", "").replace(/\s/gi, ""),
        a = document.getElementById("death").innerHTML,
        o = document.getElementById("deathPM").innerHTML.replace("사망자", "").replace("(+", "").replace(")", "").replace(/\s/gi, ""),
        c = document.getElementById("localConfirmed").innerHTML.replace("해외유입", "해외유입 사례는").replace("<br>", "이고, ").replace("국내발생", "국내발생 환자는") + "입니다.";
    "로딩중" == e ? (CreateVoice(ttsurl = "아직 현황을 로딩중입니다"), document.getElementById("play-pause").style.color = "#556ee6", document.getElementById("play-pause").style.border = "solid 1.5px #556ee6", document.getElementById("ttsBtn").className = "fa fa-circle-o-notch") : (CreateVoice(ttsurl = "국내 코로나일구 누적 확진자는 전일 0시 대비 " + r.toString() + "명 증가해 총 " + e.toString() + "이고, 격리해제자는 " + n.toString() + "명 증가해 총 " + t.toString() + "입니다. 사망자는 " + o.toString() + "명 추가되어 총 " + a.toString() + " 입니다. 신규 환자 중 " + c + " "), document.getElementById("play-pause").style.color = "#556ee6", document.getElementById("play-pause").style.border = "solid 1.5px #556ee6", document.getElementById("ttsBtn").className = "fa fa-circle-o-notch")
}

function CreateVoice(e) {
    const r = new XMLHttpRequest,
        t = {
            text: e,
            actor: "Yu-jeong"
        };
    r.open("POST", "https://api.prosody-tts.com/api/ttsapi/voice-generation/", !0), r.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), r.responseType = "json", r.addEventListener("load", function() {
        GenerateVoice(r.response.data.signature)
    }), r.send(JSON.stringify(t))
}

function GenerateVoice(e) {
    const r = new XMLHttpRequest,
        t = new Audio;
    let n = null;
    r.open("GET", "https://api.prosody-tts.com/api/ttsapi/voice-generation/" + e + "/generate/", !0), r.responseType = "blob", r.addEventListener("load", function() {
        n = URL.createObjectURL(r.response), t.src = n, t.play(), document.getElementById("play-pause").style.color = "#a9a9a9", document.getElementById("play-pause").style.border = "solid 1.5px #a9a9a9", document.getElementById("ttsBtn").className = "fa fa-volume-up"
    }), r.send(), t.addEventListener("ended", function() {
        URL.revokeObjectURL(n)
    }, !1)
}
var e = new Array("https://cors-coronacoc.herokuapp.com/", "https://cors-coronacoc-v2.herokuapp.com/", "https://cors-coronacoc-v3.herokuapp.com/"),
    proxyServer = randomItem(e);
new Vue({
    el: "#scraper",
    data: () => ({
        scraperRunning: !1,
        url: "",
        response: null
    }),
    methods: {
        runScraperGlobe: function() {
            this.scraperRunning = !0, this.url.includes("http"), this.url = proxyServer + "http://www.worldometers.info/coronavirus/", this.$http.get(this.url).then(e => {
                this.scraperRunning = !1, document.createElement("div").innerHTML = e.body;
                var r = (n = e.body).indexOf("<h1>Coronavirus Cases:</h1>"),
                    t = n.substr(r, 123).replace("<h1>Coronavirus Cases:</h1>", "").replace(/(\s*)/g, "").replace(/\"/gi, "").replace("divclass=maincounter-number", "").replace("<", "").replace(">", "");
                document.getElementById("globeConfirmed").innerHTML = t + "<span>명</span>";
                var n, a = (n = e.body).indexOf("<h1>Deaths:</h1>"),
                    o = n.substr(a, 123).replace("<<h1>Deaths:</h1>", "").replace(/(\s*)/g, "").replace(/\"/gi, "").replace("h1Deaths:<>", "").replace("h1Deaths:", "").replace(">", "");
                document.getElementById("globeDeath").innerHTML = o + "<span>명</span>"
            })
        },
        runScraperTableByCountry: function() {
            this.scraperRunning = !0, this.url.includes("http"), this.url = proxyServer + "https://www.worldometers.info/coronavirus/countries-where-coronavirus-has-spread/", this.$http.get(this.url).then(e => {
                this.scraperRunning = !1, document.createElement("div").innerHTML = e.body;
                var r = e.body,
                    t = r.indexOf("table-responsive"),
                    n = r.substr(t + 19, 6e3).replace("Country", "국가").replace("Cases", "확진자").replace("Deaths", "사망자").replace("Region", "대륙").replace("United States", "미국").replace("Italy", "이탈리아").replace("Spain", "스페인").replace("China", "중국").replace("Germany", "독일").replace("France", "프랑스").replace("Iran", "이란").replace("United Kingdom", "영국").replace("Switzerland", "스위스").replace("Turkey", "터키").replace("Belgium", "벨기에").replace("Netherlands", "네덜란드").replace("Austria", "호주").replace("South Korea", "대한민국").replace("Canada", "캐나다").replace("Portugal", "포르투갈").replace("Brazil", "브라질").replace("Russia", "러시아").replace("India", "인도").replace("Peru", "페루").replace("Saudi Arabia", "사우디아라비아").replace("Chile", "칠레").replace("South Africa", "남아프리카공화국").replace("Mexico", "멕시코").replace("Pakistan", "파키스탄").replace("Colombia", "콜롬비아").replace("Argentina", "아르헨티나");
                document.getElementById("tableByCountry").innerHTML = n.substr(0, 5400)
            })
        }
    },
    beforeMount() {
        
    }
});
