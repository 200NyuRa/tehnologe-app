import Module from './Module';

export default class VieportModule extends Module {

	constructor(app){
		super(app);
		this.update();
		app.dom.$window.on('resize', this.update.bind(this));
	}

	update(){
		var element = window;
		var prefix = 'inner';
		if (!(prefix+'Width' in window)) {
			prefix = 'client';
			element = document.documentElement || document.body;
		}
		this.width = element[prefix+'Width'];
		this.height = element[prefix+'Height'];
	}

}
