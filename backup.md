<!DOCTYPE html>
<html lang="ko">

<head>

    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="코로나19 국내 발생현황 및 관련정보를 한눈에 알아보세요!">
    <meta name="author" content="Ice Cream">
    <meta name="keywords" content="코로나19">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-159921858-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-159921858-1');
    </script>


    <!-- Fontfaces CSS-->
    <link href="css/font-face.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-5/css/fontawesome-all.min.css" rel="stylesheet" media="all">
    <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">
    <script src="https://livecorona.co.kr/data/koreaRegionalData.js"></script>
    <!-- Bootstrap CSS-->
    <link href="vendor/bootstrap-4.1/bootstrap.min.css" rel="stylesheet" media="all">
    <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>

    <!-- Vendor CSS-->
    <link href="vendor/animsition/animsition.min.css" rel="stylesheet" media="all">
    <link href="vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet" media="all">
    <link href="vendor/wow/animate.css" rel="stylesheet" media="all">
    <link href="vendor/css-hamburgers/hamburgers.min.css" rel="stylesheet" media="all">
    <link href="vendor/slick/slick.css" rel="stylesheet" media="all">
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all">
    <link href="vendor/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" media="all">
    <script src="https://cdn.plrjs.com/player/rfayfi545seai/b2ya8wao32em.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.min.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/luxon@1.22.0/build/global/luxon.min.js" type="text/javascript"></script>


    <!-- tui chart -->

    <link rel="stylesheet" href="https://uicdn.toast.com/tui.chart/latest/tui-chart.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.0/raphael-min.js"></script>
    <script src="https://unpkg.com/tui-code-snippet@1.4.0/dist/tui-code-snippet.js"></script>
    <script src="https://uicdn.toast.com/tui.chart/latest/tui-chart.min.js"></script>

    <script src="https://uicdn.toast.com/tui.chart/latest/maps/south-korea.js"></script>
    <script src="https://socialdistancing.kr/data/data.js"></script>



    <!-- Main CSS-->
    <link href="css/theme.css" rel="stylesheet" media="all">
    <link href="css/darkmode.css" rel="stylesheet" media="all">

    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:700|Noto+Sans+KR&display=swap" rel="stylesheet">
    <style>
        .page-wrapper {
            overflow: hidden;
        }
    </style>


</head>

<body oncontextmenu="return false" ondragstart="return false" onselectstart="return false">

    <a href="#" class="top ripple-effect"><i class="fa fa-arrow-up"></i></a>



    <div class="page-wrapper">
        <!-- PAGE CONTENT-->
        <div class="page-content--bgf7">

            <!-- STATISTIC-->

            <section class="statistic statistic2">

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="play ripple-effect" onclick="window.open('https://www.notion.so/11f6842414ec4b33886bfbfac06ddad8');" style="position:absolute; top:-20px; right:10px; width:35px; height:35px;color:#a9a9a9;"><i class="fa fa-bell"></i></div>

                            <img src="http://coronacoc.dothome.co.kr/icon.png" width="50px" style="position: relative; top:-25px;">

                            <h6 style="width:80%;">
                            </h6>





                            <section class="welcome p-t-10" id="Rtop" style="margin-left:-15px; margin-top:-50px; margin-bottom:70px;">
                                <div class="container">
                                    <div class="row">

                                        <div class="col-md-12" style="margin-top:30px; margin-left:10px;">


                                            <br>

                                            <div class="segmented-control">

                                                <input type="radio" name="radio2" value="3" id="tab-1" onclick="javascript:location.href='main.html';" checked/>
                                                <label for="tab-1" class="segmented-control__1">
        <p>현황</p></label>

                                                <input type="radio" name="radio2" value="4" id="tab-2" onclick="javascript:location.href='info.html';" />
                                                <label for="tab-2" class="segmented-control__2">
        <p>정보</p></label>

                                                <input type="radio" name="radio2" value="5" id="tab-3" onclick="javascript:location.href='interactive.html';" />
                                                <label for="tab-3" class="segmented-control__3">
        <p>인터랙티브</p></label>

                                                <span></span>

                                                <div class="segmented-control__color"></div>
                                            </div>




                                        </div>
                                    </div>
                            </section>
                            <!-- END WELCOME-->
                            <h3 style="margin-left:10px; font-size: 20px; display:inline-block;">국내 현황
                                <h6 class="pb-4 display-5" style="margin-left:10px;color:#a9a9a9; display:inline-block; padding:10px;" id="whenUpdate">
                                    <div class="animated">
                                        <div class="parent"></div>
                                        <div class="padding"></div>
                                        <div class="title"></div>정보 가져오는 중...</h6>
                                <!--
                                <div id="player-container" style="display:inline-block;">
                                    <div id="play-pause" class="play ripple-effect" onclick="getTTS();" style="width:35px; height:35px; border:1.5px solid #a9a9a9; border-radius:50%; display:flex; -webkit-justify-content: center; justify-content: center; -webkit-align-items: center; align-items: center; color:#a9a9a9;"><i id="ttsBtn" class="fa fa-volume-up"></i></div>
                                </div>
                                -->
                            </h3>
                            </div>
                            </div>

                            <div class="row" id="korea">

                                <div class="col-md-6 col-lg-3" style="width:50%;">
                                    <div class="statistic__item statistic__item--red" style="border-radius: 20px;
