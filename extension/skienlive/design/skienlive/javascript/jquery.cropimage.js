(function ($) {
    "use strict";

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    function cropImage(options) {
    	this.each(function () {
    		cropImage.prototype.cropElement($(this), options);
    	});
    }

    cropImage.elements = [];
    cropImage.hasResizeHandler = false;

    cropImage.prototype.loadHandler = function(e) {
    	var $el = $($(e.target).data('frameElement')),
    		options = $el.data('cropSettings');

    	cropImage.prototype.cropElement($el, options);
    }

    cropImage.prototype.cropElement = function($el, options) {
    	options = $.extend({
    		ratio: $el.data('ratio')
    	}, options || {});
        var el = $el[0];
        var width = options.width, height = options.height,
        	ratio = options.ratio,
        	adjustWidth = true, adjustHeight = true;

        if (options == "remove") {
		    var $img = $el.is('img') ? $el : $el.find('img');
		    if (!$img.length)
		    	return;

		    $img.attr('style', '');
	        $img.off('load', cropImage.prototype.loadHandler);
	        $img.data('cropSettings', null);
	        $el.data('cropSettings', null);
            for (var idx = 0; idx < cropImage.elements.length; ++idx) {
                if (cropImage.elements[idx] == el) {
                    cropImage.elements.splice(idx, 1);
                    break;
                }
            }
	        return;
		}

        if (width && height)
        	ratio = width == 0 ? 0 : height / width;
        else if (width && ratio)
        	height = width * ratio;
        else if (height && ratio)
        	width == height / ratio;
        else if (ratio) {
        	width = $el.width();
        	height = width * ratio;
        	// Only update the height
        	adjustWidth = false;
        } else {
        	width = $el.width();
	    	height = $el.height();
	    	if (width == 0 || height == 0)
	    		return;

        	ratio = height / width;
        	adjustWidth = adjustHeight = false;
        }

        if (adjustWidth)
		    $el.css({'width': Math.floor(width) + 'px'});
		if (adjustHeight)
		    $el.css({'height': Math.floor(height) + 'px'});

	    // Find any images and crop them
	    var $img = $el.is('img') ? $el : $el.find('img');
	    if (!$img.length)
	    	return;

	    var img = $img[0];

	    // Setup the load handler in case the image is not yet loaded
	    if (!$el.data('cropSettings')) {
	    	$el.data('cropSettings', options);
	    	$img.data('cropSettings', options);
	    	$img.data('frameElement', el);
            $img.on('load', cropImage.prototype.loadHandler);
            cropImage.elements.push(el);
            if (!cropImage.hasResizeHandler) {
                cropImage.hasResizeHandler = true;
                $(window).on('resize', debounce(function () {
                    for (var i = 0; i < cropImage.elements.length; ++i) {
                        var $croppedEl = $(cropImage.elements[i]);
                        cropImage.prototype.cropElement($croppedEl, $croppedEl.data('cropSettings'));
                    }
                }));
            }
	    }

	    // If the image has no dimensions then don't try to center, instead set some default styles
	    if (img.naturalWidth == 0 || img.naturalHeight == 0) {
            var elHeight = $el.height();
	        $img.css({'position': 'absolute', 'overflow': 'hidden'});
            $img.css({'width': '100%', 'height': 'auto'});
            $img.css({
                'top': -adjust + 'px',
                'left': '0',
                'clip': 'rect(' + '0px auto ' + Math.floor(elHeight) + 'px 0)',
                'clip-path': 'inset(' + '0px auto, ' + Math.floor(elHeight) + 'px 0)'
            });
	    	return;
	    }

        if ( height <= 0 )
        {
            $img.css({'top': '0', 'left': '0', 'width': '100%', 'height': 'auto'});
            return;
        }

        var imgRatio = img.naturalWidth == 0 ? 0 : img.naturalHeight / img.naturalWidth;

        $img.css({'position': 'absolute', 'overflow': 'hidden'});

        // Updated width/height to make the browser calculate the display size
        // Then calculate the adjustment value and adjust horizontally or vertically depending on the ratio
        if (imgRatio > ratio) {
            $img.css({'width': '100%', 'height': 'auto'});
            var imgHeight = $img.height(),
                adjust = ((imgHeight - height) / 2);
            $img.css({
                'top': -adjust + 'px',
                'left': '0',
                'clip': 'rect(' + Math.floor(adjust) + 'px auto ' + Math.floor(imgHeight - adjust) + 'px 0)',
                'clip-path': 'inset(' + Math.floor(adjust) + 'px auto, ' + Math.floor(imgHeight - adjust) + 'px 0)'
            });
        } else {
            $img.css({'width': 'auto', 'height': height + 'px'});
            var imgWidth = $img.width(),
                adjust = ((imgWidth - width) / 2);
            $img.css({
                'top': '0',
                'left': -adjust + 'px',
                'clip': 'rect(0 ' + Math.floor(imgWidth - adjust) + 'px auto ' + Math.floor(adjust) + 'px)',
                'clip-path': 'inset(0 ' + Math.floor(imgWidth - adjust) + 'px auto ' + Math.floor(adjust) + 'px)'
            });
        }
    }

    $.fn.cropImage = cropImage;
})(jQuery);
