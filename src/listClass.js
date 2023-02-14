export default function createList(name) {
    return {
      name: name,
      class: 'addedTodoList',
      removeList() {
        document.getElementById(name).remove();
      },
    };
  }