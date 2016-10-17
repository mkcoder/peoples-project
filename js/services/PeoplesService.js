var app = app || {};

var PeopleService = function (url) {
   return {
       getData: function () {
           return fetch(url).then(function (response) {
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
           return fetch(url).then(function (response) {
                        return response.text();
                    })
                    .then(function (text) {
                        return JSON.parse(text);
                    })
                    .then(function(json) {
                        let result = undefined;
                        json.forEach(function(item){
                            if ( item.id.toString() === id ) 
                                 result = item;                                
                        });
                        return result;
                    })
                    .catch(function (err) {
                        console.error(err);
                    });
       }
   } 
}
app.peopleService = new PeopleService(app.BASE_URL);