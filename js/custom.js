"use strict";

var d = new Date();
var week = new Array('일', '월', '화', '수', '목', '금', '토');
var today = week[d.getDay()];

var ableWeek = '';

var input = document.getElementById('ghost-input');
var bubble = document.getElementById('ghost-bubble');
var mouth = document.querySelector('.ghost__mouth');

input.onkeydown = function (e) {
  if (e.keyCode == 13) {
  	if(e.target.value.length == 4) {
        var targetNum = e.target.value.substr(3,1);
        if(targetNum == 1) {
        	ableWeek = "월"
        } else if(targetNum == 2) {
        	ableWeek = "화"
        } else if(targetNum == 3) {
        	ableWeek = "수"
        } else if(targetNum == 4) {
        	ableWeek = "목"
        } else if(targetNum == 5) {
        	ableWeek = "금"
        } else if(targetNum == 6) {
        	ableWeek = "월"
        } else if(targetNum == 7) {
        	ableWeek = "화"
        } else if(targetNum == 8) {
        	ableWeek = "수"
        } else if(targetNum == 9) {
        	ableWeek = "목"
        } else if(targetNum == 0) {
        	ableWeek = "금"
        }

        if (today == '토' || today == '일') {
                bubble.innerText = "주말에는 주중에 구입하지 못한 모든 분들이 구매할 수 있어요.";
        	mouse();

        } else if(today == ableWeek) {
        	bubble.innerText = "오늘 마스크를 구매할 수 있어요.";
        	mouse();
        } else {
        	bubble.innerText = "오늘 마스크를 구매할 수 없어요."+"사용자님은 "+ableWeek+", 토, 일요일에 구매할 수 있어요.";
        	mouse();
        }
  	} else {
        bubble.innerText = "출생년도 4자리를 입력해주세요.";
        e.target.value = ''; // mouth chatter
        mouse();
  	}
  	
  }
};

function mouse() {
	var i = 0;
    if (mouthChatter) clearInterval(mouthChatter);
    var mouthChatter = setInterval(function () {
      mouth.classList.toggle('ghost__mouth--open');
      if (i === 6) clearInterval(mouthChatter);
      i++;
    }, 300);
}




function nearby() {
    navigator.geolocation.getCurrentPosition(function(pos) {
    var latitude = pos.coords.latitude;
    var longitude = pos.coords.longitude;
    document.getElementById("statusLocation").innerText = "위치정보를 성공적으로 가져왔어요.";
    window.open("https://www.goodoc.co.kr/pharmacies?latitude="+latitude+"&longitude="+longitude+"&list_open=1", "blank");
});


}
