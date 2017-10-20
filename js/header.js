function slideMenu() {
	var activeState = $('.nav_menu').hasClass('active');
	$('.nav_menu').animate({
		top: activeState ? '0%' : '-100%'
	}, 600);
	if(activeState) {
		$('.nav_menu').addClass('js_visible');
	}
}

$('#btn_toggle').click(function(event) {
	event.stopPropagation();
	event.preventDefault();
	$('#btn_toggle').stop(true, false).toggleClass('js_on');
	$('.nav_menu').stop(true, false).toggleClass('active');
	$('.nav_menu').stop(true, false).toggleClass('js_visible');
	slideMenu();
	console.log('toggle done');
});
$('.nav_menu ul li a').click(function(){
	$('.nav_menu').removeClass('active js_visible');
	$('#btn_toggle').removeClass('js_on');
	slideMenu();
});

// close when clicked other storageArea
// something wrong on mobile
$(document).on('click touchstart', function(event) {
  if (!$(event.target).closest('.nav_menu').length) {

	// for only pc visiter
	// if ($(window).width() > 768) {

		$('.nav_menu').removeClass('active js_visible');
		$('#btn_toggle').removeClass('js_on');
		slideMenu();
		console.log('remove done');	  
	

  }
});

// ---- for resize logo on scroll down
function init() {
	window.addEventListener('scroll', function(e){
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
		shrinkOn = 30,
		fixedHeader = document.querySelector('.navbar-fixed-top');
		if (distanceY > shrinkOn) {
			classie.add(fixedHeader,'js_smaller');
		} else {
			if (classie.has(fixedHeader,'js_smaller')) {
				classie.remove(fixedHeader,'js_smaller');
			}
		}
	});
}
window.onload = init();

	