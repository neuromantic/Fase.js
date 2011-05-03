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
	
	// default framerate
	Fase.frameRate = 72;
	
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
		if (parts[0] === 'Fase') {
			parts = parts.slice(1);
		}
		for (var q = 0; q < parts.length; q += 1) {
			if (typeof parent[parts[q]] === 'undefined') {
				parent[parts[q]] = {};
			}	
			parent = parent[parts[q]];
		}
		return parent;
	};
	
	// namespacing 
	Fase.namespace('Fase.TextField');
	Fase.namespace('Flash.display');
	Fase.namespace('Flash.events');
	Fase.namespace('Flash.text');
	Fase.namespace('Flash.geom');
	Fase.namespace('Flash.utils');
	
	Fase.log = function(log_string) {
		if (typeof(console === Object)) {
			console.log(log_string);
		} else {
			alert(log_string);
		};
	};
	
	Fase.import = function(package) {
	};
		
	Fase.SWF = function(width, height, frameRate, backgroundColor) {
		document.bgColor = backgroundColor;
		var container = document.createElement('div');
		container.id = 'container';
		container.style.position = 'relative';
		container.style.margin = "0px auto";
		container.style.width = width + 'px';
		container.style.height = height + 'px';
		document.body.appendChild(container);
	};
		
	Fase.TextField = {
		__construct : function() {
			var p = document.createElement('p');
			p.id = 'tmp';
			document.body.appendChild(p);
		}(Fase.TextField.__construct),
		text : function() {
		},
		setTextFormat : function() {
		}
	};
	
	Fase.TextFormat = {
	};
	
	// global
	window.Fase = window.$ = Face = Phase = Fase;
	
})(window);
