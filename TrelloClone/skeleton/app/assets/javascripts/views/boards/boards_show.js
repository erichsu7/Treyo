TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({

  template: JST["boards/boards_show"],

  initialize: function () {
    this.listenTo(this.model, "sync change", this.render)
  },

  render: function () {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);

    return this;
  }
});
