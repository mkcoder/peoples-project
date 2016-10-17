var app = app || {};

app.PeopleListView = Backbone.View.extend({

    tagName: "tbody",
    className: "single-person",
    template: _.template ( document.getElementById("singlePerson").innerHTML ),
    render: function () {
        var self = this;         
        this.collection.each( function (person) {
            var personTemplate = self.template(person.toJSON());
            self.$el.append(personTemplate);
        });
        return this;
    }
});