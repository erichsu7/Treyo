TrelloClone.Views.ListsForm = Backbone.View.extend({
  template: JST["lists/lists_form"],

  events: {
    "submit form": "createList"
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  createList: function (event) {
    event.preventDefault();

    var that = this;
    var $currentTarget = $(event.currentTarget);
    var params = $currentTarget.serializeJSON();
    params.list.board_id = this.model.id;
    var list = new TrelloClone.Models.List(params.list);

    list.save({}, {
      success: function () {
        that.collection.add(list);
      }
    })

  }
});
