TrelloClone.Views.CardsForm = Backbone.View.extend({
  template: JST["cards/cards_form"],

  tagName: "form",

  events: {
    "submit": "createCard"
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  createCard: function (event) {
    event.preventDefault();

    var that = this;
    var $currentTarget = $(event.currentTarget);
    var params = $currentTarget.serializeJSON();
    params.card.list_id = this.model.id;
    var card = new TrelloClone.Models.Card(params.card);
    card.save({}, {
      success: function () {
        that.collection.add(card);
      }
    })
  }
});
