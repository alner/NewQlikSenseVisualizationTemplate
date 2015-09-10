import initialProperties from './initialProperties';
import definition from './definition';
import paint from './paint';

const define = (window && window.define) || define;

define(['css!./styles.css'],
	function(){
		//var paint = require('./paint');
		console.log('component');

		return {
			initialProperties,
			definition,
			paint
		}
	}
);