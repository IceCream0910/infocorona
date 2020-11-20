
//프록시 서버 분산
  var e = new Array("https://cors-coronacoc.herokuapp.com/", "https://cors-coronacoc-v2.herokuapp.com/", "https://cors-coronacoc-v3.herokuapp.com/"),
    proxyServer = randomItem(e);
    $('#singelBarChart').hide();


/**
 *  yyyyMMdd 포맷으로 반환
 */
function getFormatDate(date){
    var year = date.getFullYear();              //yyyy
    var month = (1 + date.getMonth());          //M
    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    var day = date.getDate();                   //d
    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    return  year + '' + month + '' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
}

/*날짜 구하기*/
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1
    var day = date.getDate();
    if(month < 10){
        month = "0"+month;
    }
    if(day < 10){
        day = "0"+day;
    }
 
    var today = year+""+month+""+day;


//연령/성별 현황
    $.ajax({
      type: "GET",
      url: proxyServer+"http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson?serviceKey=0Ii2OFEKp3FQwYT0kWzwDNlmKa3JyD2hY4PPXBL3yA5RbBmUD8JSCBGEkGlVzmMIDF%2B2YFli6qA74ybbeSot3Q%3D%3D&ServiceKey=0Ii2OFEKp3FQwYT0kWzwDNlmKa3JyD2hY4PPXBL3yA5RbBmUD8JSCBGEkGlVzmMIDF%2B2YFli6qA74ybbeSot3Q%3D%3D&pageNo=1&numOfRows=10&startCreateDt="+today+"&endCreateDt="+today, // Using myjson.com to store the JSON
      success: function(result) {

var theJson = xmlToJson(result);

if(JSON.stringify(theJson.response.body.totalCount).replace("{\"#text\":", "").replace("\"", "").replace("\"}").replace("undefined", "") <= 0) {
  console.log("오늘 데이터 없음");
  yesterdayData();

} else {
   var cases_byAge = new Array(9);
var death_byAge = new Array(9);
var cases_bySex = new Array(1);

for(var i=0; i<9; i++) {
    var cases_age = (theJson.response.body.items.item[i].confCase);
    var death_age = (theJson.response.body.items.item[i].death);
    cases_byAge[i] = parseInt(JSON.stringify(cases_age).replace("{\"#text\":", "").replace("\"", "").replace("\"}").replace("undefined", ""));
    death_byAge[i] = parseInt(JSON.stringify(death_age).replace("{\"#text\":", "").replace("\"", "").replace("\"}").replace("undefined", ""));
}

var case_male =(theJson.response.body.items.item[9].confCase);
var case_female = (theJson.response.body.items.item[10].confCase);
cases_bySex[0] = parseInt(JSON.stringify(case_female).replace("{\"#text\":", "").replace("\"", "").replace("\"}").replace("undefined", ""));
cases_bySex[1] = parseInt(JSON.stringify(case_male).replace("{\"#text\":", "").replace("\"", "").replace("\"}").replace("undefined", ""));

}

reloadChart(cases_byAge, death_byAge, cases_bySex);


        
      }
    });

       function xmlToJson(xml) {
       // Create the return object
       var obj = {};

       if (xml.nodeType == 1) { // element
           // do attributes
           if (xml.attributes.length > 0) {
           obj["@attributes"] = {};
               for (var j = 0; j < xml.attributes.length; j++) {
                   var attribute = xml.attributes.item(j);
                   obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
               }
           }
       } 
       else if (xml.nodeType == 3 || 
                xml.nodeType == 4) { // text and cdata section
           obj = xml.nodeValue
       }

       // do children
       if (xml.hasChildNodes()) {
           for(var i = 0; i < xml.childNodes.length; i++) {
               var item = xml.childNodes.item(i);
               var nodeName = item.nodeName;
               if (typeof(obj[nodeName]) == "undefined") {
                   obj[nodeName] = xmlToJson(item);
               } else {
                   if (typeof(obj[nodeName].length) == "undefined") {
                       var old = obj[nodeName];
                       obj[nodeName] = [];
                       obj[nodeName].push(old);
                   }
                   if (typeof(obj[nodeName]) === 'object') {
                       obj[nodeName].push(xmlToJson(item));
                   }
               }
           }
       }
       return obj;
}


