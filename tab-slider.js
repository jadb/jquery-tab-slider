/**
 * Tab Slider jQuery plugin
 *
 * @copyright (c)2005-2010, WDT Media Corp (http://wdtmedia.net)
 * @license http://www.opensource.org/licenses/mit-license.php The MIT License
 * @link http://github.com/jadb/jquery-tab-slider
 * @author jadb
 */
(function($){
	$.fn.tabSlider = function(args) {
		// options
		var defaults = {
			bottom: 0,
			height: this.outerHeight(),
			left: 0,
			position: 'bottom left',
			right: 0,
			slider: 'div',
			speed: 1000,
			tab: 'h3',
			tabText: '',
			top: 0,
			width: this.outerWidth()
		};
		var opts = $.extend(true, defaults, args);

		var box = this;
		var tab = $(box.selector + ' > ' + opts.tab);
		var posClasses = opts.position.split(' ');


		// tab's text
		if (opts.tabText.length > 0) {
			tab.html(opts.tabText);
		}

		// position
		box.css('position', 'absolute');
		for (var i in posClasses) {
			box.css(posClasses[i], opts[posClasses[i]]);
			if ('top' == posClasses[i]) {
				tab.appendTo(box.selector);
			}
		}

		// slideToggle
		$(box.selector + ' > ' + opts.slider).slideToggle(opts.speed);
		$(box.selector + ' > ' + opts.tab).click(function() {
			$(box.selector + ' > ' + opts.slider).slideToggle(opts.speed);
		});
	}
})(jQuery);