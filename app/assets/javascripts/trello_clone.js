window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    new TrelloClone.Routers.BoardsRouter({ "$rootEl": $("#main") });
    Backbone.history.start();
  }
};
