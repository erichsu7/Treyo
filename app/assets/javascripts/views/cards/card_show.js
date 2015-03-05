TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST["cards/card_show"],
  className: "card-show",

  attributes: function () {
    return {
      "data-id": this.model.id,
      "data-ord": this.model.escape("ord")
    };
  },

  events: {
    "click .delete": "destroyCard"
  },

  render: function () {
    var renderedContent = this.template({ card: this.model });
    this.$el.html(renderedContent);

    return this;
  },

  destroyCard: function () {
    this.model.destroy();
  }
});
