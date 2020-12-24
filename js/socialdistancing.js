var Arr = Array(
    "sejong",
    "chungnam",
    "jeju",
    "gyeongnam",
    "gyeongbuk",
    "jeonbuk",
    "chungbuk",
    "gangwon",
    "gyeonggi",
    "jeonnam",
    "ulsan",
    "busan",
    "daegu",
    "daejeon",
    "incheon",
    "seoul",
    "gwangju"
);
var strArr = Array(
    "세종특별자치시",
    "충청남도",
    "제주특별자치도",
    "경상남도",
    "경상북도",
    "전라북도",
    "충청북도",
    "강원도",
    "경기도",
    "전라남도",
    "울산광역시",
    "부산광역시",
    "대구광역시",
    "대전광역시",
    "인천광역시",
    "서울특별시",
    "광주광역시"
);

// $("#opacity").css("width", $(".main_result_wrap").width());

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";

    var weekKorName = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
    ];

    var weekKorShortName = ["일", "월", "화", "수", "목", "금", "토"];

    var weekEngName = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    var weekEngShortName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var d = this;

    return f.replace(
        /(yyyy|yy|MM|dd|KS|KL|ES|EL|HH|hh|mm|ss|a\/p)/gi,
        function($1) {
            switch ($1) {
                case "yyyy":
                    return d.getFullYear(); // 년 (4자리)
                case "yy":
                    return (d.getFullYear() % 1000).zf(2); // 년 (2자리)
                case "MM":
                    return (d.getMonth() + 1).zf(2); // 월 (2자리)

                case "dd":
                    return d.getDate().zf(2); // 일 (2자리)

                case "KS":
                    return weekKorShortName[d.getDay()]; // 요일 (짧은 한글)

                case "KL":
                    return weekKorName[d.getDay()]; // 요일 (긴 한글)

                case "ES":
                    return weekEngShortName[d.getDay()]; // 요일 (짧은 영어)

                case "EL":
                    return weekEngName[d.getDay()]; // 요일 (긴 영어)

                case "HH":
                    return d.getHours().zf(2); // 시간 (24시간 기준, 2자리)

                case "hh":
                    return ((h = d.getHours() % 12) ? h : 12).zf(2); // 시간 (12시간 기준, 2자리)

                case "mm":
                    return d.getMinutes().zf(2); // 분 (2자리)

                case "ss":
                    return d.getSeconds().zf(2); // 초 (2자리)

                case "a/p":
                    return d.getHours() < 12 ? "오전" : "오후"; // 오전/오후 구분

                default:
                    return $1;
            }
        }
    );
};

String.prototype.string = function(len) {
    var s = "",
        i = 0;
    while (i++ < len) {
        s += this;
    }
    return s;
};

String.prototype.zf = function(len) {
    return "0".string(len - this.length) + this;
};

Number.prototype.zf = function(len) {
    return this.toString().zf(len);
};

document.addEventListener("DOMContentLoaded", function() {
    realTimer();
    setInterval(realTimer, 500);
});

function realTimer() {
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth() + 1;
    const date = nowDate.getDate();
    const hour = nowDate.getHours();
    const min = nowDate.getMinutes();
    const sec = nowDate.getSeconds();
    document.getElementById("nowTimes").innerHTML =
        year +
        "-" +
        addzero(month) +
        "-" +
        addzero(date) +
        "&nbsp;" +
        hour +
        ":" +
        addzero(min) +
        ":" +
        addzero(sec);
}

function addzero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}

$("#seg_button").click((e) => {
    $(".seg").css("display", "none");
});

$("#current").click((e) => {
    $(".seg").css("display", "block");
    (function location() {
        navigator.geolocation.getCurrentPosition(function(position) {
            // console.log("위도 : " + position.coords.latitude);
            // console.log("경도 : " + position.coords.longitude);
            try {
                naver.maps.Service.reverseGeocode({
                        location: new naver.maps.LatLng(
                            position.coords.latitude,
                            position.coords.longitude
                        ),
                    },
                    function(status, response) {
                        if (status !== naver.maps.Service.Status.OK) {
                            return alert("Something wrong!");
                        }
                        var results = response.result, // 검색 결과의 컨테이너
                            items = results.items[0].addrdetail; // 검색 결과의 배열
                        const { sido, sigugun } = items;
                        // console.log(sido);
                        // console.log(sigugun.split(" ")[0]);
                        localStorage.setItem("sido", sido);
                        localStorage.setItem("sigugun", sigugun.split(" ")[0]);
                        result(sido, sigugun.split(" ")[0]);
                        $("#current").css("color", "#517EED");
                        // do Something
                    }
                );
                $(".seg").css("display", "none");
            } catch {
                alert("현재위치 확인 불가");
                $(".seg").css("display", "none");
            }
        });
    })();
});

$("#main_result_button").click((e) => {
    $(".main_result_content").slideToggle();
});

// 현재 위치 기반
if (localStorage.getItem("sido") && localStorage.getItem("sigugun")) {
    result(localStorage.getItem("sido"), localStorage.getItem("sigugun"));
} else {
    result("서울특별시", "서울특별시");
}

