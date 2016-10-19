var app = app || {};
Controller = app.Controller || {};

Controller.People = function () {
  return {
    getAll: function () {
      debugger;
      console.log('hello');
      Promise.resolve(app.peopleService.getData().then(function (data){
        app.Peoples = new app.PeoplesCollection(data) 
        return app.Peoples; 
      }))
      .then(function (peopleCollectionGroup) {
        var PeopleListView = new app.PeopleListView({collection: peopleCollectionGroup});
        $("#app").html(PeopleListView.render().el);
      });
    },
    getPersonById: function (id) {
        
        // TODO: we have to create a single view 
        app.peopleService.getDataById(id)
        .then(function (data) {
          console.clear();
          console.log("app.people", new app.SinglePeople(data.attributes));
          return new app.SinglePeople(data.attributes);
        })
        .then(function (person) {
          console.log("person", person.toJSON());
          var PeopleListView = new app.SinglePersonView({model: person});
          $("#app").empty();
          $("#app").html(PeopleListView.render().el);
      });
     
    }
  };
}

app.PeopleController = new Controller.People();

// right now i think each controller should define the routes
// we might run into issue when an app becomes large we may redefine routes
// other than the default route you should follow a convention where: 
// ControllerName is the route prefix
app.Router = app.Router || {};

app.Router.PeopleRouter = Backbone.Router.extend({
    routes: {
        "person/:id": "getPersonById", 
        "": "getAll",
    },
    getAll: app.PeopleController.getAll,
    getPersonById: app.PeopleController.getPersonById
});

var PeopleRouter = new app.Router.PeopleRouter();
Backbone.history.start();