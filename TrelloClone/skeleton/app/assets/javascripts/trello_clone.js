window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    TrelloClone.boards = new TrelloClone.Collections.Boards();
    
    new TrelloClone.Routers.BoardsRouter({ "$rootEl": $("#main") });
    Backbone.history.start();
  }
};