TrelloClone.Utils.SaveOrder = function ($ul, collection) {
  if (collection.length > 0) {
    var i = 1;
    $ul.children().each(function (index, li) {
      var $li = $(li);
      var model = collection.get($li.data("id"));
      model.set("ord", i);
      model.save();
      i++;
    });
  }
};
