TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["lists/list_show"],
  tagName: 'li',

  attributes: function () {
    return {
      "data-id": this.model.id,
      "data-ord": this.model.escape("ord")
    };
  },

  events: {
    "click .delete": "destroyList"
  },

  initialize: function (options) {
    // this.board = options.board;
    var that = this;
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
    this.model.cards().each(function (card) {
      that.addCard(card);
    });
    this.addCardsForm();
  },

  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  },

  destroyList: function () {
    this.model.destroy();
    this.remove();
  },

  addCard: function (card) {
    var cardView = new TrelloClone.Views.CardShow( {model: card });
    this.addSubview(".cards-list", cardView);
  },

  addCardsForm: function () {
    var cardsForm = new TrelloClone.Views.CardsForm({ model: this.model, collection: this.model.cards() });
    this.addSubview(".cards-form", cardsForm);
  }
});
