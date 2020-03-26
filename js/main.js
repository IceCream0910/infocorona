<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="코로나19 국내 발생현황 및 관련정보를 한눈에 알아보세요!">
    <meta name="author" content="Justcode">
    <meta name="keywords" content="코로나19">

    <!-- Title Page-->
    <title>#힘내라_대한민국 - 코로나콕</title>


    <!-- Fontfaces CSS-->
    <link href="css/font-face.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-5/css/fontawesome-all.min.css" rel="stylesheet" media="all">
    <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">

    <!-- Bootstrap CSS-->
    <link href="vendor/bootstrap-4.1/bootstrap.min.css" rel="stylesheet" media="all">

    <!-- Vendor CSS-->
    <link href="vendor/animsition/animsition.min.css" rel="stylesheet" media="all">
    <link href="vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet" media="all">
    <link href="vendor/wow/animate.css" rel="stylesheet" media="all">
    <link href="vendor/css-hamburgers/hamburgers.min.css" rel="stylesheet" media="all">
    <link href="vendor/slick/slick.css" rel="stylesheet" media="all">
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all">
    <link href="vendor/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" media="all">


    <!-- Main CSS-->
    <link href="css/theme.css" rel="stylesheet" media="all">
    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:700|Noto+Sans+KR&display=swap" rel="stylesheet">


</head>

<body class="animsition">
    <div class="page-wrapper">
        <!-- PAGE CONTENT-->
        <div class="page-content--bgf7">

            <!-- WELCOME-->
            <section class="welcome p-t-10" style="margin-bottom: -20px;">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12" style="margin-top:30px; margin-left:10px;">
                            <h1 style="font-size:25px;">대한민국을<br>응원해주세요!
                            </h1><br>
                            <hr class="line-seprate">
                            <br>
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" >
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="index.html" role="tab" aria-controls="pills-home"
                                                 aria-selected="true">현황</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="info.html" role="tab" aria-controls="pills-profile"
                                                 aria-selected="false">정보</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="mask.html" role="tab" aria-controls="pills-contact"
                                                 aria-selected="false">마스크</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active" id="pills-contact-tab" data-toggle="pill" href="chat.html" role="tab" aria-controls="pills-contact"
                                                 aria-selected="false">게시판</a>
                                            </li>
                                        </ul>
                        
                        </div>
                    </div>
                </div>
            </section>
            <!-- END WELCOME-->




<!--여기부터 chat box-->

<section class="statistic statistic2" >
                <div class="container" style="margin-top:-70px;">
                    <div class="dap_ins">

                         <!---->
                        <div style="white-space: nowrap; width:100%; height:40px;">
                        <button class="decrease" style="display:inline-block;">
                        <img src="https://purepng.com/public/uploads/large/heart-icon-jst.png" style="margin-top:0px; width:40px; height:40px; margin-right:5px;"> 
                        </button>
<h5 class="counter" style="display:inline-block;">로딩중</h5>
</div>
<!---->

            <div style="margin-top:0px; ">
<br>
                <textarea name="content" class="message" type="text" id="re_content" placeholder="글 남기기"></textarea>
                <button onClick="javascript:sendBtn();" id="rep_bt" class="re_bt"><i class="fas fa-paper-plane"></i></button>
            </div>
    </div>

<div class="sufee-alert alert with-close alert-success alert-dismissible fade show" style="margin-right:10px;">
<span class="badge badge-pill badge-success">업데이트 내역</span>
<button type="button" data-toggle="modal" style="color:black;" data-target="#smallmodal2">03-26 업데이트 내역 확인</button>
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>

    <div class="sufee-alert alert with-close alert-danger alert-dismissible fade show" style="margin-right:10px;">
<span class="badge badge-pill badge-danger">주의</span>
<button type="button" data-toggle="modal" style="color:black;" data-target="#smallmodal">이런 글</button>은 삭제될 수 있어요.
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>

<div class="wrapper">


</div>
</div>
</section>


