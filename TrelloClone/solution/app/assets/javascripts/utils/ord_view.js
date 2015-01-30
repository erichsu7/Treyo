/*
 * Mixin for Views
 * Using view must define:
 * orderOptions: {
 *   modelElement: 'modelElementSelector',
 *   modelName: 'modelName',
 *   subviewContainer: 'selector'
 * }
 */
TrelloClone.Utils.OrdView = {
  resortSubviews: function() {
    var subviews = this.subviews(this.orderOptions.subviewContainer);
    subviews.sort(function(subview1, subview2) {
      return subview1.model.get('ord') - subview2.model.get('ord');
    });
  },
  saveOrds: function() {
    var itemElements = this.$(this.orderOptions.modelElement),
        idAttribute = this.orderOptions.modelName + '-id',
        collection = this.collection;
    itemElements.each(function(index, element) {
      var $itemElement = $(element),
          itemId = $itemElement.data(idAttribute);
      var item = collection.get(itemId);
      if (item.get('ord') === index) {
        return;
      }
      item.save({ord: index});
    }.bind(this));
    collection.sort();
    if (this.orderOptions.subviewContainer) {
      this.resortSubviews();
    }
  }
};
