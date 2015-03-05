TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  template: JST["boards/boards_index_item"],
  tagName: "li",
  className: "boards-index-item",

  events: {
    "click .delete": "destroyBoard"
  },

  render: function () {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);

    return this;
  },

  destroyBoard: function () {
    this.model.destroy();
  }
});
