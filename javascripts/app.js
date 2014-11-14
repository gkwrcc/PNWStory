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
                window.current_video = vid;
                videos_already_played[id] = true;
            }
        }
    }

    function pause_video() {
        if (window.current_video) {
            window.current_video.pause();
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
        'ch4-1', 'ch4-2', 'ch4-3', 'ch4-4', 'ch4-5', 'ch4-6', 'ch4-7', 'ch4-8', 'ch4-9', 'ch4-10',
        'ch5-1', 'ch5-2', 'ch5-3', 'ch5-4', 'ch5-5', 'ch5-6', 'ch5-7', 'ch5-8', 'ch5-9', 'ch5-10',
          'ch5-11', 'ch5-12', 'ch5-13', 'ch5-14', 'ch5-15',
        'ch6-1',
        'ch7-1',
        'ch8-1',
        'ch9-1'
        ],

        keyboardScrolling: true,
        animateAnchor: true,
        resize: false,

        // Called when the DOM is ready
        afterRender: function(){
            window.spinner.stop();
            $("#id-spin-load").fadeOut(800);
        },
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

            if(anchorLink.substring(0,3) == 'ch3') {
                play_background_video("videos/fall-surge-SD.mp4");
            }

            if(anchorLink.substring(0,3) == 'ch4') {
                play_background_video("videos/oso-loop-SD.mp4");
            }

            if(anchorLink.substring(0,3) == 'ch5') {
                play_background_video("videos/siege-ramps-up-SD.mp4");
            }

            if(anchorLink == 'ch2-10') {
                var div = $("#id-wild-weather");
                var htmlcode = [
                      '<video id="id-video-wild-weather" class="full-background" controls>',
                      '<source src="videos/2014-wild-weather-HD.mp4" type="video/mp4" />',
                ];
                div.html(htmlcode.join());
                play_video("id-video-wild-weather");
            }

            if(anchorLink == 'ch3-5') {
                var div = $("#id-north-coast-fire");
                var htmlcode = [
                  '<video id="id-video-north-coast-fire" class="full-background" controls>',
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
                    '<video id="id-video-value-of-prevention" class="full-background" controls>',
                    '<source src="videos/value-of-prevention-1920x1080.mp4" type="video/mp4" />'
                    ];
                div.html(htmlcode.join());
                play_video("id-video-value-of-prevention");
            }
            
            if(anchorLink == 'ch4-4') {
                var div = $("#id-oso-landslide");
                var htmlcode = [
                    '<video id="id-video-oso-landslide" class="full-background" controls>',
                    '<source src="videos/oso-landslide-HD.mp4" type="video/mp4" />'
                    ];
                div.html(htmlcode.join());
                play_video("id-video-oso-landslide");
            }
            
            if(anchorLink == 'ch4-9') {
                var div = $("#id-wet-spring");
                var htmlcode = [
                    '<video id="id-video-wet-spring" class="full-background" controls>',
                    '<source src="videos/wet-spring-HD.mp4" type="video/mp4" />'
                    ];
                div.html(htmlcode.join());
                play_video("id-video-wet-spring");
            }
            
            if(anchorLink == 'ch5-2') {
                var div = $("#id-two-bulls-fire-in-bend");
                var htmlcode = [
                    '<video id="id-video-two-bulls-fire-in-bend" class="full-background" controls>',
                    '<source src="videos/two-bulls-fire-in-bend.mp4" type="video/mp4" />'
                    ];
                div.html(htmlcode.join());
                play_video("id-video-two-bulls-fire-in-bend");
            }

            if(anchorLink == 'ch5-7') {
                var div = $("#id-aubrey-hills-fire");
                var htmlcode = [
                    '<video id="id-video-aubrey-hills-fire" controls>',
                    '<source src="videos/ch5-7-aubrey-hills-fire.mp4" type="video/mp4" />'
                    ];
                div.html(htmlcode.join());
                play_video("id-video-aubrey-hills-fire");
            }

            if(anchorLink == 'ch5-13') {
                var div = $("#id-two-bulls-fire-defensible-space");
                var htmlcode = [
                    '<video id="id-video-two-bulls-fire-defensible-space" class="full-background" controls>',
                    '<source src="videos/two-bulls-fire-defensible-space.mp4" type="video/mp4" />'
                    ];
                div.html(htmlcode.join());
                play_video("id-video-two-bulls-fire-defensible-space");
            }

            
        }, // end afterLoad
        onLeave: function(index, nextIndex, direction) {
            pause_video();
        } // end onLeave

    });
  };

  return { 
    initialize: initialize
  };
});
