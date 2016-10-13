var app = app || {};

var PeopleService = function (url) {
   return {
       getData: function () {
           return fetch(url).then(function (response) {
                        return response.text();
                    })
                    .then(function (text) {
                        return Promise.resolve(JSON.parse(text));
                    })
                    .then(function(json) {
                        return json;
                    })
                    .catch(function (err) {
                        console.error(err);
                    });
       }
   } 
}
app.peopleService = new PeopleService(app.BASE_URL);