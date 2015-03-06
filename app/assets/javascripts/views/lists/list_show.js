TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["lists/list_show"],
  tagName: 'li',
  className: "list-show",

  attributes: function () {
    return {
      "data-id": this.model.id,
      "data-ord": this.model.escape("ord")
    };
  },

  events: {
    "click .delete": "destroyList",
    "sortupdate .cards-list": "saveCardOrder",
    "sortstart .cards-list": "cardDrag",
    "sortstop .cards-list": "cardDrop"
  },

  initialize: function (options) {
    // this.board = options.board;
    var that = this;
    // this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
    this.listenTo(this.model.cards(), "remove", this.removeCard);
    this.model.cards().each(function (card) {
      that.addCard(card);
    });
    this.addCardsForm();
  },

  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.onRender();

    return this;
  },

  destroyList: function () {
    this.model.destroy();
  },

  addCard: function (card) {
    var cardView = new TrelloClone.Views.CardShow( { model: card });
    this.addSubview(".cards-list", cardView);
  },

  removeCard: function (card) {
    var that = this;
    var cardView;
    _(this.subviews()).each(function (subviews) {
      cardView = _.findWhere(subviews, { model: card });
      if (cardView) {
        that.removeSubview(".cards-list", cardView);
      };
    });
  },

  addCardsForm: function () {
    var cardsForm = new TrelloClone.Views.CardsForm({ model: this.model, collection: this.model.cards() });
    this.addSubview(".cards-form", cardsForm);
  },

  onRender: function () {
    $(".cards-list").sortable({
      placeholder: "card-placeholder"
    });
  },

  saveCardOrder: function (event, ui) {
    console.log("save card order");
    var $ul = this.$(".cards-list");
    var cards = this.model.cards();
    TrelloClone.Utils.SaveOrder($ul, cards);
    event.stopPropagation();
  },

  cardDrag: function (event, ui) {
    ui.item.addClass("dragged");
    ui.placeholder.height(ui.helper.height());
    event.stopPropagation();
  },

  cardDrop: function (event, ui) {
    ui.item.removeClass("dragged");
    event.stopPropagation();
  }
});
