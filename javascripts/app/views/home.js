define(['jquery',
        'underscore',
        'backbone',
        'videojs',
        'app/collections/chapters',
        'text!app/templates/home.html'
],
function($, _, Backbone, videojs, ChapterCollection, homeViewTemplate){
    var homeView = Backbone.View.extend({
        el: $("#home"),

        initialize: function() {
            Backbone.emulateJSON = true;
            this.collection = new ChapterCollection();
            this.collection.fetch({reset: true});
            this.collection.on("reset", this.render, this);
        },

        render: function() {
            var template = _.template(homeViewTemplate);
            var params = {
                chapters: this.collection.models
            };
            this.$el.html(template(params));
        }
    });

    return homeView;
});
