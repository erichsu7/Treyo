TrelloClone.Views.BoardsIndexItem = Backbone.CompositeView.extend({
  template: JST["boards/boards_index_item"],
  tagName: "li",
  className: "boards-index-item",

  events: {
    "click .delete": "toggleDropdown",
  },

  render: function () {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);

    return this;
  },

  toggleDropdown: function () {
    if (this.dropdown) {
      this.dropdown.remove();
      this.dropdown = null;
      this.$(".delete").removeClass("fa fa-caret-square-o-up")
      this.$(".delete").addClass("fa fa-caret-square-o-down");
    } else {
      this.dropdown = new TrelloClone.Views.BoardDropdown({ model: this.model });
      this.addSubview(".delete-dropdown-container", this.dropdown);
      this.$(".delete").removeClass("fa fa-caret-square-o-down");
      this.$(".delete").addClass("fa fa-caret-square-o-up")
    }
  },

});