background: #fa4251;
box-shadow:  5px 5px 10px #d53845, 
             -5px -5px 0px transparent;">
                                        <span class="desc">확진자</span>
                                        <h2 class="number" id="confirmed">로딩중</h2>
                                        <span class="desc" id="confirmedPM"></span><br>
                                        <span class="desc" id="cureNow"></span>
                                        <div class="icon">
                                            <i class="zmdi zmdi-account-o"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3" style="width:50%; margin-left:-10px;">
                                    <div class="statistic__item statistic__item--green" style="border-radius: 20px;
background: #00ad5f;
box-shadow:  5px 5px 10px #009351, 
             -5px -5px 0px transparent;">
                                        <span class="desc">격리해제</span>
                                        <h2 class="number" id="cure">로딩중</h2>
                                        <span class="desc" id="curePM"></span>
                                        <div class="icon">
                                            <i class="zmdi zmdi-shield-check"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3" style="width:50%;">
                                    <div class="statistic__item statistic__item--blue" style="border-radius: 20px;
background: #00b5e9;
box-shadow:  5px 5px 10px #009ac6, 
             -5px -5px 0px transparent;">
                                        <span class="desc">치료중</span>
                                        <h2 class="number" id="nowcases">로딩중</h2>
                                        <span class="desc" id="nowPM"></span>
                                        <div class="icon">
                                            <i class="zmdi zmdi-play-circle"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3" style="width:50%; margin-left:-10px;">
                                    <div class="statistic__item statistic__item--black" style="border-radius: 20px;
background: #0f0f0f;
box-shadow:  5px 5px 10px #0d0d0d, 
             -5px -5px 0px transparent;">
                                        <span class="desc">사망자</span>
                                        <h2 class="number" id="death">로딩중</h2>
                                        <span class="desc" id="deathPM"></span>
                                        <div class="icon">
                                            <i class="zmdi zmdi-accounts-outline"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="sufee-alert alert with-close alert-danger alert-dismissible fade show" style="border-radius: 15px;
background: #4272d7;
border:none;
box-shadow:  5px 5px 10px #3861b7, 
             -5px -5px 0px transparent;">
                                <button type="button" class="ripple-effect" style="color:white; text-align:left;" onclick="javascript:sendMsgToParent('socialdistancing');">
 여기를 눌러 지역별 사회적 거리두기 단계를 확인해보세요.
                                </button>
                            </div>

                            <br>

                            <!--
                            <div class="sufee-alert alert alert-primary" style="border-radius: 15px;
background: #4272d7;
border:none;
box-shadow:  5px 5px 10px #3861b7, 
             -5px -5px 0px transparent;">
                                <button type="button" class="newyear" style="color:white; display:inline-block; text-align:left;">
                                    1월 17일 0시~6시에 서비스 점검으로 인해 접속이 제한될 예정입니다. 이용에 불편을 드려 죄송합니다.
                                </button>
                            </div>
                           
