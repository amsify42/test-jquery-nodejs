(function (factory) {
  if(typeof module === "object" && typeof module.exports === "object") {
    factory(require("jquery"), window, document);
  } else {
    factory(jQuery, window, document);
  }
}(function($, window, document, undefined) {
    
    MyTestPlugin = function(selector) {
      this.name = 'My test plugin';
    }

    MyTestPlugin.prototype = {
        _init : function(options) {
          console.info(window);
          console.info(this.name+' initated');
        }
     }

     $.fn.myTestPlugin = function(options, method) {
        return this.each(function() {
          var myTestPlugin = new MyTestPlugin(this);
          myTestPlugin._init();
        });
    };

}));