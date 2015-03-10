TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({

  template: JST["boards/boards_index"],
  className: "boards-index",

  events: {
    "click .boards-form-button": "showBoardsForm"
  },

  initialize: function () {
    var that = this;
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addIndexItem);
    this.listenTo(this.collection, "remove", this.removeIndexItem);
    this.collection.each( function (board) {
      that.addIndexItem(board);
    });
    this.addBoardsForm();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  },

  addBoardsForm: function () {
    var boardsForm = new TrelloClone.Views.BoardsForm({ collection: this.collection });
    this.addSubview(".boards-form", boardsForm);
  },

  addIndexItem: function (board) {
    var indexItemView = new TrelloClone.Views.BoardsIndexItem({ model: board });
    this.addSubview(".boards-list", indexItemView);
  },

  removeIndexItem: function (board) {
    var that = this;
    var indexItemView;
    _(this.subviews()).each(function (subviews) {
      indexItemView = _.findWhere(subviews, { model: board });
      if (indexItemView) {
        that.removeSubview(".boards-list", indexItemView);
      };
    });
  },

  showBoardsForm: function (event) {
    this.$(".boards-form-button").toggle();
    this.$(".boards-form").toggle();
    this.$("#board_title").focus();
  }


});
