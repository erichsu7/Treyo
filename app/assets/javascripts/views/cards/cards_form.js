TrelloClone.Views.CardsForm = Backbone.View.extend({
  template: JST["cards/cards_form"],

  tagName: "form",

  events: {
    "submit": "saveCard",
    "click .cancel-form-button": "hide"
  },

  initialize: function (options) {
    this.list = options.list;
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  saveCard: function (event) {
    event.preventDefault();

    var that = this;
    var $currentTarget = $(event.currentTarget);
    var params = $currentTarget.serializeJSON();

    if (!this.model) {
      params.card.list_id = this.list.id;
      var card = new TrelloClone.Models.Card();
    } else {
      var card = this.model;
    }

    card.save(params.card, {
      success: function () {
        that.collection && that.collection.add(card);
        that.render();
      }
    })
  },

  hide: function (event) {
    this.$el.parent().css("display", "none");
    this.$el.parent().siblings().toggle();
  }
});