////// 어제 데이터 불러오기(오늘자 데이터가 없을 때)
function yesterdayData() {
  var yesterday = new Date(Date.now() - 864e5);
      $.ajax({
      type: "GET",
      url: proxyServer+"http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson?serviceKey=0Ii2OFEKp3FQwYT0kWzwDNlmKa3JyD2hY4PPXBL3yA5RbBmUD8JSCBGEkGlVzmMIDF%2B2YFli6qA74ybbeSot3Q%3D%3D&ServiceKey=0Ii2OFEKp3FQwYT0kWzwDNlmKa3JyD2hY4PPXBL3yA5RbBmUD8JSCBGEkGlVzmMIDF%2B2YFli6qA74ybbeSot3Q%3D%3D&pageNo=1&numOfRows=10&startCreateDt="+getFormatDate(yesterday)+"&endCreateDt="+getFormatDate(yesterday), // Using myjson.com to store the JSON
      success: function(result) {

var theJson = xmlToJson(result);
   var cases_byAge = new Array(9);
var death_byAge = new Array(9);
var cases_bySex = new Array(1);

for(var i=0; i<9; i++) {
    var cases_age = (theJson.response.body.items.item[i].confCase);
    var death_age = (theJson.response.body.items.item[i].death);
    cases_byAge[i] = parseInt(JSON.stringify(cases_age).replace("{\"#text\":", "").replace("\"", "").replace("\"}").replace("undefined", ""));
    death_byAge[i] = parseInt(JSON.stringify(death_age).replace("{\"#text\":", "").replace("\"", "").replace("\"}").replace("undefined", ""));
}

var case_male =(theJson.response.body.items.item[9].confCase);
var case_female = (theJson.response.body.items.item[10].confCase);
cases_bySex[0] = parseInt(JSON.stringify(case_female).replace("{\"#text\":", "").replace("\"", "").replace("\"}").replace("undefined", ""));
cases_bySex[1] = parseInt(JSON.stringify(case_male).replace("{\"#text\":", "").replace("\"", "").replace("\"}").replace("undefined", ""));


reloadChart(cases_byAge, death_byAge, cases_bySex);

        
      }
    });
}



    $.ajax({
      type: "GET",
      url: proxyServer+"http://api.corona-19.kr/korea/country/new/?serviceKey=5d4143bd958c16e18abe1acef5386c12d", // Using myjson.com to store the JSON
      success: function(result) {
        document.getElementById("confirmedPM").innerHTML = "확진자 (+ "+result.korea.newCase+")";
        document.getElementById("localConfirmed").innerHTML = "국내발생 "+result.korea.newCcase+"명<br>해외유입 "+result.korea.newFcase+"명";

        //시도별 현황
       document.getElementById('seoulCases').innerHTML = result.seoul.totalCase+"(+"+result.seoul.newCase+")";
    document.getElementById('seoulCure').innerHTML = result.seoul.recovered;
    document.getElementById('seoulDeath').innerHTML = result.seoul.death;

    document.getElementById('busanCases').innerHTML = result.busan.totalCase+"(+"+result.busan.newCase+")";
    document.getElementById('busanCure').innerHTML = result.busan.recovered;
    document.getElementById('busanDeath').innerHTML = result.busan.death;

    document.getElementById('daeguCases').innerHTML = result.daegu.totalCase+"(+"+result.daegu.newCase+")";
    document.getElementById('daeguCure').innerHTML = result.daegu.recovered;
    document.getElementById('daeguDeath').innerHTML = result.daegu.death;

    document.getElementById('incheonCases').innerHTML = result.incheon.totalCase+"(+"+result.incheon.newCase+")";
    document.getElementById('incheonCure').innerHTML = result.incheon.recovered;
    document.getElementById('incheonDeath').innerHTML = result.incheon.death;

    document.getElementById('gwangjuCases').innerHTML = result.gwangju.totalCase+"(+"+result.gwangju.newCase+")";
    document.getElementById('gwangjuCure').innerHTML = result.gwangju.recovered;
    document.getElementById('gwangjuDeath').innerHTML = result.gwangju.death;

    document.getElementById('daejeonCases').innerHTML = result.daejeon.totalCase+"(+"+result.daejeon.newCase+")";
    document.getElementById('daejeonCure').innerHTML = result.daejeon.recovered;
    document.getElementById('daejeonDeath').innerHTML = result.daejeon.death;

    document.getElementById('ulsanCases').innerHTML = result.ulsan.totalCase+"(+"+result.ulsan.newCase+")";
    document.getElementById('ulsanCure').innerHTML = result.ulsan.recovered;
    document.getElementById('ulsanDeath').innerHTML = result.ulsan.death;

    document.getElementById('sejongCases').innerHTML = result.sejong.totalCase+"(+"+result.sejong.newCase+")";
    document.getElementById('sejongCure').innerHTML = result.sejong.recovered;
    document.getElementById('sejongDeath').innerHTML = result.sejong.death;

    document.getElementById('ggCases').innerHTML = result.gyeonggi.totalCase+"(+"+result.gyeonggi.newCase+")";
     document.getElementById('ggCure').innerHTML = result.gyeonggi.recovered;
      document.getElementById('ggDeath').innerHTML = result.gyeonggi.death;

    document.getElementById('gangwonCases').innerHTML = result.gangwon.totalCase+"(+"+result.gangwon.newCase+")";
    document.getElementById('gangwonCure').innerHTML = result.gangwon.recovered;
    document.getElementById('gangwonDeath').innerHTML = result.gangwon.death;

    document.getElementById('cbCases').innerHTML = result.chungbuk.totalCase+"(+"+result.chungbuk.newCase+")";
    document.getElementById('cbCure').innerHTML = result.chungbuk.recovered;
    document.getElementById('cbDeath').innerHTML = result.chungbuk.death;

    document.getElementById('cnCases').innerHTML = result.chungnam.totalCase+"(+"+result.chungnam.newCase+")";
    document.getElementById('cnCure').innerHTML = result.chungnam.recovered;
    document.getElementById('cnDeath').innerHTML = result.chungnam.death;

    document.getElementById('jbCases').innerHTML = result.jeonbuk.totalCase+"(+"+result.jeonbuk.newCase+")";
    document.getElementById('jbCure').innerHTML = result.jeonbuk.recovered;
    document.getElementById('jbDeath').innerHTML = result.jeonbuk.death;

    document.getElementById('jnCases').innerHTML = result.jeonnam.totalCase+"(+"+result.jeonnam.newCase+")";
    document.getElementById('jnCure').innerHTML = result.jeonnam.recovered;
    document.getElementById('jnDeath').innerHTML = result.jeonnam.death;

    document.getElementById('gbCases').innerHTML = result.gyeongbuk.totalCase+"(+"+result.gyeongbuk.newCase+")";
    document.getElementById('gbCure').innerHTML = result.gyeongbuk.recovered;
    document.getElementById('gbDeath').innerHTML = result.gyeongbuk.death;

    document.getElementById('gnCases').innerHTML =result.gyeongnam.totalCase+"(+"+result.gyeongnam.newCase+")";
    document.getElementById('gnCure').innerHTML = result.gyeongnam.recovered;
    document.getElementById('gnDeath').innerHTML = result.gyeongnam.death;

    document.getElementById('jejuCases').innerHTML = result.jeju.totalCase+"(+"+result.jeju.newCase+")";
    document.getElementById('jejuCure').innerHTML = result.jeju.recovered;
    document.getElementById('jejuDeath').innerHTML = result.jeju.death;

    document.getElementById('gumCases').innerHTML = result.quarantine.totalCase+"(+"+result.quarantine.newCase+")";
    document.getElementById('gumCure').innerHTML = result.quarantine.recovered;
    document.getElementById('gumDeath').innerHTML = result.quarantine.death;

    

      }
    });

