TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],

  className: 'card well well-sm card-display',

  events: {
    'click': 'showModal'
  },

  attributes: function() {
    return {
      'data-card-id': this.model.id
    };
  },

  render: function () {
    var content = this.template({
      card: this.model
    });
    this.$el.html(content);
    return this;
  },

  showModal: function () {
    this.modalView = this.modalView ||
      new TrelloClone.Views.CardModal({ model: this.model });
    $('body').prepend(this.modalView.render().$el);
    this.modalView.delegateEvents();
  },
});
