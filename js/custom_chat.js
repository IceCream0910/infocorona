
//If you fork this, please change this database link to your own.
var fb = new Firebase("https://coronacocchat.firebaseio.com/");
var messages = fb.child("messages");
var messages_spring = fb.child("messages_spring");
var btn = $('button');
var wrap = $('.wrapper');
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

function sendBtn() {

  var result = ValidateCaptcha();
  if( $("#UserCaptchaCode").val() == "" || $("#UserCaptchaCode").val() == null || $("#UserCaptchaCode").val() == "undefined") {
    $('#WrongCaptchaError').text('아래에 표시된 자동 입력 방지 문자를 입력하세요.').show();
    $('#UserCaptchaCode').focus();
  } else {
    if(result == false) { 
      $('#WrongCaptchaError').text('자동입력방지 문자가 올바르지 않습니다.').show();
      CreateCaptcha();
      $('#UserCaptchaCode').focus().select();
    }
    else { 
      $('#UserCaptchaCode').val('').attr('place-holder','Enter Captcha - Case Sensitive');
      CreateCaptcha();
      $('#WrongCaptchaError').fadeOut(100);
      $('#SuccessMessage').fadeIn(500).css('display','block').delay(5000).fadeOut(250);
      var curUsername = user.join();
	if (input.val().length > 0) {
		var getTxt = input.val();
		messages.push({
			user: curUsername,
			message: getTxt
		});
		input.val('');
	}
    }
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


messages.limitToLast(500).on("child_added", function(snap) {
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
  $('.counter').html(counter+"개");
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
  
})
