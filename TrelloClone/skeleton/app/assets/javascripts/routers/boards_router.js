TrelloClone.Routers.BoardsRouter = Backbone.Router.extend({

  routes: {
    "": "boardsIndex",
    "api/boards/:board_id": "boardShow"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  boardsIndex: function () {
    var that = this;
    TrelloClone.boards.fetch({
      success: function () {
        var indexView = new TrelloClone.Views.BoardsIndex({ collection: TrelloClone.boards });
        that._swapView(indexView);
      }
    })
  },

  boardShow: function (id) {
    var board = TrelloClone.boards.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({ model: board });

    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this. _currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
