const vh = window.screen.availHeight / 100;

const controller = new ScrollMagic.Controller();

const introTitlePin = new ScrollMagic.Scene({ triggerElement: '.intro__title', triggerHook: 0 })
	.setPin('.intro__title')
	.addTo(controller);

const titleSwipe = new ScrollMagic.Scene({ triggerElement: '.intro__title', triggerHook: 0, duration: 50 * vh })
	.setTween(new TweenLite.fromTo('.intro__title', 1, { x: 0 }, { x: '100%' }))
	.addTo(controller);

const screens = document.querySelectorAll('.screen:not(.screen--intro)');

screens.forEach(screen => {
	const heading = screen.querySelector('.screen__title');
	
	new ScrollMagic.Scene({ triggerElement: screen, triggerHook: 0 })
		.setPin(heading)
		.addTo(controller);
	
	new ScrollMagic.Scene({ triggerElement: screen, triggerHook: 0.55, duration: 90 * vh })
		.setTween(new TweenLite.fromTo(heading, 1, { x: '-100%', y: 0 }, { x: '100%', y: 0 }))
		.addTo(controller);
		
	new ScrollMagic.Scene({ triggerElement: screen, triggerHook: 0.9, duration: 50 * vh })
		.setTween(new TweenLite.fromTo(screen, 1, { opacity: 0 }, { opacity: 1, ease: Power3.easeInOut }))
		.addTo(controller);
	
	new ScrollMagic.Scene({ triggerElement: screen, triggerHook: 0.75, duration: 50 * vh })
		.setTween(new TweenLite.to(screen.querySelector('.content__image'), 1, { y: 0, ease: Power1.easeOut }))
		.addTo(controller);
});