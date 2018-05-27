import Module from './Module';

export default class SizesModule extends Module {

	constructor(app){
		super(app);
		this.update();
		app.dom.$window.on('resize', this.update.bind(this));
	}

	update(){
		this.width = this.app.dom.$window.width();
		this.height = parseInt(window.innerHeight, 10);
	}

}
