(function( $ ){
    
    var defaults = {
      width: '100%',
      offBottom: 0,
      offWidth: 0
    }

    var settings = {}
    
    var methods = {
      init: function(options){
        settings = $.extend({}, defaults, options);

        var $this = $(this),
            self = $this; 

        $(window).bind('resize.mapSizer', function(){
          self.mapSizer("resize");
        });
       
        $this.mapSizer('resize');
      },

      resize: function() {
        return $(this).each(function(){
          $(this).height(function(){
            return ($('html').height() - settings.offBottom);
          }).width(function(){
            return (settings.width - settings.offWidth)
          });
        });
      }
    }

    $.fn.mapSizer = function( method ) {
      // Method calling logic
      if ( methods[method] ) {
        return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof method === 'object' || ! method ) {
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
      }    

    };

})( jQuery );