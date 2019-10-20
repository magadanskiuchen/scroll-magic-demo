const vh = window.screen.availHeight / 100;

const controller = new ScrollMagic.Controller();

const introTitlePin = new ScrollMagic.Scene({ triggerElement: '.intro__title', triggerHook: 0 })
	.setPin('.intro__title')
	.addTo(controller);

const titleSwipe = new ScrollMagic.Scene({ triggerElement: '.intro__title', triggerHook: 0, duration: 50 * vh })
	.setTween(new TweenLite.fromTo('.intro__title', 1, { x: 0 }, { x: '100%' }))
	.addTo(controller);