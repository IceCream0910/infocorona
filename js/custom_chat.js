
//If you fork this, please change this database link to your own.
var fb = new Firebase("https://coronacocchat.firebaseio.com/");
var messages = fb.child("messages");
var messages_spring = fb.child("messages_spring");
var btn = $('button');
var wrap = $('.wrapper-chat');
var wrapSpring = $('.wrapper_spring');
var input = $('textarea.message');
var inputSpring = $('textarea.messageSpring');
var usernameInput = $('input.username');
var user = [];

(function($) {
	$.sanitize = function(input) {
		var output = input.replace(/<script[^>]*?>.*?<\/script>/gi, '').
					 replace(/<[\/\!]*?[^<>]*?>/gi, '').
					 replace(/<style[^>]*?>.*?<\/style>/gi, '').
					 replace(/<![\s\S]*?--[ \t\n\r]*>/gi, '');
	    return output;
	};
})(jQuery);


usernameInput.on('keyup', function(e) {
	if (e.keyCode === 13 && usernameInput.val().length > 0) {
		var getTxt = usernameInput.val();
		user.push(getTxt);
		usernameInput.val('');
		$('.initModal').css('display', 'none');
		console.log(user);
	}
});

 
/* 엔터키 전송은 오타 가능성 있어 일단 뺌. 
input.on('keyup', function(e) {
	var curUsername = user.join();
	if (e.keyCode === 13 && input.val().length > 0) {
		var getTxt = input.val();
		messages.push({
			user: curUsername,
			message: getTxt
		});
		input.val('');
	}
});
*/

var UploadCnt = 0;
function sendBtn() {
  //업로드
    		UploadCnt++;
      var curUsername = ip();
	if (input.val().length > 0) {
		var getTxt = input.val();
		messages.push({
			user: curUsername,
			message: getTxt
		});
		input.val('');
	}
    	}

function sendBtnSpring() {
	var curUsername = user.join();
	if (inputSpring.val().length > 0) {
		var getTxt = inputSpring.val();
		messages_spring.push({
			user: curUsername,
			message: getTxt
		});
		inputSpring.val('');
	}
}


messages.limitToLast(1000).on("child_added", function(snap) {
	if($.sanitize(snap.val().user) == 'admin') {
		wrap.prepend('<li><div style="background-color:#fa4251; border-radius:10px; width:50px; font-size:14px; padding: 2px 4px; margin-bottom:5px;"><span style="color:white;">개발자</div></span> ' + $.sanitize(snap.val().message) + '</li>');
	} else {
		wrap.prepend('<li><span><i class="fa fa-quote-right" aria-hidden="true" style="margin-right:5px;"></i></span> ' + $.sanitize(snap.val().message) + '</li>');
	}
	//아래부터 스택할 때 필요하지만 위로 스택하므로 불필요
	//window.scrollTo(0,document.body.scrollHeight);
});

var flowerIcon = "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v816-ning-03.png?auto=&bg=transparent&con=3&cs=srgb&dpr=1&fm=png&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1400&s=3411567a38b1b5fc781e0e842dc48a5c";
messages_spring.limitToLast(100).on("child_added", function(snap) {
	if($.sanitize(snap.val().user) == 'admin') {

		wrapSpring.prepend('<li><div style="background-color:#fa4251; border-radius:10px; width:50px; font-size:14px; padding: 2px 4px; margin-bottom:5px;"><span style="color:white;">개발자</div></span> ' + $.sanitize(snap.val().message) + '</li>');
	} else {
		wrapSpring.prepend('<li><span>🌸 </span>' + $.sanitize(snap.val().message) + '</li>');
	}
	//아래부터 스택할 때 필요하지만 위로 스택하므로 불필요
	//window.scrollTo(0,document.body.scrollHeight);
});



