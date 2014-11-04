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
        var options = {
            ambient: true,
            doLoop: true
        };
        if (!window.Modernizr.touch) {
            // Dont show videos on mobile devices that don't allow autoplay.
            window.BV.show(url, options);
        }
    }
    function play_video(id) {
        var vid = document.getElementById(id);
        if (vid !== null) {
            if (!vid.played.length && !vid.ended) {
                window.BV.getPlayer().pause(); // First stop background video.
                vid.play();
            }
        }
    }

    // Initialize BigVideo
    window.BV = new $.BigVideo();
    window.BV.init();

    // Initialize fullpage.js
    $('#fullpage').fullpage({
        //Navigation Options
        menu: '#menu',
        anchors:['top', 'intro-video', 'about',
        'ch1-1', 'ch1-2', 'ch1-3', 'ch1-4', 'ch1-5', 'ch1-6', 'ch1-7', 'ch1-8', 'ch1-9', 'ch1-10',
        'ch2-1'],

        keyboardScrolling: true,
        animateAnchor: true,

        // Called after a section is loaded.
        afterLoad: function(anchorLink, index){
            if(anchorLink == 'intro-video') {
                play_video("id-video-PNWCG");
            }

            if(anchorLink == 'ch1-1') {
                play_background_video("videos/resilient-landscapes-SD.mp4");
            }

            if(anchorLink == 'ch1-10') {
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
