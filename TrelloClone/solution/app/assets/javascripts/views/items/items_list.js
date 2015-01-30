TrelloClone.Views.ItemsList = Backbone.CompositeView.extend({
  initialize: function () {
    this.itemFormView = new TrelloClone.Views.ItemForm({
      model: new TrelloClone.Models.Item(),
      collection: this.collection
    });
    this.addSubview('.item-list-form', this.itemFormView);
    this.collection.each(this.addItemView.bind(this));
    this.listenTo(this.collection, 'add', this.addItemView);
  },

  addItemView: function (item) {
    var itemView = new TrelloClone.Views.ItemShow({
      model: item
    });
    this.addSubview('.item-list-items', itemView);
  },

  template: JST['items/list'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
