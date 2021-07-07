let lastInstanceId = 0

export class TodoItem {
  readonly id: string
  readonly text: string

  constructor(text: string) {
    this.id = 'todo' + lastInstanceId
    this.text = text
    lastInstanceId++
  }
}
