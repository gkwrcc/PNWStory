define([
  'jquery', 
  'underscore', 
  'bootstrap',
  'backbone',
  'app/router', // Request app/router.js
  'modernizr',
  'videojs',
  'slimscroll',
  'easings',
  'fullpage',
  'imagesloaded',
  'bigvideo'
],
function($, _, bootstrap, Backbone, Router, Modernizr, videojs, slimscroll, easings, fullpage, imagesloaded, bigvideo) {
  var initialize = function(){
    //console.log("in app.initialize");
    // Pass in our Router module and call it's initialize function
    //Router.initialize();

    // Enable all tooltips.
    // $(function () { $("[data-toggle='tooltip']").tooltip(); });
    // Enable all popovers.
    // $(function () { $("[data-toggle='popover']").popover(); });
    // Utility function to start playing a video.
    function play_background_video(url) {
        if ( window.BV == null ) {
            // Initialize BigVideo
            window.BV = new $.BigVideo();
            window.BV.init();
        }
        var options = {
            ambient: true,
            doLoop: true
        };

        if (window.BVurl && window.BVurl == url) {
            // return if the video is already playing.
            if (!window.BV.getPlayer().paused()) return;
        }

        if (!window.Modernizr.touch) {
            // Dont show videos on mobile devices that don't allow autoplay.
            window.BVurl = url;
            window.BV.show(url, options);
        }
    }
    function play_video(id) {
        var vid = document.getElementById(id);
        if (vid !== null) {
            if (!vid.played.length && !vid.ended) {
                if (window.BV) window.BV.getPlayer().pause(); // First stop background video.
                vid.play();
            }
        }
    }

    // Initialize fullpage.js
    $('#fullpage').fullpage({
        //Navigation Options
        menu: '#menu',
        anchors:['top', 'intro-video', 'about',
        'ch1-1',
        'ch2-1', 'ch2-2', 'ch2-3', 'ch2-4', 'ch2-5', 'ch2-6', 'ch2-7', 'ch2-8', 'ch2-9', 'ch2-10',
        'ch3-1',
        'ch4-1',
        'ch5-1',
        'ch6-1',
        'ch7-1',
        'ch8-1',
        'ch9-1'
        ],

        keyboardScrolling: true,
        animateAnchor: true,

        // Called after a section is loaded.
        afterLoad: function(anchorLink, index){
            if(anchorLink == 'intro-video') {
                play_video("id-video-PNWCG");
            }

            if(anchorLink.substring(0,3) == 'ch2') {
                play_background_video("videos/resilient-landscapes-SD.mp4");
            }

            if(anchorLink == 'ch2-10') {
                play_video("id-video-wild-weather");
            }
        }, // end afterLoad
        onLeave: function(index, nextIndex, direction) {
        } // end onLeave

    });
  };

  return { 
    initialize: initialize
  };
});
