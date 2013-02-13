// JavaScript Document for Theflow
			
$(document).ready(function() {
	
//Scroll to anchor	
$("#header a[href^='#']").click(function(event){
	event.preventDefault();
	var full_url = this.href;
	var parts = full_url.split("#");
	var trgt = parts[1];
	var target_offset = $("#"+trgt).offset();
	var target_top = target_offset.top - 0;
	$('html, body').animate({scrollTop:target_top}, 1000, 'easeOutQuad');
	$('#header a').removeClass('current');  
	$(this).addClass('current');
});

$("#slide a[href^='#']").click(function(event){
	event.preventDefault();
	var full_url = this.href;
	var parts = full_url.split("#");
	var trgt = parts[1];
	var target_offset = $("#"+trgt).offset();
	var target_top = target_offset.top - 0;
	$('html, body').animate({scrollTop:target_top}, 1000, 'easeOutQuad');
	$('#slide a').removeClass('current');  
	$(this).addClass('current');
});

//Thumbnail hover effect for gallery
$('.thumb').hover(function(){  
	$(this).find(".zoom_icon").animate({left: '65px'}, 300);
	}  
	, function(){  
	$(this).find(".zoom_icon").animate({left: '-90px'}, 300);
});

//Scroll to top - arrow
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
	$('.scrollToTop').fadeIn();
	} else {
	$('.scrollToTop').fadeOut();
	}
});
$('.scrollToTop').click(function(){
	$('html, body').animate({scrollTop : 0},800, 'swing');
	return false;
});
	

}); //close document.ready


