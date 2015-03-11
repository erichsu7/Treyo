TrelloClone.Views.CardShow = Backbone.CompositeView.extend({
  template: JST["cards/card_show"],
  className: "card-show",

  attributes: function () {
    return {
      "data-id": this.model.id,
      "data-ord": this.model.escape("ord")
    };
  },

  events: {
    "click .edit": "showCardsForm",
    "click .delete-card-button": "destroyCard"
  },

  initialize: function () {
    this.listenTo(this.model, "change", this.render);
  },

  render: function () {
    this.cardsForm = null;
    var renderedContent = this.template({ card: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  },

  showCardsForm: function (event) {
    if (!this.cardsForm) {
      this.addCardsForm();
    }
    $(event.target).parent().toggle();
    this.$(".card-show-cards-form").toggle();
    this.$el.addClass("hide-border-bottom");
    this.$("#card_title").focus();
  },

  addCardsForm: function () {
    this.cardsForm = new TrelloClone.Views.CardsForm({ model: this.model });
    var $div = $("<div class=\"card-show-cards-form\">");
    this.$el.append($div);
    this.addSubview(".card-show-cards-form", this.cardsForm);
  },

  destroyCard: function (event) {
    event.preventDefault();
    this.model.destroy();
  }
});
