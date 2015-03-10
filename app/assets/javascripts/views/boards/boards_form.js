TrelloClone.Views.BoardsForm = Backbone.View.extend({
  tagName: "form",

  events: {
    "submit": "createBoard",
    "click .cancel-form-button": "hide"
  },

  template: JST["boards/boards_form"],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  createBoard: function (event) {
    event.preventDefault();
    var that = this;
    var $currentTarget = $(event.currentTarget);
    var params = $currentTarget.serializeJSON();
    var newBoard = new TrelloClone.Models.Board(params.board);

    newBoard.save({}, {
      success: function (board) {
        that.collection.add(board);
        var url = "/api/boards/" + board.id;
        Backbone.history.navigate(url, { trigger: true });
      }
    })
  },

  hide: function () {
    this.$el.parent().css("display", "none");
    $(".boards-form-button").toggle();
  }
});
