require.config({
    paths:{
        // underscore library
        underscore:'libs/underscore/underscore',
        //Backbone.js library
        backbone:'libs/backbone/backbone',
        // jQuery
        jquery:'libs/jquery/jquery-1.11.1/jquery',
        // jQuery UI
        'jquery-ui':'libs/jquery-ui.min',
        // imagesloaded 
        imagesloaded:'libs/imagesloaded',
        // BigVideo 
        bigvideo:'libs/bigvideo',
        // fullpage.js slimscroll jquery plugin
        slimscroll: 'libs/jquery.slimscroll.min',
        // fullpage.js slimscroll jquery plugin
        easings: 'libs/jquery.easings.min',
        // fullpage.js jquery plugin
        fullpage: 'libs/jquery.fullPage',
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
        jquery: {
            exports: 'jQuery'
        },
        bootstrap:{
            deps:['jquery']
        },
        backbone:{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        slimscroll: {
            deps: ['jquery']
        },
        easings: {
            deps: ['jquery']
        },
        fullpage:{
            deps:['jquery', 'slimscroll', 'easings']
        },
        bigvideo:{
            deps:['jquery', 'jquery-ui', 'videojs', 'imagesloaded']
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
