var app = app || {};

app.PeoplesCollection = Backbone.Collection.extend({
    model: app.SinglePeople,
    fetch: app.PeopleService.getData
});

