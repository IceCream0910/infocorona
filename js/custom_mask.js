"use strict";

var d = new Date();
var week = new Array('일', '월', '화', '수', '목', '금', '토');
var today = week[d.getDay()];

var ableWeek = '';

var input = document.getElementById('ghost-input');
var bubble = document.getElementById('resultWhen');
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


//초기화
window.onload = function() {
var welcomeTxt = new Array('무슨 요일에 마스크<br>살 수 있는지<br>알려드릴게요.', '주변 약국의 마스크 <br>재고를 알려줄게요.');
document.getElementById("mask_welcome").innerHTML = randomItem(welcomeTxt);

}

// 상단 텍스트 랜덤변경
function randomItem(a) {
  return a[Math.floor(Math.random() * a.length)];
}

/*
function nearby() {

$.get("https://ipinfo.io", function(response) {
  $("#ip").html("IP: " + response.ip);
  $("#address").html("Location: " + response.city + ", " + response.region);
  $("#details").html(JSON.stringify(response, null, 4));
  console.log(loc);
  var loc = response.loc.split(',');
  var currentLat = loc[0];
  var currentLong = loc[1];

  document.getElementById("statusLocation").innerText = "위치정보를 성공적으로 가져왔어요.";
  window.open("https://www.goodoc.co.kr/pharmacies?latitude="+currentLat+"&longitude="+currentLong+"&list_open=1", "blank");



}, "jsonp");

}
*/
