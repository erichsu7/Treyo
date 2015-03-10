TrelloClone.Views.BoardDropdown = Backbone.View.extend({
  template: JST["boards/board_dropdown"],

  className: "delete-dropdown",

  events: {
    "click .delete-dropdown-text": "destroyBoard"
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  destroyBoard: function () {
    this.model.destroy();
  }
});
