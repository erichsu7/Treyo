TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  template: JST["boards/board_show"],
  className: "boards-show",

  events: {
    "sortupdate .lists-list": "saveListOrder",
    "sortstart .lists-list": "listDrag",
    "sortstop .lists-list": "listDrop",
    "click .lists-form-button": "showListsForm",
  },

  initialize: function () {
    var that = this;
    this.listenTo(this.model, "sync change", this.render);
    this.listenTo(this.model.lists(), "add", this.addList);
    this.listenTo(this.model.lists(), "remove", this.removeList);
    this.model.lists().each(function (list) {
      that.addList(list);
    });
    this.addListsForm();
  },

  render: function () {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.onRender();

    return this;
  },

  addList: function (list) {
    var listView = new TrelloClone.Views.ListShow({ model: list });
    this.addSubview(".lists-list", listView);
  },

  removeList: function (list) {
    var that = this;
    var listView;
    _(this.subviews()).each(function (subviews) {
      listView = _.findWhere(subviews, { model: list });
      if (listView) {
        that.removeSubview(".lists-list", listView);
      };
    });
  },

  addListsForm: function () {
    var listsForm = new TrelloClone.Views.ListsForm({ model: this.model, collection: this.model.lists() })
    this.addSubview(".lists-form", listsForm);
  },

  showListsForm: function () {
    this.$(".lists-form").css("display", "block");
    this.$("#list_title").focus();
  },

  saveListOrder: function (event, ui) {
    console.log("save list order");
    var $ul = ui.item.parent();
    var lists = this.model.lists();
    TrelloClone.Utils.SaveOrder($ul, lists);
  },

  onRender: function () {
    $(".lists-list").sortable({
      placeholder: "list-placeholder"
    });
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) {
        if (subview.onRender) {
          subview.onRender();
        }
      })
    })
    // this.$(".cards-list").sortable({
    //   connectWith: ".cards-list"
    // });
  },

  listDrag: function (event, ui) {
    ui.item.addClass("dragged");
    ui.placeholder.height(ui.helper.height());
  },

  listDrop: function (event, ui) {
    ui.item.removeClass("dragged");
  }
});
