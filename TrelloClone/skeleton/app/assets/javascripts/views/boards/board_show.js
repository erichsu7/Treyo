TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  template: JST["boards/board_show"],
  className: "boards-show",

  initialize: function () {
    var that = this;
    this.listenTo(this.model, "sync change", this.render);
    this.listenTo(this.model.lists(), "add", this.addList);
    this.model.lists().each(function (list) {
      that.addList(list);
    });
  },

  render: function () {
    var that = this;

    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();

    var listsForm = new TrelloClone.Views.ListsForm({ model: this.model, collection: this.model.lists() })
    this.$el.append(listsForm.render().$el);

    return this;
  },

  addList: function (list) {
    var listView = new TrelloClone.Views.ListShow({ model: list });
    this.addSubview(".lists-list", listView);
  }
});
