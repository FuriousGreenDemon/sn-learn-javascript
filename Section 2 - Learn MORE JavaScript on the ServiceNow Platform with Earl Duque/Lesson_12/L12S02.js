//
// L12S02 - Setting up the server side
//

// Server-side Script Include that corresponds to the client call.
var MyServerCode = Class.create();
MyServerCode.prototype = {
  initialize: function() {
  },

  getServerTime: function() {
    return new GlideDateTime().getDisplayValue();
  },

  _privateMethod: function() { // Private method, not callable from GlideAjax.
    // Some private code.
  },

  type: 'MyServerCode'
};
