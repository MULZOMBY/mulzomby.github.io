
window.onload = () => {
	console.clear();
	var controller = new ScrollMagic.Controller();

	
	// build scene
	var pageDuration = 1300;
	
	for ( var i = 1; i <= 5; i++ ) {
		var scene = new ScrollMagic.Scene({triggerElement: ".pages .page-" + i, duration: pageDuration, triggerHook:0})
		.setPin(".pages .page-" + i)
		.addIndicators({name: i + " (duration: " + pageDuration + ")"})
		.addTo(controller);
	}



}