$.ajax({
      type: "GET",
      url: proxyServer+"http://api.corona-19.kr/korea/?serviceKey=5d4143bd958c16e18abe1acef5386c12d", // Using myjson.com to store the JSN
      success: function(result2) {
        document.getElementById("whenUpdate").innerHTML = result2.updateTime.replace("코로나바이러스감염증-19 국내 발생현황 (", "").replace(")", "");
        document.getElementById("confirmed").innerHTML = result2.TotalCase+"명";
        document.getElementById("cure").innerHTML = result2.TotalRecovered+"명";
        document.getElementById("death").innerHTML = result2.TotalDeath+"명";
        document.getElementById("confirmedPM").innerHTML += "<br>치료중 : "+result2.NowCase+"명";
        document.getElementById("curePM").innerHTML = "격리해제자 (+ "+result2.TodayRecovered+")";
        document.getElementById("deathPM").innerHTML = "사망자 (+ "+result2.TodayDeath+")";
        $('#casePercent').attr("data-done",(result2.casePercentage)*10.0);
        $('#curePercent').attr("data-done",(result2.recoveredPercentage));
        $('#deathPercent').attr("data-done",(result2.deathPercentage)*10.0);

        progressbar_case();
         progressbar_cure();
          progressbar_death();
        
        
      }
    });

$.ajax({
      type: "GET",
      url: "https://api.covid19api.com/summary", // Using myjson.com to store the JSN
      success: function(result3) {

        document.getElementById("globeConfirmed").innerHTML = result3.Global.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"명";
        document.getElementById("globeDeath").innerHTML = result3.Global.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"명";
        document.getElementById("globeCure").innerHTML = result3.Global.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"명";

        document.getElementById("globeConfirmedPM").innerHTML = "확진자 (+ "+result3.Global.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+")";
        document.getElementById("globeCurePM").innerHTML = "격리해제자 (+ "+result3.Global.NewRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+")";
        document.getElementById("globeDeathPM").innerHTML = "사망자 (+ "+result3.Global.NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+")";

        
        
      }
    });


    rtTodayGet();


