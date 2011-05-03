
/*!
 * Site.js v0.0.1
 * http://fasejs.com/
 *
 * Copyright 2011, Ross Sclafani & For Sure, Rad!
 * Licensed under the MIT license.
 * http://fasejs.com/LICENSE
 *
 * Some really good concepts from jQuery
 * http://jquery.org/
 *
 * Date: Tue May 03 00:38:00 2011 -0400
 */

(function(window, undefined) {

	// import requirements
	import('flash.display.Sprite');
	
	// 'SWF' Object settings
	[SWF(width='900', height='500', frameRate='72', backgroundColor='#222222')];
	
	// main class
	(function() {
		
		function textFieldExample(tf_string) {
					
			var helloText = TextField;
			helloText.text = tf_string;
			helloText.multiline = false;
			helloText.height = 30;
			helloText.selectable = false;
			
			var sweetFormat = TextFormat;
			sweetFormat.color = 0xFFFFFF;
			sweetFormat.size = 14;
			sweetFormat.font = 'Verdana';
			helloText.setTextFormat(sweetFormat);
			
			return helloText;
		
		};
		
		// main method
		function index() {
		
			var helloText = textFieldExample('Fase.js | Fast ActionScript Emulation for JavaScript');
			
			//addChild(helloText);
			helloText.x = 100;
			helloText.y = 100;
		
		};
		
		index();
	
	})();

})(window);
