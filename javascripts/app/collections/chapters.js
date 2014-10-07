define([
        'underscore',
        'backbone',
        'app/models/chapter'
],
function(_, Backbone, ChapterModel){
    var ChapterCollection = Backbone.Collection.extend({
        model: ChapterModel,
        url: "javascripts/app/collections/chapters.json"
    });
    return ChapterCollection;
});
