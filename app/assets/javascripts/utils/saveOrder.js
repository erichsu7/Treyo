TrelloClone.Utils.SaveOrder = function ($ul, collection, newModel) {
  if (collection.length > 0) {
    var i = 1;
    $ul.children().each(function (index, li) {
      var $li = $(li);
      var id = $li.data("id");
      var model = collection.get(id) || newModel;
      model.set("ord", i);
      $li.attr("data-ord", i)
      model.save([]);
      i++;
    });
  }
};
