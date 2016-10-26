var app = app || {};

app.PeopleService = function (url) {
   return {
       getData: function () {
          return fetch(url)
                 .then(function (response) {
                    return response.text();
                 })
                 .then(function (text) {
                    return JSON.parse(text);
                 })
                 .then(function(json) {                        
                    return json;
                 })
                 .catch(function (err) {
                    console.error(err);
                });
       },
       getDataById: function (id) {
           if ( app.Peoples !== undefined ) {
               return Promise.resolve(_.findWhere(app.Peoples.models, {id: parseInt(id)}));
           };
          return fetch(url).then(function (response) {
                    return response.text();
                 })
                 .then(function (text) {
                    return JSON.parse(text);
                 })
                 .then(function(json) {                        
                    return _.findWhere(json, {id: parseInt(id)});
                 })
                 .catch(function (err) {
                    console.error(err);
                 });
       }
   } 
}
app.peopleService = new app.PeopleService(app.BASE_URL);