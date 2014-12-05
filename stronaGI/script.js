$(document).ready(function() {
	
	$('.spotkanie').mouseenter(function(){
		$('.spotkanie').css('height' ,'300px');
	});
	$('.spotkanie').mouseleave(function(){
		$('.spotkanie').css('height' ,'100px');
	});
	$('.dropdown').mouseenter(function(){
		$(this).children('.dropdown-menu').show();
	});
	$('.dropdown').mouseleave(function(){
		$(this).children('.dropdown-menu').hide();
	});
});
	