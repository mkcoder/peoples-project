var app = app || {};


app.SinglePeople = Backbone.Model.extend({
    defaults: {
        url: 'person/',
        interest: 'biking',
        bio: 'a sample bio'
    },
    initialize: function () {        
        console.log('initialize: ', this.toJSON());
        this.on('change', function (evt, change) {
            console.log('evt', evt);
            console.log('change', change);
            console.log('changed', this.toJSON());
            let changed = evt.changed;
            let key = Object.keys(changed)[0];
            console.log('changed: ' + key );                
            console.log('previous value: ', evt._previousAttributes[key]);
            console.log('new value: ', changed[key]);
        });
        this.on('change:interest', function () {
            console.log(this.get("first_name") + " changed interest to " + this.get("interest"));
        })
    },
    fetch: app.PeopleService.getDataById
});