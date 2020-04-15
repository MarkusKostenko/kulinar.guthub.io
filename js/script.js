function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();
$(document).ready(function() {
	$('.menu_burger').click(function(event) {
		$('.menu_burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){

	$("#header").removeClass("default");
	$(window).scroll(function() {
		if ($(this).scrollTop() > 800) {
			$('#header').addClass("default").fadeIn('fast');
		}else{
		$('#header').removeClass("default").fadeIn('fast');
		};
  	});
});

