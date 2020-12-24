function randomItem(e) {
    return e[Math.floor(Math.random() * e.length)]
}

function welcome() {
    //var special = new Array("수험생 여러분들을<br>응원합니다!", "늘 응원하는 사람이 있다는 것,<br>잊지 말고 당신을 믿어요!", "수험생 여러분들의<br>빛나는 열정을 응원합니다.", "잘했고, 잘하고 있고,<br>잘 할 거예요", "멈추지 않은 여러분의 노력<br>좋은 결과로 이어질 거예요.", "있는 그대로, 지금 느낌<br>그대로 여러분을 보여주세요", "파란 하늘 끝까지<br>올라가 보자, 높이", "하늘을 바라봐요,<br> 어두워도 괜찮아요.", "하늘 위로 날아오를<br>시간이에요.", "지금이야,<br>하늘로 비상할 시간", "힘을 내세요,<br>여기까지 왔잖아요", "단 한 가지 약속은,<br>틀림없이 끝이 있다는 것.");
    //var e = new Array("모두를 위한 거리두기에<br>동참해주세요.", "증상 발생 시,<br>1339로 전화하세요!", "올바른 손씻기는<br>비누로 30초 이상!", "예방 수칙 준수로<br>이겨낼 수 있습니다.", "기침할 땐,<br>옷소매로 가리고 해주세요.", "모든 의료진분들을<br>응원합니다!", "거리는 멀어져도,<br>마음은 가까이!", "외출할 때는<br>마스크 착용 필수!", "한순간의 방심이<br>재확산의 시작이 됩니다.", "나 하나쯤이야 라는 생각이<br>모두의 안전을 위협합니다", "진정한 인싸라면<br>클럽말고 집으로", "밀집된 사람들 속에<br>방심한 너와나 거리", "당연한 것들을 누릴<br>그날이 빨리 오길", "집콕운동,<br>모두를 위한 스포츠", "우리의 일상은 잠시 멈춤<br>서로의 마음은 계속 끈끈", "집회, 모임, 종교행사는<br>잠시 자제해주세요.", "모두 만나요.<br>온라인에서", "다시 만날 그때까지<br>힘내요, 우리!", "꼭 다시 만나자,<br>잃어버린 모든 것들아", "힘을 내요, 대한민국.<br>마음을 모아 이겨냅시다.", "비정상이 일상이 된 지금<br>함께 극복할 수 있어요!");
    //var special = new Array("수고했어요.<br>원하는 꿈을 이룰거예요", "여러분의 열정과 노력에<br>박수를 보냅니다!", "코로나19 속에서도<br>최선을 다해줘 고마워요", "앞으로의 즐거운<br>일들만 생각해요.", "여러분의 멋진<br>2021년을 기대할게요.");
    var special = new Array("빠르게 지나간 올 한 해,<br>정말 수고했어요.", "잘가 2020,<br>안녕 2021", "어느덧 2020년이 끝나가네요,<br>한해동안 수고 많았어요.", "오늘보다 더 나은 날들이<br>당신을 기다리고 있어요", "모두가 함께했기에 소중한 것들을<br>지킬 수 있었습니다.", "행복한 일만 가득한<br>2021년을 기대할게요!", "우리의 일상이 다시<br>반짝였으면 좋겠어요.",
        "이번 크리스마스는<br>따뜻한 방안에서 보내봐요", "메리 크리스마스<br>2020년 수고했어요.", "단 한가지 약속은<br>틀림없이 끝이 있다는 것", "집에서 보내는<br>따뜻한 크리스마스 보내세요.", "모두의 노력 덕분에<br>소중한 일상을 지켜내고 있어요.", "나와 소중한 이웃을 위해<br>조금만 더 힘내주세요!", "순식간에 지나가버린 올해,<br>내년에는 더 나은 한 해가 될거예요.");


    //  document.getElementById("suggestText").innerHTML = randomItem(special)
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

// 사회적 거리두기 현황
var distanceData = data;
console.clear();
console.log(distanceData);
var regionList = [distanceData.region.seoul.region, distanceData.region.gyeonggi.region, distanceData.region.busan.region, distanceData.region.chungbuk.region, distanceData.region.chungnam.region, distanceData.region.daegu.region, distanceData.region.daejeon.region, distanceData.region.gangwon.region, distanceData.region.gwangju.region, distanceData.region.gyeongbuk.region, distanceData.region.gyeongnam.region, distanceData.region.incheon.region, distanceData.region.jeju.region, distanceData.region.jeonbuk.region, distanceData.region.jeonnam.region, distanceData.region.sejong.region, distanceData.region.ulsan.region];

var disLevList = [distanceData.region.seoul.type, distanceData.region.gyeonggi.type, distanceData.region.busan.type, distanceData.region.chungbuk.type, distanceData.region.chungnam.type, distanceData.region.daegu.type, distanceData.region.daejeon.type, distanceData.region.gangwon.type, distanceData.region.gwangju.type, distanceData.region.gyeongbuk.type, distanceData.region.gyeongnam.type, distanceData.region.incheon.type, distanceData.region.jeju.type, distanceData.region.jeonbuk.type, distanceData.region.jeonnam.type, distanceData.region.sejong.type, distanceData.region.ulsan.type];
var cnt = 0;

$('#regionName').html(regionList[0] + '는 지금');
$('#disLev').html(disLevToString(disLevList[cnt]));
cnt++;

var updateRegion = setInterval(function() {
    if (cnt > 16) {
        cnt = 0;
    } else {
        $('#regionName').html(regionList[cnt] + '는 지금');
        $('#disLev').html(disLevToString(disLevList[cnt]));
        cnt++;
    }
}, 8000);

function disLevToString(lev) {
    switch (lev) {
        case 'dis_1':
            return '거리두기 1단계'
            break;
        case 'dis_1_5':
            return '거리두기 1.5단계'
            break;
        case 'dis_2':
            return '거리두기 2단계'
            break;
        case 'dis_2_5':
            return '거리두기 2.5단계'
            break;
        case 'dis_3':
            return '거리두기 3단계'
            break;
        default:
            return '알 수 없음'
            break;
    }

}
