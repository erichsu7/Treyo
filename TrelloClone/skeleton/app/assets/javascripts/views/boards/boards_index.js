TrelloClone.Views.BoardsIndex = Backbone.View.extend({

  template: JST["boards/boards_index"],

  initialize: function () {
    this.listenTo(this.collection, "add sync", this.render);
  },

  render: function () {
    var that = this;
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    this.collection.each( function (board) {
      var indexItemView = new TrelloClone.Views.BoardsIndexItem({ model: board });
      that.$el.prepend(indexItemView.render().$el);
    });

    return this;
  }
});