function rtTodayGet() {
    $('#refreshRT').addClass('lotation');
// &nbsp;3초 후 함수가 실행됨
    
    //숫자가져오기
    $.ajax({
      type: "GET",
      url: proxyServer+"https://apiv2.corona-live.com/stats.json", // Using myjson.com to store the JSON
      success: function(result) {
        document.getElementById('rtToday').innerHTML = result.overview.current[0]+"명";
        var rtpm = String(result.overview.current[1]);
        if(rtpm.includes("-")) {
            document.getElementById('rtpmBox').style.backgroundColor = "rgba(119, 158, 203, 0.3)";
            rtpm = "↓ "+rtpm;
        } else {
            document.getElementById('rtpmBox').style.backgroundColor = "rgba(255, 105, 97, 0.3)";
            rtpm = "↑ "+rtpm;
        }
         document.getElementById('rtPM').innerHTML = rtpm;
         document.getElementById('rtDec').innerHTML = result.casesSummary.totalCases+"명 중 "+result.casesSummary.yesterdayCases+"명은 어제 집계";

         setTimeout(function() {
  $('#refreshRT').removeClass('lotation');
}, 1000);
        
      }
    });

    //상세내용
    $.ajax({
      type: "GET",
      url: proxyServer+"https://apiv2.corona-live.com/updates.json", // Using myjson.com to store the JSON
      success: function(result) {
        var length =  result.length;
        document.getElementById('rtModalBtn').innerHTML = result[length-1].cases+"명 추가 확진 >";
        
        for(var i=0; i<result.length; i++) {
            $('#rtUpdates').prepend('<div id="pattern"><h5>'+result[i].datetime+'<span style="color:red; margin-left:10px;">'+result[i].cases+'명 발생</span></h5><span style="font-size:15px;">'+result[i].src+'</span><hr></div>');
        }

        

        
      }
    });
}

//뉴스
    $.ajax({
      type: "GET",
      url: "https://coronacoc-news.herokuapp.com/covid19", 
      success: function(result) {
        var res = JSON.parse(result);
        var length_article = res.totalResults;
        console.clear();
        $('.newsfeed').html('');

        for(var i=0; i<length_article; i++) {
          var description = res.articles[i].description;

          var length = 80; // 표시할 글자수 기준
if (description.length > length) {
  description = description.substr(0, length-2) + '...';
}


           $('.newsfeed').append('<div class="newsfeed_item" onclick="window.open(\''+res.articles[i].url+'\', \'_blank\');"> <h4 class="title">'+res.articles[i].title+'</h4><span class="description">'+description+'</span></div>');
        }

      }
    });



// 차트 생성
function reloadChart(cases_byAge, death_byAge, cases_bySex) {
  try {

    // 연령별 확진자 분포
    var ctx = document.getElementById("singelBarChart_2");
    if (ctx) {
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["0~9세", "10대", "20대", "30대", "40대", "50대", "60대", "70대", "80대이상"],
          datasets: [
            {
              label: "확진자 수",
              data: cases_byAge,
              borderColor: "rgba(255, 40, 0, 1)",
              borderWidth: "0",
              backgroundColor: "rgba(255, 40, 0, 0.8)"
            }
          ]
        },
        options: {
          legend: {
            position: 'center',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          scales: {
            xAxes: [{
              ticks: {
                fontFamily: "Poppins"

              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: false,
                fontFamily: "Poppins"
              }
            }]
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }

try {

    // 연령별 사망자 분포
    var ctx = document.getElementById("singelBarChart");
    if (ctx) {
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["0~9세", "10대", "20대", "30대", "40대", "50대", "60대", "70대", "80대이상"],
          datasets: [
            {
              label: "사망자수",
              data: death_byAge,
              borderColor: "rgba(0, 0, 0, 0.9)",
              borderWidth: "0",
              backgroundColor: "rgba(0, 0, 0, 0.5)"
            }
          ]
        },
        options: {
          legend: {
            position: 'center',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          scales: {
            xAxes: [{
              ticks: {
                fontFamily: "Poppins"

              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontFamily: "Poppins"
              }
            }]
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }

    try {

    //소재별 확진자 현황
    var ctx = document.getElementById("doughutChart_sex");
    if (ctx) {
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: cases_bySex,
            backgroundColor: [
              '#00b5e9',
              '#fa4251',
            ],
            hoverBackgroundColor: [
              '#00b5e9',
              '#fa4251',
            ]

          }],
          labels: [
            "남성",
            "여성"
          ]
        },
        options: {
          legend: {
            position: 'center',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          responsive: true
        }
      });
    }


  } catch (error) {
    console.log(error);
  }
}
