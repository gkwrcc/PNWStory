require.config({
    paths:{
        // underscore library
        underscore:'libs/underscore/underscore',
        //Backbone.js library
        backbone:'libs/backbone/backbone',
        // jQuery
        jquery:'libs/jquery/jquery-1.11.1/jquery',
        // bootstrap
        bootstrap: '//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min',
        // modernizr
        modernizr: 'libs/modernizr/modernizr',
        // video.js
        videojs: '//vjs.zencdn.net/4.8/video',
        // text plugin
        text: 'libs/require/plugins/text'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        backbone:{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        underscore:{
            exports:'_'
        }
    }
});

// Create the app
require(['app',],
function(App) {
    App.initialize();
});