function result(region, city) {
    $(".main_result_content").html("");

    const index = strArr.indexOf(region);
    const targetRegion = Arr[index];
    let targetResult = null;
    if (data.region[targetRegion].content) {
        // console.log(data.region[targetRegion].content);
        targetResult = data.region[targetRegion].content.find(
            (e) => e.region === city
        );
        // console.log(targetResult);
        if (!targetResult) {
            targetResult = data.region[targetRegion];
        }
    } else {
        targetResult = data.region[targetRegion];
    }

    const resultType = targetResult.type;
    const resultSDate = targetResult.s_date;
    const resultEDate = targetResult.e_date;
    const resultTitle = data.distance[resultType].title;
    let dateText = "";
    if (resultSDate) {
        dateText += resultSDate.format("yyyy.MM.dd");
    } else {
        dateText += "미정";
    }

    dateText += " ~ ";

    if (resultEDate) {
        // console.log(resultEDate);
        dateText += resultEDate.format("yyyy.MM.dd");
    } else {
        dateText += "별도명령시";
    }

    $("#main_result_title").text(resultTitle);
    $("#main_result_title").css("color", data.distance[resultType].color);

    $("#main_result_date").text(dateText);
    // $("#result_name").html(data.distance[resultType].name);
    // $("#result_standard").html(data.distance[resultType].standard);
    $("#main_result_region").text(city);
    let html = "";

    html += `
              <div class="result_box">
                <div class="result_title">
                  사회적 거리두기 단계 체계
                </div>
                <div id="result_name" class="result_content">
                ${data.distance[resultType].name}
                </div>
              </div>
              <div class="result_box">
                <div class="result_title">
                  거리두기 단계별 전환기준
                </div>
                <div id="result_standard"  class="result_content">
                ${data.distance[resultType].standard}
                </div>
              </div>
            `;

    data.distance[resultType].data.forEach((e) => {
        let format = `<div class="result_box">
          <div class="result_title">
          ${e.title}   
          </div>
          <div id="result_name" class="result_content">
          ${e.content}   
          </div>
        </div>`;
        html += format;
    });

    $(".main_result_content").append(html);
}

$("#text-calendar1").pignoseCalendar({
    theme: "blue",
});
//년.월.일 로 포맷변경
$("#text-calendar2").pignoseCalendar({
    format: "YYYY.MM.DD", // date format string. (2017-02-02)
});
//테마변경
$("#text-calendar3").pignoseCalendar({
    theme: "dark", // light, dark, blue
});
//한국
$("#text-calendar4").pignoseCalendar({
    lang: "ko",
});
//오늘 날짜 비활성화
$("#text-calendar5").pignoseCalendar({
    format: "YYYY.MM.DD",
    disabledDates: [
        moment().format("YYYY-MM-DD"), //format 속성과 상관없이 반드시 년-월-일 이어야 한다.
    ],
});
//휴일은 비활성화 시키고 비활성화 된 모든 날짜는 빨간색 처리
$("#text-calendar6").pignoseCalendar({
    format: "YYYY.MM.DD",
    disabledWeekdays: [0, 6], // SUN (0), SAT (6)
    disabledDates: [
        "2019-01-01",
        "2019-02-04",
        "2019-02-05",
        "2019-02-06",
        "2019-03-01",
        "2019-05-06",
        "2019-06-06",
        "2019-08-15",
        "2019-09-12",
        "2019-09-13",
        "2019-10-03",
        "2019-10-09",
        "2019-12-25",
        moment().add(-1, "d").format("YYYY-MM-DD"), //어제 날짜 비활성화
        moment().add(1, "d").format("YYYY-MM-DD"), //내일 날짜 비활성화
    ],
});
//지난 날짜는 선택 못함
$("#text-calendar7").pignoseCalendar({
    format: "YYYY.MM.DD",
    disabledWeekdays: [0, 6], // SUN (0), SAT (6)
    disabledDates: [
        "2019-01-01",
        "2019-02-04",
        "2019-02-05",
        "2019-02-06",
        "2019-03-01",
        "2019-05-06",
        "2019-06-06",
        "2019-08-15",
        "2019-09-12",
        "2019-09-13",
        "2019-10-03",
        "2019-10-09",
        "2019-12-25",
    ],
    minDate: moment().format("YYYY-MM-DD"), //추가
});
$("#text-calendar8").pignoseCalendar({
    format: "YYYY.MM.DD",
    disabledWeekdays: [0, 6], // SUN (0), SAT (6)
    theme: "blue",
    lang: "ko",
    disabledDates: [
        "2019-01-01",
        "2019-02-04",
        "2019-02-05",
        "2019-02-06",
        "2019-03-01",
        "2019-05-06",
        "2019-06-06",
        "2019-08-15",
        "2019-09-12",
        "2019-09-13",
        "2019-10-03",
        "2019-10-09",
        "2019-12-25",
    ],
    minDate: moment().format("YYYY-MM-DD"),
});
