import app from '../app';

var preventDefault = function(e){
	e.preventDefault();
};

export function enable(namespace){
	app.dom.$document.off('touchmove.' + namespace);
	app.dom.$window.off('mousewheel.' + namespace);
}

export function disable(namespace){
	app.dom.$document.on('touchmove.' + namespace, preventDefault);
	app.dom.$window.on('mousewheel.' + namespace, preventDefault);
}

export function get(){
	return (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
}
