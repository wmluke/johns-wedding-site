(function($){
	/* trigger when page is ready */
	jQuery(document).ready(function (){
        jQuery("input[name='guests']").TouchSpin({
            min: 0,
            max: 100,
            step: 1,
            postfix:'(# of Guests)'
        });
	});
})(window.jQuery);