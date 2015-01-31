TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["lists/list_show"],
  tagName: 'li',

  initialize: function (options) {
    // this.board = options.board;
  },

  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);

    return this;
  }
});
