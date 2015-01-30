TrelloClone.Views.ItemShow = Backbone.View.extend({
  template: JST['items/show'],
  tagName: 'li',

  events: {
    'click .item-done': 'toggleDone'
  },

  toggleDone: function () {
    this.model.set('done', !this.model.get('done'));
    this.model.save();
  },

  render: function () {
    var content = this.template({ item: this.model });
    this.$el.html(content);
    return this;
  }
});
