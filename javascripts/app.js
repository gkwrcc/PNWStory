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
    var videos_already_played = {};
    function play_video(id) {
        // return if we already auto played this video
        if (videos_already_played[id]) return;
        var vid = document.getElementById(id);
        if (vid !== null) {
            if (!vid.played.length && !vid.ended) {
                if (window.BV) window.BV.getPlayer().pause(); // First stop background video.
                vid.play();
                videos_already_played[id] = true;
            }
        }
    }

    // Initialize fullpage.js
    $('#fullpage').fullpage({
        //Navigation Options
        menu: '#menu',
        anchors:['top', 'intro-video', 'about',
        'ch1-1', 'ch1-2', 'ch1-3', 'ch1-4',
        'ch2-1', 'ch2-2', 'ch2-3', 'ch2-4', 'ch2-5', 'ch2-6', 'ch2-7', 'ch2-8', 'ch2-9', 'ch2-10',
        'ch3-1', 'ch3-2', 'ch3-3', 'ch3-4', 'ch3-5', 'ch3-6', 'ch3-7', 'ch3-8', 'ch3-9', 'ch3-10', 'ch3-11', 'ch3-12', 'ch3-13',
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

            if(anchorLink.substring(0,3) == 'ch1') {
                play_background_video("videos/prelude-SD.mp4");
            }

            if(anchorLink.substring(0,3) == 'ch2') {
                play_background_video("videos/resilient-landscapes-SD.mp4");
            }

            if(anchorLink == 'ch2-10') {
                play_video("id-video-wild-weather");
            }

            if(anchorLink == 'ch3-5') {
                var div = $("#id-north-coast-fire");
                var htmlcode = [
                  '<video id="id-video-north-coast-fire" controls width="720">',
                  '<source src="videos/CH3-4_KGWO_NORTH_COAST_FIRE_VIDEO.mp4" type="video/mp4" />'
                ];
                div.html(htmlcode.join());
                play_video("id-video-north-coast-fire");
            }

            if(anchorLink == 'ch3-7') {
                var div = $("#id-scooper-planes");
                var htmlcode = [
                    '<video id="id-video-scooper-planes" controls>',
                    '<source src="videos/ch3-7-scooper-planes.mp4" type="video/mp4" />'
                    ];
                div.html(htmlcode.join());
                play_video("id-video-scooper-planes");
            }

            if(anchorLink == 'ch3-8') {
                var div = $("#id-how-to-fight");
                var htmlcode = [
                    '<video id="id-video-how-to-fight" controls width="480">',
                    '<source src="videos/ch3-8-how-to-fight.mp4" type="video/mp4" />'
                    ];
                div.html(htmlcode.join());
                div = $("#id-bulldozers");
                htmlcode = [
                    '<video id="id-video-bulldozers" controls width="480">',
                    '<source src="videos/ch3-8-bulldozers.mp4" type="video/mp4" />'
                    ];
                div.html(htmlcode.join());
            }

            if(anchorLink == 'ch3-13') {
                var div = $("#id-value-of-prevention");
                var htmlcode = [
                    '<video id="id-video-value-of-prevention" controls width="720">',
                    '<source src="videos/value-of-prevention-1920x1080.mp4" type="video/mp4" />'
                    ];
                div.html(htmlcode.join());
                play_video("id-video-value-of-prevention");
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
