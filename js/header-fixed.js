$(document).ready(function(){

	$("#header").removeClass("default");
	$(window).scroll(function() {
		if ($(this).scrollTop() > 700) {
			$('#header').addClass("default").fadeIn('fast');
		}else{
		$('#header').removeClass("default").fadeIn('fast');
		};
  	});
});