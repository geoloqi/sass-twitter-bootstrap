// jQuery Plugin Boilerplate
// A boilerplate for jumpstarting jQuery plugins development
// version 1.1, May 14th, 2011
// by Stefan Gabos

(function($) {

  $.equalColumns = function(element, options) {

    var defaults = {
      height: 'auto',
    }

    var plugin = this;

    plugin.settings = {}

    var $element = $(element),
         element = element,
        $children = $element.children();

    plugin.init = function() {
        plugin.settings = $.extend({}, defaults, options);
        // code goes here
        plugin.equalize();
    }

    plugin.equalize = function() {
      var tallest = 0;
      $children.each(function() {
        var thisHeight = $(this).height();
        if(thisHeight > tallest) {
          tallest = thisHeight;
        }
        console.log(tallest);
      });
      if(plugin.settings.height != 'auto') {
        tallest = plugin.settings.height;
      }
      $children.height(tallest).find('[data-equal]').height(tallest);
    }

    plugin.init();

  }

  $.fn.equalColumns = function(options) {

    return this.each(function() {
      
      var plugin = new $.equalColumns(this, options);
      
    });
    
  }

})(jQuery);