/*!
 * Fase.js v0.0.1
 * http://fasejs.com/
 *
 * Copyright 2011, Ross Sclafani & Edward Hotchkiss
 * Licensed under the MIT license.
 * http://fasejs.com/LICENSE
 *
 * Some really good concepts from jQuery
 * http://jquery.org/
 *
 * Date: Mon May 02 22:00:00 2011 -0400
 */

(function(window, undefined) {
	
	// global document
	var document = window.document;
	
	// fase, phase, face, $ ...
	var Fase = function(){};
	
	// map over fase in case of overwrite
	_Fase = window.Fase;
	
	// map over the $ in case of overwrite
	_$ = window.$;
	
	// useragent regexp
	rwebkit = /(webkit)[ \/]([\w.]+)/;
	ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/;
	rmsie = /(msie) ([\w.]+)/;
	rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;
	
	// store user agent for later use
	userAgent = navigator.userAgent;
	
	// namespace / import
	Fase.namespace = function(ns_string) {
		var parts = ns_string.split('.');
		var parent = Fase;
		var q;
		if (parts[0] === 'Fase') {
			parts = parts.slice(1);
		}
		for (q = 0; q < parts.length; q += 1) {
			if (typeof parent[parts[q]] === 'undefined') {
				parent[parts[q]] = {};
			}	
			parent = parent[parts[q]];
		}
		return parent;
	};
	
	Fase.namespace('Fase.log');
	
	Fase.log = function(log_string) {
		if (typeof(console === Object)) {
			console.log(log_string);
		} else {
			alert(log_string);
		};
	};
	
	// global
	window.Fase = window.$ = Face = Phase = Fase;
	
})(window);



/* EOF */