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
    "click .delete": "toggleDropdown",
    "dblclick .list-title": "showListsForm",
    "sortupdate .cards-list": "saveCardOrder",
    "sortstart .cards-list": "cardDrag",
    "sortstop .cards-list": "cardDrop",
    "click .cards-form-button": "showCardsForm"
  },

  initialize: function (options) {
    var that = this;
    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
    this.listenTo(this.model.cards(), "remove", this.removeCard);
    this.model.cards().each(function (card) {
      that.addCard(card);
    });
    this.addCardsForm();
    this.addListsForm();
  },

  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.onRender();

    return this;
  },

  toggleDropdown: function () {
    if (this.dropdown) {
      this.dropdown.remove();
      this.dropdown = null;
      this.$(".delete").removeClass("fa fa-caret-square-o-up")
      this.$(".delete").addClass("fa fa-caret-square-o-down");
    } else {
      this.dropdown = new TrelloClone.Views.ListDropdown({ model: this.model });
      this.addSubview(".delete-dropdown-container", this.dropdown);
      this.$(".delete").removeClass("fa fa-caret-square-o-down");
      this.$(".delete").addClass("fa fa-caret-square-o-up")
    }
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

  addListsForm: function (event) {
    var listsForm = new TrelloClone.Views.ListsForm({ model: this.model });
    this.addSubview(".list-show-lists-form", listsForm);
  },

  showListsForm: function (event) {
    $(event.target).toggle();
    $(event.target).siblings().filter("i").toggle();
    this.$(".list-show-lists-form").toggle();
    this.$("#list_title").focus();
  },

  addCardsForm: function () {
    var cardsForm = new TrelloClone.Views.CardsForm({ list: this.model, collection: this.model.cards() });
    this.addSubview(".cards-form", cardsForm);
  },

  showCardsForm: function (event) {
    $(event.target).toggle();
    this.$(".cards-form").toggle();
    this.$("#card_title").focus();
  },

  onRender: function () {
    $(".cards-list").sortable({
      placeholder: "card-placeholder",
      connectWith: ".cards-list"
    });
  },

  saveCardOrder: function (event, ui) {
    var that = this;
    var id = ui.item.data("id");
    var $ul = this.$(".cards-list");
    var listId = $ul.data("list-id");
    var cards = this.model.cards();
    if (!cards.get(id)) {
      var card = new TrelloClone.Models.Card();
      card.set({
        id: id,
        list_id: listId
      });
      card.save([], {
        success: function () {
          cards.add(card, { silent: true });
          TrelloClone.Utils.SaveOrder($ul, cards, card);
        }
      });
    } else {
      TrelloClone.Utils.SaveOrder($ul, cards);
    }

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
