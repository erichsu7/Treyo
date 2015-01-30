TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: '/api/cards',

  items: function () {
    if(!this._items) {
      this._items = new TrelloClone.Collections.Items([], { card: this });
    }
    return this._items;
  },

  parse: function (resp) {
    if(resp.items) {
      this.items().set(resp.items, { parse: true });
      delete resp.items;
    }
    return resp;
  }
});
