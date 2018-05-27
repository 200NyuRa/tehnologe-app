import SizesModule from './SizesModule';
import ViewportModule from './ViewportModule';
import DeviceModule from './DeviceModule';
import PluginsModule from './PluginsModule';

import * as configFiles from 'glob:../../../config/**/*.json';

export default class App {

	constructor(){
		this.config = {};
		for (let name in configFiles) this.config[name] = configFiles[name];
		this.dom = this.getDomElements();
		this.sizes = new SizesModule(this);
		this.viewport = new ViewportModule(this);
		this.device = new DeviceModule(this);
		this.plugins = new PluginsModule(this);
	}

	getDomElements(){
		var elements = {
			root: document.getElementById('root'),
			html: document.getElementsByTagName('html'),
			body: document.getElementsByTagName('body'),
			document,
			window
		};
		for (var name in elements) {
			elements['$'+name] = $(elements[name]);
		}
		return elements;
	}

}
