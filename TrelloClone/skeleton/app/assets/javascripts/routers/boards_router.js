TrelloClone.Routers.BoardsRouter = Backbone.Router.extend({

  routes: {
    "": "boardsIndex"
  },

  initialize: function () {
    this.collection = new TrelloClone.Collections.Boards();
  },

  boardsIndex: function () {
    var that = this;
    this.collection.fetch({
      success: function () {
        var boardsForm = new TrelloClone.Views.BoardsForm({ collection: that.collection });
        var indexView = new TrelloClone.Views.BoardsIndex({ collection: that.collection });
        $("#main").html(indexView.render().$el);
        $("#main").append(boardsForm.render().$el);
      }
    })
  }

});
