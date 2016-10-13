var app = app || {};

 
Promise.resolve(app.peopleService.getData().then(function (data){ return new app.PeoplesCollection(data); }))
.then(function (peopleCollectionGroup) {

  var singlePeopleView = new app.singlePeopleView({collection: peopleCollectionGroup});
  $("#peoples-table thead").after(singlePeopleView.render().el);

});


