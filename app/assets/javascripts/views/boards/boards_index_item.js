TrelloClone.Views.BoardsIndexItem = Backbone.CompositeView.extend({
  template: JST["boards/boards_index_item"],
  tagName: "li",
  className: "boards-index-item",

  render: function () {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);

    return this;
  },
});
