$(document).ready(function(){
	resizeContainer();

});

$(window).resize(function() {
	resizeContainer();
});

$("#overlay").height()
$('#main').backstretch("./background2.jpg",{});
var scrollBottom = $(window).scrollTop() + $(window).height();

$("#mainMenu li:last-child").click(function(e) {
	e.preventDefault();

$('html, body').animate({
        scrollTop: $('#team').offset().top - 100
}, 1000);

});

firstTime = true;
function sweepUp() {
	  if (!firstTime){
	  	  $('#headerCycle').removeClass('cycleAnimationDown');
	  }
	  $('#headerCycle').addClass('cycleAnimation');
	  $('#firstDiv').addClass('pt-page-moveToTop');

}

function sweepDown() {
	$('#headerCycle').removeClass('cycleAnimation');
	$('#headerCycle').addClass('cycleAnimationDown');
	$('#firstDiv').addClass('pt-page-moveToBottom');
	$('#firstDiv').removeClass('pt-page-moveToTop');
	firstTime = false;
}

function resizeContainer() {
if (255 + $("#container").height() > window.innerHeight){
	$('#mobilepage').css('height', $("#container").height()-window.innerHeight+150);
}
else {
	
$('#mobilepage').css('height', 0);
	}
}
