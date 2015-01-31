TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["lists/list_show"],
  tagName: 'li',

  events: {
    "click button": "destroyList"
  },

  initialize: function (options) {
    // this.board = options.board;
  },

  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);

    return this;
  },

  destroyList: function () {
    this.model.destroy();
    this.remove();
  }
});
