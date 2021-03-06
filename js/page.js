define('./page');
require('./inline');
require('./remote');

;(function() {
  
  var inline, remote;
  
  inline = require('./inline');
  inline('page.js');
  
  // exports should be a function that intercepts eager calls and queues them
  // so they can be called when exports is explicitly defined
  remote = require('./remote');

  module.exports = s; function s() {
    
    //remote('page.js');
    require('./remote')('page.js');
  }
  
  // bootstrapping? queueing? intercept?
  window.onload = function() {
    s();
  }
  
  global.console && console.log('page.js');

}());
