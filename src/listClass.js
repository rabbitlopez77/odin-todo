export default function createList(name, content) {
    return {
      name: name,
      content: content,
      class: 'addedTodoList',
      getList() {
        return name + ' ' + content;
      },
    };
  }