define(['jquery',
        'underscore',
        'backbone',
        'videojs'
],
function($, _, Backbone, videojs){
    var videoView = Backbone.View.extend({
        el: $("#home"),

        initialize: function() {
            console.log("in videoView.initialize()", this);
        }
    });

    return videoView;
});
