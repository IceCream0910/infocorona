
//If you fork this, please change this database link to your own.
var fb = new Firebase("https://coronacocchat.firebaseio.com/");
var messages = fb.child("messages");
var btn = $('button');
var wrap = $('.wrapper');
var input = $('textarea.message');
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


messages.limitToLast(100).on("child_added", function(snap) {
	if($.sanitize(snap.val().user) == 'admin') {
		wrap.prepend('<li><div style="background-color:#fa4251; border-radius:10px; width:50px; font-size:14px; padding: 2px 4px; margin-bottom:5px;"><span style="color:white;">개발자</div></span> ' + $.sanitize(snap.val().message) + '</li>');
	} else {
		wrap.prepend('<li><span><i class="fa fa-quote-right" aria-hidden="true" style="margin-right:5px;"></i></span> ' + $.sanitize(snap.val().message) + '</li>');
	}
	//아래부터 스택할 때 필요하지만 위로 스택하므로 불필요
	//window.scrollTo(0,document.body.scrollHeight);
});
