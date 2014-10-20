define([
  'jquery', 
  'underscore', 
  'backbone',
  'app/views/home',
  'app/views/video'
],
function($, _, Backbone, homeView, videoView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '': 'home',
      'video': 'video',
      // Default
      '*actions': 'defaultAction'
    },
    home: function() {
      //console.log('in AppRouter.home', arguments)
      // var view = new homeView();
    },
    video: function() {
      //console.log('in AppRouter.home', arguments)
      var view = new videoView();
    }
  });

  var initialize = function(){
    //console.log("in router.initialize");
    var app_router = new AppRouter;
    app_router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});