-->

                        </div>
                    </div>
            </section>
            <!-- END STATISTIC-->

            <!-- STATISTIC CHART-->
            <section class="statistic-chart">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h3 class="tab1_analy" onclick="javascript:changeTab(1);" style="margin-left:10px; display:inline-block;">통계
                            </h3>
                            <h3 class="tab2_routes" onclick="javascript:changeTab(2);" style="color:#a9a9a9;margin-left:10px; display:inline-block;">동선
                            </h3>
                        </div>

                    </div>

                    <script>
                        function changeTab(id) {
                            if (id == 1) {
                                $('.tab1_analy').css('color', '#000');
                                $('.tab2_routes').css('color', '#a9a9a9');
                                $('.analy_tab_wrap').show(100);
                                $('.routes_tab_wrap').hide(100);
                            } else {
                                $('.tab1_analy').css('color', '#a9a9a9');
                                $('.tab2_routes').css('color', '#000');
                                $('.analy_tab_wrap').hide(100);
                                $('.routes_tab_wrap').show(100);

                            }
                        }
                    </script>

                    <div class="analy_tab_wrap ">
                        <!-- CHART-->
                        <div class="statistic-chart-1" style="border-radius: 20px; box-shadow:  5px 5px 10px #c3c3c3, 
             -5px -5px 0px transparent;">
                            <div class="chart-wrap">
                                <div id="rtSection">
                                    <h4>실시간 확진자<span style="color:#a9a9a9; font-size:15px;"></span>
                                    </h4>

                                    <div class="reload" onclick="rtTodayGet();">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.011 20c0-0.002 0-0.003 0-0.005 0-4.421 3.578-8.005 7.991-8.005 2.683 0 5.051 1.329 6.5 3.361l1.26-1.644c-1.834-2.254-4.627-3.696-7.76-3.696 -5.519 0-9.994 4.471-10.001 9.989H8.013l3.018 4.013L13.987 20H12.011zM32 20l-2.969-3.985L26 20h1.992c-0.003 4.419-3.579 8.001-7.99 8.001 -2.716 0-5.111-1.36-6.555-3.435l-1.284 1.644c1.832 2.314 4.66 3.803 7.84 3.803 5.524 0 10.001-4.478 10.001-10.001 0-0.004-0.001-0.008-0.001-0.012H32z"/>
  </svg>
                                    </div>

                                    <!-- Button trigger modal -->

                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document" style="border-radius:20px;">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">실시간 확진자 발생 현황</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                                                </div>
                                                <div class="modal-body" id="rtUpdates" style="height:300px; overflow-y:scroll; overflow-x:hidden;">

                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-transparent ripple-effect" data-dismiss="modal">닫기</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <h3 style="margin-top:5px;">
                                        <h3 id="rtToday" style="display:inline-block;"></h3>
                                        <div id="rtpmBox" style="padding:5px 10px; border-radius:10px; background:rgba(255, 105, 97, 0.3); display:inline-block; margin-left:10px;"><span id="rtPM"></span></div>
                                    </h3><br>
                                    <button id="rtModalBtn" type="button" class="btn btn-primary ripple-effect" style="margin-top:15px;width:100%; text-align:left; border-radius:10px;">
  상세 