<!-- 여기까지 chat box-->

            
            <section class="p-t-60 p-b-20">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="copyright">
                                <p>Copyright © 2020 All rights reserved. <br>DB 서버 제공 : <a href="https://firebase.com" target="_blank">Firebase</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <div class="modal fade" id="smallmodal" tabindex="-1" role="dialog" aria-labelledby="smallmodalLabel" aria-hidden="true">
<div class="modal-dialog modal-sm" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="smallmodalLabel">삭제 대상 글 판단 기준</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<p style="font-size:13px;">
    1. 폭력 및 범죄 행위<br>
    - 폭력 및 선동<br>
    - 위험인물 및 단체<br>
    - 범죄 조장 또는 공표<br>
    - 계획된 위해<br>
    - 규제 상품<br>
    - 사기 및 기만<br><br>
    2. 안전<br>
    - 자살 및 자해<br>
    - 성착취<br>
    - 따돌림 및 괴롭힘<br>
    - 인간 착취<br>
    - 사생활 보호권 위반<br><br>
    3. 불쾌감 조성<br>
    - 혐오 발언<br>
    - 폭력적이고 자극적 내용<br>
    - 성적 묘사<br>
    - 성매매 알선<br>
    - 잔인함과 배려의 결여<br><br>
    4. 무결성 및 진실성<br>
    - 스팸<br>
    - 사칭 <br>
    - 허위 뉴스<br>
    5. 이외에 운영자가 부적절하다고 판단하는 모든 글<br><br>
</p>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
</div>
</div>
</div>
</div>

<!-- 업데이트 내역--->
<div class="modal fade" id="smallmodal2" tabindex="-1" role="dialog" aria-labelledby="smallmodalLabel" aria-hidden="true">
<div class="modal-dialog modal-sm" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="smallmodalLabel">03-26 업데이트 사항</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<p style="font-size:13px;">
    1. 일별 확진/완치 추이 -> 일별 국내 현황으로 차트 변경<br>
    2. 국내 일별 검사 현황 차트 추가<br><br>
    * 일일 현황 업데이트는 업데이트 내역에 포함되지 않습니다.

</p>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
</div>
</div>
</div>
</div>



    <!-- Vue JS-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.3/vue.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.3.4/vue-resource.js"></script>
    <!-- Firebase-->
     <script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>
      <script src='https://www.gstatic.com/firebasejs/3.7.0/firebase.js'></script>
    <!-- Jquery JS-->
    <script src="vendor/jquery-3.2.1.min.js"></script>
    <!-- Bootstrap JS-->
    <script src="vendor/bootstrap-4.1/popper.min.js"></script>
    <script src="vendor/bootstrap-4.1/bootstrap.min.js"></script>
    <!-- Vendor JS       -->
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
    <script src="js/custom_chat.js"></script>

</body>
</html>
<!-- end document-->

<style>


    .dap_ins {
    margin-top:50px;
}
.re_bt {
    position: absolute;
    width:100px;
    height:56px;
    font-size:16px;
    margin-left: 10px; 
}
#foot_box {
    height: 50px; 
}

 li {
     opacity: 0;
     animation: fadeIn 0.4s ease-in-out forwards;
     list-style: none;
     font-family: FontAwesome;
     content: "\f00c";
}
 @keyframes fadeIn {
     100% {
         opacity: 1;
    }
}
 .wrapper {
     width: 100%;
     margin: 0 auto;
     padding-bottom: 70px;
     overflow-x: hidden;
     word-break: break-all;
}
 .wrapper li {
     padding: 10px 20px;
     color: #34495e;
     word-break: break-all;
}
 .wrapper li span {
     color: #e74c3c;
     font-weight: 700;
}
  .message {
     margin-bottom:30px;
     height:80px;
     width:75%;
     background-color: #c5c7c4;
     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
     padding: 10px 20px;
}
  .message:focus {
     outline: none;
}

.re_bt {
width:20%;
background:#fa4251;
color:white;
margin-left:0px;
height:80px;
}
 
</style>
