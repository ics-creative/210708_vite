let lastInstanceId = 0

export class TodoItem {
  constructor(text) {
    this.id = 'todo' + lastInstanceId
    this.text = text
    lastInstanceId++
  }
}