var config = {
  apiKey: "AIzaSyBuCapEMeGtlo9QhJlXlPYTsvHIhd6nQwg",
  authDomain: "coronacocheart.firebaseapp.com",
  databaseURL: "https://coronacocheart.firebaseio.com",
  projectId: "coronacocheart",
  storageBucket: "coronacocheart.appspot.com",
  messagingSenderId: "185995198724"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

var counter = 150;
var initialValue = 150;

database.ref('counter').on('value', function(snapshot) {
  if (snapshot.val() && snapshot.val().clickCounter) {
    counter = snapshot.val().clickCounter;
  }
  
  renderCounter();
}, function(errorObject) {
  // In case of error this will print the error
  console.log("오류 : " + errorObject.code);
});


if (!counter) {
  counter = initialValue;
} else {
  counter = parseInt(counter);
}

function renderCounter() {
  $('.counter').html(counter);
} 

$('.decrease').on('click', function() {
	var currentTxt= $('.counter').html();
	if(currentTxt != "로딩중") {
		counter++;

  if (counter === 0) {
    counter = initialValue;
  }
  
  database.ref('counter').set({
    clickCounter: counter
  })
  renderCounter();
	}
  
});

var timeCnt =0;
var timer = setInterval(function(){
       timeCnt++;
       if(timeCnt < 30) {
       	if(UploadCnt >= 3) {
       	alert('도배 방지를 위해 30초 이내에 글 3개 이상을 작성하실 수 없습니다.');
       	timeCnt =0;
       	UploadCnt=0;
       }
       } else {
       	timeCnt =0;
       	UploadCnt=0;
       }
       
    }, 1000)


$('#right-button').click(function() {
  event.preventDefault();
  var current = $('#online-performance').scrollLeft();
  if(current < 1364) {
  	$('#online-performance').animate({
    scrollLeft: "+=200px"
  }, "slow");
  }
});

 $('#left-button').click(function() {
  event.preventDefault();
  var current = $('#online-performance').scrollLeft();
  if(current >= 0) {
  	$('#online-performance').animate({
    scrollLeft: "-=200px"
  }, "slow");
  }
});


// 온라인 공연/전시 크롤링

var e = new Array("https://cors-coronacoc.herokuapp.com/", "https://cors-coronacoc-v2.herokuapp.com/", "https://cors-coronacoc-v3.herokuapp.com/");
    var proxyServer = randomItem(e);
function randomItem(e) {
    return e[Math.floor(Math.random() * e.length)]
}

new Vue({
    el: "#scraper",
    data: () => ({
        scraperRunning: !1,
        url: "",
        response: null
    }),
    methods: {
        runScraper: function() {
            this.scraperRunning = !0, this.url.includes("http"), this.url = "https://cors-anywhere.herokuapp.com/"+"https://www.culture.go.kr/homes/showList.do?sSdate=&sEdate=&genre=&gubun=&searchKeyword=", this.$http.get(this.url).then(e => {
                this.scraperRunning = !1;
                for(var i=0; i<10; i++) {
                	var title = e.body.showList[i].title
                	var img = 'https://www.culture.go.kr/'+e.body.showList[i].img_file;
                	var href= 'https://www.culture.go.kr/homes/showView.do?seq='+e.body.showList[i].seq;
                	console.log(title);
                	$('#online-performance').append('<div class="grid__item" style="display:inline-block;" onclick="window.open(\''+href+'\');"><div class="card"><img class="card__img" src="'+img+'" alt="Snowy Mountains"><div class="card__content"><h1 class="card__header">'+title+'</h1> </div></div></div>');

                }
                
                /*
                var r = (n = e.body).indexOf("<h1>Coronavirus Cases:</h1>"),
                    a = n.substr(r, 123).replace("<h1>Coronavirus Cases:</h1>", "").replace(/(\s*)/g, "").replace(/\"/gi, "").replace("divclass=maincounter-number", "").replace("<", "").replace(">", "");
                document.getElementById("globeConfirmed").innerHTML = a + "<span>명</span>";
                */
            })
        },
    },
    beforeMount() {
        this.runScraper()
    }
});
