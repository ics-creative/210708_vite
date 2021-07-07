import { TodoItem } from './TodoItem'
import $ from 'jquery'

/** TODOリストのUL要素のID */
const LIST_UL_ID = '#todoList'
/** TodoItemの配列 */
const items: TodoItem[] = []

/**
 * todoアイテムの表示要素(li)を作成します
 * @param item
 */
const createTodoItemLi = (item: TodoItem) => {
  return $(`
    <li id="${item.id}">
      <p>${item.text}</p>
      <button>削除</button>
    </li>
  `)
}

/**
 * 新しいTODOアイテムを追加します
 * @param text
 * @return 追加したアイテムのID
 */
export const addTodo = (text: string) => {
  const item = new TodoItem(text)
  items.push(item)
  const ul = $(LIST_UL_ID)
  const li = createTodoItemLi(item)
  li.find('button').on('click', () => {
    removeTodo(item.id)
  })
  ul.append(li)
  return item.id
}

/**
 * TODOアイテムを削除します
 * @param id
 */
export const removeTodo = (id: string) => {
  const index = items.findIndex((item) => item.id === id)
  if (index !== -1) {
    items.splice(index, 1)
  }
  const li = $('#' + id)
  li.remove()
}
