class Section {
  constructor({ items, renderer }, cardTemplate) {
    this._items = items;
    this._renderer = renderer;
    this._cardTemplate = cardTemplate;
  }

  renderer() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    this._cardTemplate.append(item);
  }
}
