// JavaScript Document


$(document).ready(function(){
	calculateHomeSize();
	affix();

});

$(document).scroll(function() {
	affix();
});
function calculateHomeSize() {
	if (window.innerWidth <= 767) {
        $('#home').css('height', window.innerHeight);
    } else {
        $('#home').css('height', window.innerHeight - $('#nav-wrapper').height());
    }
	
}

function affix() {
	if ($(window).scrollTop() > $('#navbarAffix').position().top) {
        $('#navid').addClass('navbar-fixed-top');
    } else {
        $('#navid').removeClass('navbar-fixed-top');
    }	
}

$(window).resize(function() {
    var viewportWidth = $(window).width();
	calculateHomeSize();

		//$('#nav-wrapper').height($("#navid").height());
//$("#nav-wrapper").css({"min-height":$("#navid").height()+"px"});

});


$("#navid li").click(function(e) {
	e.preventDefault();
		var idName = "#" + $(this).attr('id').toLowerCase();
		if (idName == "#home" || idName == "#sponsors" || idName=="#apply"){
			$('html, body').animate({
				scrollTop: $(idName).offset().top -100
			}, 1000);
		}
		else {
			idName+="id";
			$('html, body').animate({
				scrollTop: $(idName).offset().top - .24*$(window).height()
			}, 1000);
			
		}
});


