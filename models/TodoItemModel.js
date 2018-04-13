class TodoItemModel {
  constructor(description) {
    this.uuid = Math.random();
    this.description = description;
    this.checked = false;
  }
}

export default TodoItemModel;
