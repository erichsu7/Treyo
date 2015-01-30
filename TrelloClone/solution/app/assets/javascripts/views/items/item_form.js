TrelloClone.Views.ItemForm = Backbone.View.extend({
  template: JST['items/form'],
  tagName: 'form',

  events: {
    'submit': 'submit'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var title = this.$('.item-title-input').val();
    var params = {
      title: title,
      card_id: this.collection.card.id
    };
    this.collection.create(params, { wait: true });
    this.render();
  }
});
