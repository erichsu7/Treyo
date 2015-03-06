window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  Events: {},
  initialize: function() {
    new TrelloClone.Routers.BoardsRouter({ "$rootEl": $("#main") });
    Backbone.history.start();
  }
};
