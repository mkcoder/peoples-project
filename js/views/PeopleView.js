var app = app || {};

app.PeopleListView = Backbone.View.extend({

    className: "peoples",
    template: _.template ( document.getElementById("peopleTemplate").innerHTML ),
    render: function () {
        var self = this;         
        this.collection.each( function (person) {
            var personTemplate = self.template(person.toJSON());
            self.$el.append(personTemplate);
        });
        return this;
    }
});