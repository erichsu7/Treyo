TrelloClone.Views.BoardsForm = Backbone.View.extend({

  template: JST["boards/boards_form"],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  }
});
