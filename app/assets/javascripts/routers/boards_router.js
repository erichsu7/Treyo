TrelloClone.Routers.BoardsRouter = Backbone.Router.extend({

  routes: {
    "": "boardsIndex",
    "api/boards/:board_id": "boardShow"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.boards = new TrelloClone.Collections.Boards();
    this.boards.fetch();
  },

  boardsIndex: function () {
    var that = this;
    var indexView = new TrelloClone.Views.BoardsIndex({ collection: this.boards });
    
    that._swapView(indexView);
  },

  boardShow: function (id) {
    var board = this.boards.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({ model: board });

    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this. _currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
