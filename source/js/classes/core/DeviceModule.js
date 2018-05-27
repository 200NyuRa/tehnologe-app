import Module from './Module';

export default class DeviceModule extends Module {

	constructor(app){
		super(app);
		this.breakpoints = this.app.config.breakpoints;
		this.support = Modernizr;
		this.checkTouch();
		this.checkBreakpoints();
		this.checkMobile();
		this.checkRetina();
		this.checkAppleDevices();
		this.updateClassNames();
		app.dom.$window.on('resize', () => {
			this.checkBreakpoints();
			this.updateClassNames();
		});
	}

	checkTouch(){
		this.isTouch = this.support.touchevents;
	}

	checkBreakpoints(){
		var { viewport, dom } = this.app;
		for (var name in this.breakpoints) {
			var keyName = 'is' + name.charAt(0).toUpperCase() + name.substr(1);
			this[keyName] = (viewport.width <= this.breakpoints[name]);
		}
	}

	checkMobile(){
		var { viewport, dom } = this.app;
		this.isMobile = this.isTouch && viewport.width<=1024;
	}

	checkRetina(){
		this.isRetina = (window.devicePixelRatio && window.devicePixelRatio>1);
	}

	checkAppleDevices(){
		var { userAgent } = navigator;
		this.isIos = (/(iPad|iPhone|iPod touch)/i).test(userAgent);
		this.isIphone = (/(iPhone|iPod touch)/i).test(userAgent);
		this.isIpad = (/iPad/i).test(userAgent);
	}

	updateClassNames(){
		var { dom } = this.app;
		var keys = Object.keys(this).filter(function(key){
			return key.indexOf('is') === 0;
		});
		var prefixes = {
			yes: 'd-',
			no: 'd-no-'
		};
		keys.forEach((key) => {
			var className = key.replace('is', '');
			className = (className.charAt(0) + className.substr(1).replace(/([A-Z])/g, '-$1')).toLowerCase();
			dom.$html.addClass(this[key] ? prefixes.yes + className : prefixes.no + className);
			dom.$html.removeClass(this[key] ? prefixes.no + className : prefixes.yes + className);
		});
	}

}