</button><br><br>
                                    <span style="color:#a9a9a9; font-size:13px;" id="rtDec"></span><br>
                                    <span style="color:#a9a9a9; font-size:12px; line-height:0.2em;">재난문자 및 지자체 발표를 기반으로 합니다. 검역 및 일부 지역 확진 사례는 미포함됩니다. 실제 상황과 오차가 발생할 수 있습니다.</span>

                                    </span>


                                </div>


                            </div>
                        </div>
                        <!-- END CHART-->


                        <script type="text/javascript">
                            var btnRt = document.getElementById('rtModalBtn');

                            btnRt.addEventListener('click', function(e) {
                                sendMsgToParent($('#rtUpdates').html());
                            });

                            // 부모에게 메시지 전달
                            function sendMsgToParent(msg) {
                                window.parent.postMessage(msg, '*');
                            }


                            // Vars
                            var reloadButton = document.querySelector('.reload');
                            var reloadSvg = document.querySelector('svg');
                            var reloadEnabled = true;
                            var rotation = 0;
                            // Events
                            reloadButton.addEventListener('click', function() {
                                reloadClick()
                            });

                            // Functions
                            function reloadClick() {

                                reloadEnabled = false;
                                rotation -= 180;

                                // Eh, this works.
                                reloadSvg.style.webkitTransform = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';
                                reloadSvg.style.MozTransform = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';
                                reloadSvg.style.transform = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';

                            }

                            // Show button.
                            setTimeout(function() {
                                reloadButton.classList.add('active');
                            }, 1);
                        </script>




                        <div class="row">
                            <div class="col-md-6 col-lg-4">
                                <!-- CHART-->
                                <div class="statistic-chart-1" style="border-radius: 20px; box-shadow:  5px 5px 10px #c3c3c3, 
             -5px -5px 0px transparent;">
                                    <div class="chart-wrap">
                                        <h3>신규
                                            <h3 style="color:#a9a9a9;">확진자 추이<br><br></h3>
                                        </h3>
                                        <canvas id="widgetChart5"></canvas>
                                    </div>
                                    <div class="statistic-chart-1-note">
                                        <span>어제 신규확진수보다</span>
                                        <span class="big">84명</span>
                                        <span>적어요.</span>
                                        <br>
                                        <span>전국 주평균 확진자 </span>
                                        <span class="big">466명</span>
                                        <span style="color:#a9a9a9; font-size:11px;"><br>(최근 7일간 국내 발생 환자 평균)</span>
                                        <br><br>
                                        <h3 style="color:#a9a9a9; font-size:15px;">신규 환자 중
                                            <h3 style="color:#4272d7; font-size:20px;" id="localConfirmed"></h3>
                                        </h3>

                                        <!-- (429+590+590+533+414+391+313)/7 -->



                                    </div>
                                </div>
                                <!-- END CHART-->
                            </div>

                            <div class="col-lg-6">
                                <div class="au-card m-b-30" style="border-radius: 20px; box-shadow:  5px 5px 10px #c3c3c3, 
             -5px -5px 0px transparent;">
                                    <div class="au-card-inner">
                                        <h3>국내 일별 현황</h3><br>
                                        <canvas id="barChart"></canvas>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="au-card m-b-30" style="border-radius: 20px; box-shadow:  5px 5px 10px #c3c3c3, 
             -5px -5px 0px transparent;">
                                    <div class="au-card-inner">
                                        <h3>위중증 환자 <span style="color:#a9a9a9;">추이</span></h3><br>
                                        <canvas id="barChart_seriousCases"></canvas>

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="au-card m-b-30" style="border-radius: 20px; box-shadow:  5px 5px 10px #c3c3c3, 
             -5px -5px 0px transparent;">
                                    <div class="recent-report__chart">
                                        <h3>국내
                                            <h3 style="color:#a9a9a9;">검사 현황<br>
                                                <br>
                                                <div class="container">
                                                    <div class="tab-slider--nav">
                                                        <ul class="tab-slider--tabs">
                                                            <li class="tab-slider--trigger active" rel="tab1">검사수</li>
                                                            <li class="tab-slider--trigger" rel="tab2">확진율</li>
                                                        </ul>
                                                    </div>
                                                    <div class="tab-slider--container">
                                                        <div id="tab1" class="tab-slider--body">
                                                            <canvas id="recent-rep2-chart"></canvas>

                                                        </div>
                                                        <div id="tab2" class="tab-slider--body">
                                                            <div id="tests-percent">
                                                                <canvas id="tests-percent-chart"></canvas>
                                                                <h3 style="color:#a9a9a9; font-size:15px;">(확진율) = (확진자수)/(검사자수)*100</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </h3>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div class="row">


                            <div class="col-lg-6">
                                <div class="au-card m-b-30" style="border-radius: 20px; box-shadow:  5px 5px 10px #c3c3c3, 
             -5px -5px 0px transparent;">
                                    <div class="recent-report__chart">
                                        <h3>연령별
                                            <h3 style="color:#a9a9a9;">현황<br>
                                                <br>
                                                <div class="container">
                                                    <div class="tab-slider--nav2">
                                                        <ul class="tab-slider--tabs2">
                                                            <li class="tab-slider--trigger2 active" rel="tab3">확진자</li>
                                                            <li class="tab-slider--trigger2" rel="tab4">사망자</li>
                                                        </ul>
                                                    </div>
                                                    <div class="tab-slider--container2">
                                                        <div id="tab3" class="tab-slider--body2">
                                                            <canvas id="singelBarChart_case" style="width:100%; height:250px;"></canvas>
                                                        </div>

                                                        <div id="tab4" class="tab-slider--body2">
                                                            <canvas id="singelBarChart_death" style="width:100%; height:250px;"></canvas>

                                                        </div>
                                                    </div>
                                                </div>
                                            </h3>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                                <!-- CHART PERCENT-->
                                <div class="chart-percent-2" style="border-radius: 20px; box-shadow:  5px 5px 10px #c3c3c3, 
             -5px -5px 0px transparent;">
                                    <div class="chart-wrap">
                                        <h3>성별
                                            <h3 style="color:#a9a9a9;">확진자 현황</h3>
                                        </h3><br>
                                        <canvas id="doughutChart_sex" style="width:100%; height:250px;"></canvas>
                                        <table></table>
                                    </div>
                                </div>
                            </div>


                            <style>
                                /* 표 레이아웃 수정*/
                                
                                table {
                                    border-collapse: collapse;
                                    border-spacing: 0;
                                }
                                
                                table.midsize th {
                                    padding: 4px 1px;
                                    font-size: 12px;
                                    line-height: 1.1em;
                                    word-break: break-all;
                                    border: solid 1px #a9a9a9;
                                }
                                
                                table.midsize td {
                                    font-size: 12px;
                                    line-height: 1.1em;
                                    border: solid 1px #a9a9a9;
                                }
                            </style>


                        </div>


                        <div class="col-lg-9">
                            <h3>지역별 <span style="color:#a0a0a0;">현황<span style="font-size:15px;"> (명)<br><span style="font-size:15px;">좌우로 드래그할 수 있어요.</span></span>
                                </span>
                            </h3><br>

                            <div class="table-responsive table--no-card m-b-40" style="margin-left:-15px; width:110%; border-radius: 20px; box-shadow: 5px 5px 10px #c3c3c3, 
             -5px -5px 0px transparent;">
                                <table class="table table-borderless table-striped table-earning" style="width:110%;">
                                    <thead>
                                        <tr>
                                            <th>지역</th>
                                            <th>누적 확진자</th>
                                            <th>격리해제자</th>
                                            <th>사망자</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onClick="javascript:window.open('http://www.seoul.go.kr/coronaV/coronaStatus.do');">
                                            <td>서울</td>
                                            <td id="seoulCases">-</td>
                                            <td id="seoulCure">-</td>
                                            <td id="seoulDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('http://www.busan.go.kr/corona19/index');">
                                            <td>부산</td>
                                            <td id="busanCases">-</td>
                                            <td id="busanCure">-</td>
                                            <td id="busanDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('http://www.daegu.go.kr/');">
                                            <td>대구</td>
                                            <td id="daeguCases">-</td>
                                            <td id="daeguCure">-</td>
                                            <td id="daeguDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('https://www.incheon.go.kr/corona19/IC010001');">
                                            <td>인천</td>
                                            <td id="incheonCases">-</td>
                                            <td id="incheonCure">-</td>
                                            <td id="incheonDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('https://www.gwangju.go.kr/');">
                                            <td>광주</td>
                                            <td id="gwangjuCases">-</td>
                                            <td id="gwangjuCure">-</td>
                                            <td id="gwangjuDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('https://www.daejeon.go.kr/corona19/index.do');">
                                            <td>대전</td>
                                            <td id="daejeonCases">-</td>
                                            <td id="daejeonCure">-</td>
                                            <td id="daejeonDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('http://www.ulsan.go.kr/corona.jsp');">
                                            <td>울산</td>
                                            <td id="ulsanCases">-</td>
                                            <td id="ulsanCure">-</td>
                                            <td id="ulsanDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('https://www.sejong.go.kr/life/sub05_0704.do');">
                                            <td>세종</td>
                                            <td id="sejongCases">-</td>
                                            <td id="sejongCure">-</td>
                                            <td id="sejongDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('https://www.gg.go.kr/bbs/boardView.do?bsIdx=464&bIdx=2296956&menuId=1535');">
                                            <td>경기</td>
                                            <td id="ggCases">-</td>
                                            <td id="ggCure">-</td>
                                            <td id="ggDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('http://www.provin.gangwon.kr/covid-19.html');">
                                            <td>강원</td>
                                            <td id="gangwonCases">-</td>
                                            <td id="gangwonCure">-</td>
                                            <td id="gangwonDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('http://www.chungbuk.go.kr/www/covid-19/index.html');">
                                            <td>충북</td>
                                            <td id="cbCases">-</td>
                                            <td id="cbCure">-</td>
                                            <td id="cbDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('http://www.chungnam.go.kr/coronaStatus.do');">
                                            <td>충남</td>
                                            <td id="cnCases">-</td>
                                            <td id="cnCure">-</td>
                                            <td id="cnDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('http://www.jeonbuk.go.kr/board/list.jeonbuk?boardId=BBS_0000105&menuCd=DOM_000000105010004000&contentsSid=1189&cpath=');">
                                            <td>전북</td>
                                            <td id="jbCases">-</td>
                                            <td id="jbCure">-</td>
                                            <td id="jbDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('https://www.jeonnam.go.kr/coronaMainPage.do');">
                                            <td>전남</td>
                                            <td id="jnCases">-</td>
                                            <td id="jnCure">-</td>
                                            <td id="jnDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('http://www.gb.go.kr/Main/open_contents/section/wel/page.do?mnu_uid=5760&LARGE_CODE=360&MEDIUM_CODE=10&SMALL_CODE=50&SMALL_CODE2=60mnu_order=2');">
                                            <td>경북</td>
                                            <td id="gbCases">-</td>
                                            <td id="gbCure">-</td>
                                            <td id="gbDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('http://www.gyeongnam.go.kr/corona.html');">
                                            <td>경남</td>
                                            <td id="gnCases">-</td>
                                            <td id="gnCure">-</td>
                                            <td id="gnDeath">-</td>
                                        </tr>
                                        <tr onClick="javascript:window.open('https://jeju.go.kr/covid19.jsp');">
                                            <td>제주</td>
                                            <td id="jejuCases">-</td>
                                            <td id="jejuCure">-</td>
                                            <td id="jejuDeath">-</td>
                                        </tr>
                                        <tr>
                                            <td>검역</td>
                                            <td id="gumCases">-</td>
                                            <td id="gumCure">-</td>
                                            <td id="gumDeath">-</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </table>
                            </div>
                        </div>

                        <span style="color:#a9a9a9; font-size:13px; margin-bottom:15px;">확진율</span>

                        <div class="progress">
                            <div class="progress-done case" id="casePercent" data-done="0">
                                0%
                            </div>
                        </div>

                        <span style="color:#a9a9a9; font-size:13px; margin-bottom:15px;">완치율</span>
                        <div class="progress">
                            <div class="progress-done2 cure" id="curePercent" data-done="0">
                                0%
                            </div>
                        </div>
                        <span style="color:#a9a9a9; font-size:13px; margin-bottom:15px;">사망률</span>
                        <div class="progress">
                            <div class="progress-done3 death" id="deathPercent" data-done="0">
                                0%
                            </div>
                        </div>





                        <!-- STATISTIC-->

                        <section class="statistic statistic2" id="globalStatics" style="margin:-15px;">
                            <div class="container">
                                <h3 style="margin-left:5px;">전세계 현황</h3><br>
                                <div class="row" id="global">
                                    <div class="col-md-6 col-lg-3">
                                        <div class="statistic__item statistic__item--red" style="border-radius: 20px;
