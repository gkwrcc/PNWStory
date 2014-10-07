define([
        'underscore',
        'backbone'
],
function(_, Backbone) {
    var ChapterModel = Backbone.Model.extend({
        defaults: {
            id: 0,
            title: 'Default Title',
            topics: []
        }
    });
    return ChapterModel;
});
