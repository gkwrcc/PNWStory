define([
  'jquery', 
  'underscore', 
  'bootstrap',
  'backbone',
  'app/router', // Request app/router.js
  'modernizr',
  'videojs'
],
function($, _, bootstrap, Backbone, Router, Modernizr, videojs) {
  var initialize = function(){
    //console.log("in app.initialize");
    // Pass in our Router module and call it's initialize function
    Router.initialize();

    // Enable all tooltips.
    $(function () { $("[data-toggle='tooltip']").tooltip(); });
  };

  return { 
    initialize: initialize
  };
});