background: #fa4251;
box-shadow:  5px 5px 10px #d53845, 
             -5px -5px 0px transparent;text-align: left;">
                                            <h2 class="number" id="globeConfirmed">로딩중</h2>
                                            <span class="desc" id="globeConfirmedPM">확진자</span>
                                            <div class="icon">
                                                <i class="zmdi zmdi-account-o"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3">
                                        <div class="statistic__item statistic__item--green" style="border-radius: 20px;
background: #00ad5f;
box-shadow:  5px 5px 10px #009351, 
             -5px -5px 0px transparent;text-align: left;">
                                            <h2 class="number" id="globeCure">로딩중</h2>
                                            <span class="desc" id="globeCurePM">격리해제자</span>
                                            <div class="icon">
                                                <i class="zmdi zmdi-check-all"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3">
                                        <div class="statistic__item statistic__item--black" style="border-radius: 20px;
background: #0f0f0f;
box-shadow:  5px 5px 10px #0d0d0d, 
             -5px -5px 0px transparent;text-align: left;">
                                            <h2 class="number" id="globeDeath">로딩중</h2>
                                            <span class="desc" id="globeDeathPM">사망자</span>
                                            <div class="icon">
                                                <i class="zmdi zmdi-accounts-outline"></i>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <a class="ripple-effect" href="https://app.developer.here.com/coronavirus/" target="_blank" style=" text-align:right; margin-top:-25px; margin-bottom: 25px;"><br>지도로 보는 전세계 현황 ></a>

                                <br>


                                <!--
                                <h3>최신 뉴스</h3><br>-->

                                <div class="newsfeed">

                                </div>
                                <style>
                                    .newsfeed_item {
                                        background-color: #fff;
                                        box-shadow: 5px 5px 10px #c3c3c3, -5px -5px 0px transparent;
                                        width: 100%;
                                        border-radius: 20px;
                                        padding: 20px;
                                        margin-bottom: 20px;
                                    }
                                    
                                    .newsfeed_item:hover {
                                        background-color: #f0f0f0;
                                    }
                                    
                                    .newsfeed .description {
                                        text-overflow: ellipsis;
                                        -webkit-line-clamp: 3;
                                        /* 라인수 */
                                        -webkit-box-orient: vertical;
                                        word-wrap: break-word;
                                    }
                                </style>

                                <br>

                                <!-- Go to www.addthis.com/dashboard to customize your tools 
                        <div class="addthis_inline_share_toolbox" style="text-align:center;"></div>-->


                                <div class="copyright" style="font-size:13px;">
                                    <p>Copyright ©2020 All rights reserved. <br> 정보 제공 : <a href="https://api.corona-19.kr/" target="_blank">굿바이코로나</a>, <a href="http://www.cdc.go.kr/" target="_blank">질병관리청</a>, <a href="https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15043377"
                                            target="_blank">보건복지부</a>, <a href="https://www.worldometers.info/coronavirus/" target="_blank">worldmeters</a>, <a href="https://corona-live.com/" target="_blank">코로나 라이브</a>, <a href="https://newsapi.org" target="_blank">newsapi</a><br>                                        사용 폰트 : <a href="https://noonnu.cc/font_page/419" target="_blank">교보손글씨</a>, <a href="https://fontawesome.com/" target="_blank">Font Awesome</a><br> 기술 제공 : 음성합성(<a href="http://prosody-tts.com/" target="_blank">프로소디</a>)<br>
                                        <a href="http://channel.io/" target="_blank">채널톡</a>, <a href="https://herokuapp.com/" target="_blank">Heroku</a>, <a href="https://github.com/" target="_blank">Github</a>, <a href="https://www.dothome.co.kr/index.php"
                                            target="_blank">DOTHOME</a>과 함께 코로나콕은 원활한 서비스를 제공중입니다.

                                    </p>
                                </div>



                            </div>
                    </div>

                    <div class="routes_tab_wrap" style="display:none;">
                        <select id="regionFirst-select" onchange="updateOptions();" style="margin-right:10px;">
                                    <option value="hide" disabeld selected>광역시/도</option>
                                    <option value="서울">서울</option>
                                    <option value="부산">부산</option>
                                    <option value="대구">대구</option>
                                    <option value="인천">인천</option>
                                    <option value="광주">광주</option>
                                    <option value="울산">울산</option>
                                    <option value="세종">세종</option>
                                    <option value="경기">경기</option>
                                    <option value="강원">강원</option>
                                    <option value="충북">충북</option>
                                    <option value="충남">충남</option>
                                    <option value="전북">전북</option>
                                    <option value="전남">전남</option>
                                    <option value="경북">경북</option>
                                    <option value="경남">경남</option>
                                    <option value="제주">제주</option>
                                    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="seoul" style="display:none;">
        <option value="hide" disabled selected>시/군/구</option>
        <option value="광진구">광진구</option>
        <option value="성동구">성동구</option>
        <option value="동대문구">동대문구</option>
        <option value="영등포구">영등포구</option>
        <option value="종로구">종로구</option>
        <option value="관악구">관악구</option>
        <option value="강남구">강남구</option>
        <option value="금천구">금천구</option>
        <option value="강북구">강북구</option>
        <option value="노원구">노원구</option>
        <option value="성북구">성북구</option>
        <option value="도봉구">도봉구</option>
        <option value="강동구">강동구</option>
        <option value="송파구">송파구</option>
        <option value="용산구">용산구</option>
        <option value="중랑구">중랑구</option>
        <option value="서초구">서초구</option>
        <option value="중구">중구</option>
        <option value="마포구">마포구</option>
        <option value="강서구">강서구</option>
        <option value="양천구">양천구</option>
        <option value="동작구">동작구</option>

    </select>
                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="busan" style="display:none;">
        <option value="hide" disabled selected>시/군/구</option>
        <option value="사하구">사하구</option>
        <option value="동래구">동래구</option>
        <option value="사상구">사상구</option>
        <option value="동구">동구</option>
        <option value="해운대구">해운대구</option>
        <option value="수영구">수영구</option>
        <option value="서구">서구</option>
        <option value="남구">남구</option>
        <option value="부산진구">부산진구</option>
        <option value="중구">중구</option>
        <option value="연제구">연제구</option>

    </select>
                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="daegu" style="display:none;">
        <option value="hide" disabled selected>시/군/구</option>
        <option value="달성군">달성군</option>
        <option value="북구">북구</option>
        <option value="남구">남구</option>
        <option value="중구">중구</option>
        <option value="동구">동구</option>
        <option value="수성구">수성구</option>
    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="daejeon" style="display:none;">
        <option value="hide" disabled selected>시/군/구</option>
        <option value="서구">서구</option>
        <option value="중구">중구</option>
        <option value="동구">동구</option>
        <option value="유성구">유성구</option>
        <option value="대덕구">대덕구</option>
    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="incheon" style="display:none;">
        <option value="hide" disabled selected>시/군/구</option>
        <option value="남동구">남동구</option>
        <option value="계양구">계양구</option>
    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="gwangju" style="display:none;">
        <option value="hide" disabled selected>시/군/구</option>
        <option value="북구">북구</option>
        <option value="서구">서구</option>
        <option value="광산구">광산구</option>
        <option value="남구">남구</option>
        <option value="동구">동구</option>
    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="ulsan" style="display:none;">
        <option value="hide" disabled selected>시/군/구</option>
        <option value="중구">중구</option>
        <option value="북구">북구</option>
    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="sejong" style="display:none;">
        <option value="hide" disabled selected>시/군/구</option>
        <option value="아름동">아름동</option>
        <option value="나성동">나성동</option>
        <option value="어진동">어진동</option>
        <option value="종촌동">종촌동</option>
        <option value="대평동">대평동</option>
        <option value="보람동">보람동</option>
        <option value="부강면">부강면</option>
        <option value="도담동">도담동</option>
    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="gyeonggi" style="display:none;">
        <option value="hide" disabled selected>시/군/구</option>
        <option value="남양주시">남양주시</option>
        <option value="수원시">수원시</option>
        <option value="시흥시">시흥시</option>
        <option value="구리시">구리시</option>
        <option value="고양시">고양시</option>
        <option value="김포시">김포시</option>
        <option value="안산시">안산시</option>
        <option value="성남시">성남시</option>
        <option value="오산시">오산시</option>
        <option value="파주시">파주시</option>
        <option value="양평군">양평군</option>
        <option value="부천시">부천시</option>
        <option value="여주시">여주시</option>
        <option value="광명시">광명시</option>
        <option value="화성시">화성시</option>
        <option value="용인시">용인시</option>
        <option value="안양시">안양시</option>
    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="gangwon" style=" display:none; ">
        <option value="hide ">시/군/구</option>
        <option value="춘천시">춘천시</option>
        <option value="평창군">평창군</option>
        <option value="홍천군">홍천군</option>
        <option value="원주시">원주시</option>
        <option value="동해시">동해시</option>
        <option value="횡성군">횡성군</option>
        <option value="강릉시">강릉시</option>
    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="jeonbuk" style=" display:none; ">
        <option value="hide ">시/군/구</option>
        <option value="">선택할 지역이 없어요(이 옵션을 눌러주세요)</option>
    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="jeonnam" style=" display:none; ">
        <option value="hide ">시/군/구</option>
        <option value="">선택할 지역이 없어요(이 옵션을 눌러주세요)</option>
    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="chungbuk" style=" display:none; ">
        <option value="hide ">시/군/구</option>
        <option value="춘천시 ">괴산군</option>
    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="chungnam" style=" display:none; ">
        <option value="hide ">시/군/구</option>
        <option value="금산군">금산군</option>
        <option value="천안시">천안시</option>
        <option value="논산시">논산시</option>
        <option value="서산시">서산시</option>
        <option value="예산군">예산군</option>
        <option value="태안군">태안군</option>
        <option value="당진시">당진시</option>
        <option value="보령시">보령시</option>
        <option value="아산시">아산시</option>
    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="gyeongbuk" style=" display:none; ">
        <option value="hide ">시/군/구</option>
        <option value="구미시">구미시</option>
        <option value="포항시">포항시</option>
        <option value="경산시">경산시</option>
        <option value="영주시">영주시</option>
        <option value="안동시">안동시</option>
        <option value="경주시">경주시</option>
        <option value="청송군">청송군</option>
        <option value="김천시">김천시</option>
        <option value="영천시">영천시</option>
        <option value="의성군">의성군</option>
        <option value="고령군">고령군</option>
        <option value="성주군">성주군</option>
    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="gyeongnam" style=" display:none; ">
        <option value="hide ">시/군/구</option>
        <option value="밀양시">밀양시</option>
        <option value="창원시">창원시</option>
        <option value="거제시">거제시</option>
        <option value="사천시">사천시</option>
        <option value="합천군">합천군</option>
        <option value="창녕군">창녕군</option>
        <option value="김해시">김해시</option>
        <option value="진주시">진주시</option>
        <option value="하동군">하동군</option>
    </select>

                        <select id="regionSecond-select" onchange="javascript:completeRegionSelect(this.options[this.selectedIndex].value);" class="jeju" style=" display:none; ">
        <option value="hide ">시/군/구</option>
        <option value="서귀포시">서귀포시</option>
        <option value="제주시">제주시</option>
    </select>
                        <br><br>
                        <span style="color:#a9a9a9; font-size:15px;margin-left:10px; text-align:left;">최근 14일 동안의 확진자 방문 장소를 제공합니다.<br>리스트 목록을 누르면 지도에서 확인할 수 있습니다.</span><br>
                        <br><br>
                        <div class='routes_container'>
                            <!--여기에 장소 리스트-->
                            <img src="https://uploads-ssl.webflow.com/5e3ce2ec7f6e53c045fe7cfa/5e422c57403b1e23a48a27b9_time-managment-p-800.png" style="width:100%;"><br> <span style="position:relative;left:30%;">지역을 선택해주세요</span>
                        </div>
                        <br>
                        <br>
                        <div class="copyright" style="font-size:13px;">
                            <p>Copyright ©2020 All rights reserved. <br>데이터 참고 : <a href="https://coronamap.site" target="_blank">코로나맵</a>


                            </p>
                        </div>
                        <style>
                            .routes_container {
                                width: 100%;
                                justify-content: center;
                                align-items: center;
                            }
                            
                            .box {
                                flex-direction: column;
                                width: 100%;
                                height: auto;
                                padding: 20px;
                                margin-bottom: 20px;
                                background: #f1f3f6;
                                border-radius: 20px;
                                box-shadow: inset 0 0 15px rgba(55, 84, 170, 0), inset 0 0 20px rgba(255, 255, 255, 0), 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px white, inset 0px 0px 4px rgba(255, 255, 255, 0.2);
                            }
                        </style>


                    </div>



                    </section>


                </div>

                </div>




                <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.3/vue.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.3.4/vue-resource.js"></script>
                <!-- Jquery JS-->
                <script src="vendor/jquery-3.2.1.min.js"></script>
                <!-- Bootstrap JS-->
                <script src="vendor/bootstrap-4.1/popper.min.js"></script>
                <script src="vendor/bootstrap-4.1/bootstrap.min.js"></script>
                <!-- Vendor JS-->
                <script src="vendor/slick/slick.min.js">
                </script>
                <script src="vendor/wow/wow.min.js"></script>
                <script src="vendor/animsition/animsition.min.js"></script>
                <script src="vendor/bootstrap-progressbar/bootstrap-progressbar.min.js">
                </script>
                <script src="vendor/counter-up/jquery.waypoints.min.js"></script>
                <script src="vendor/counter-up/jquery.counterup.min.js">
                </script>
                <script src="vendor/circle-progress/circle-progress.min.js"></script>
                <script src="vendor/perfect-scrollbar/perfect-scrollbar.js"></script>
                <script src="vendor/chartjs/Chart.bundle.min.js"></script>
                <script src="vendor/select2/select2.min.js">
                </script>

                <!-- Main JS-->
                <script src="js/main.js"></script>
                <script src="js/custom.js"></script>
                <script src="js/autoupdate.js"></script>
                <!-- 트래픽 과부화 방지를 위해 작업 시에는 autoUpdate 파일 비활성화 하고 사용해주세요 
   
 -->

</body>

</html>
<!-- end document-->
