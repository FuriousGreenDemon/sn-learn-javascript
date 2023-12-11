//
// L12S02 - Setting up the server side
//

// Server-side Script Include that corresponds to the client call.
var MyServerCode = Class.create();
MyServerCode.prototype = Object.extendsObject(AbstractAjaxProcessor, {

  getServerTime: function() {
    return new GlideDateTime().getDisplayValue();
  },

  type: 'MyServerCode'
});