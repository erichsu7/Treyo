TrelloClone.Views.ListsForm = Backbone.View.extend({
  template: JST["lists/lists_form"],
  tagName: "form",

  events: {
    "submit": "saveList",
    "click .cancel-form-button": "hide"
  },

  initialize: function (options) {
    this.board = options.board;
  },

  render: function () {
    var renderedContent = this.template({ model: this.model });
    this.$el.html(renderedContent);

    return this;
  },

  saveList: function (event) {
    event.preventDefault();

    var that = this;
    var $currentTarget = $(event.currentTarget);
    var params = $currentTarget.serializeJSON();
    if (!this.model) {
      params.list.board_id = this.board.id;
      var list = new TrelloClone.Models.List();
    } else {
      var list = this.model;
    }

    list.save(params.list, {
      success: function () {
        that.collection && that.collection.add(list);
        this.model = null;
        this.render();
      }
    });
    that.hide();
  },

  hide: function () {
    this.$el.parent().css("display", "none");
    this.$el.parent().siblings().toggle();
  }
});
