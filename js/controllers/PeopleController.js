var app = app || {};
app.Router = app.Router || {};

app.Router.PeopleRouter = Backbone.Router.extend({
    routes: {
        "person/:id": "getPersonById", 
        "": "getAll",
    },
    getAll: function () {
      debugger;
      console.log('hello')
      Promise.resolve(app.peopleService.getData().then(function (data){ return new app.PeoplesCollection(data); }))
      .then(function (peopleCollectionGroup) {
        var PeopleListView = new app.PeopleListView({collection: peopleCollectionGroup});
        $("#peoples-table thead").after(PeopleListView.render().el);
      });
    },
    getPersonById: function (id) {
      app.peopleService.getDataById(id)
      .then(function (data){ return new app.PeoplesCollection(data); })
      .then(function (peopleCollectionGroup) {
        var PeopleListView = new app.PeopleListView({collection: peopleCollectionGroup});
        $("#peoples-table thead").after(PeopleListView.render().el);
      });
    }
});

var PeopleRouter = new app.Router.PeopleRouter();
Backbone.history.start();