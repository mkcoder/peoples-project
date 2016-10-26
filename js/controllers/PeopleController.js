var app = app || {};
Controller = app.Controller || {};

Controller.People = function () {
  return {
    getAll: function () {
      debugger;
      console.log('hello');
      app.peopleService.getData()
      .then(function (data) {
        app.Peoples = new app.PeoplesCollection(data) 
        var PeopleListView = new app.PeopleListView({collection: app.Peoples});
        $("#app").html(PeopleListView.render().el);
      });
    },
    getPersonById: function (id) {
        app.peopleService.getDataById(id)        
        .then(function (data) {
          let person = new app.SinglePeople(data.attributes);          
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