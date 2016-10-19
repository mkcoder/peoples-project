var app = app || {};


app.SinglePersonView = Backbone.View.extend({
    className: 'singlePersonView',
    template: _.template(document.getElementById('singlePersonTemplate').innerHTML),
    render: function () {
        var person = this.template(this.model.toJSON());            
        this.$el.append(person)
        return this;
    }
});