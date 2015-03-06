TrelloClone.Views.ListDropdown = Backbone.View.extend({
  template: JST["lists/list_dropdown"],

  className: "delete-dropdown",

  events: {
    "click .delete-dropdown-text": "destroyList"
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  destroyList: function () {
    this.model.destroy();
  }
});
