TrelloClone.Views.CardModal = Backbone.CompositeView.extend({
  template: JST['cards/modal'],

  initialize: function () {
    this.model.fetch();
    this.listenTo(this.model, 'sync', this.render);
    this.itemListView = new TrelloClone.Views.ItemsList({
      collection: this.model.items()
    });

    this.addSubview('.card-modal-items', this.itemListView);
  },

  events: {
    'click .card-modal-dismiss': 'dismiss',
    'click .card-modal-backdrop' : 'dismiss'
  },

  dismiss: function (event) {
    event.preventDefault();
    this.remove();
  },

  render: function () {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
