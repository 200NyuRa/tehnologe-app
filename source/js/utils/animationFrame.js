export function request(callback) {
	var func = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame;
	if (func) {
		return func(callback);
	} else {
		return window.setTimeout(callback, 1000 / 60);
	}
}

export function cancel(frame){
	var func = window.cancelAnimationFrame ||
		window.webkitCancelRequestAnimationFrame ||
		window.mozCancelRequestAnimationFrame ||
		window.oCancelRequestAnimationFrame ||
		window.msCancelRequestAnimationFrame ||
		clearTimeout;
	func(frame);
	frame = null;
}
