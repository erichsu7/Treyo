TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({

  template: JST["boards/boards_index"],
  className: "boards-index",

  initialize: function () {
    var that = this;
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addIndexItem);
    this.collection.each( function (board) {
      that.addIndexItem(board);
    });
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();

    var boardsForm = new TrelloClone.Views.BoardsForm({ collection: TrelloClone.boards });
    this.$el.append(boardsForm.render().$el);

    return this;
  },

  addIndexItem: function (board) {
    var indexItemView = new TrelloClone.Views.BoardsIndexItem({ model: board });
    this.addSubview(".boards-list", indexItemView);
  }
});
