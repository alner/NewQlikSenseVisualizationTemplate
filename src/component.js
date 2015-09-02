var define = (window && window.define) || define;

// import module1 from './module1';
import paint from './module2';

define([], function(){
	//var module1 = require('./module1');
	console.log('component');
	return {
		paint: function($element, layout) {
				console.log('*** paint ***');
				console.log($element);
				console.log(layout);
				//module1.hello();
				paint();
		}
	}
});