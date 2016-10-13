var app = app || {};

app
.peopleService
.getData()
.then(function (data){ new app.PeoplesCollection(data); })
.catch(function (err) { console.log(err); });
