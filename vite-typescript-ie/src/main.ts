import $ from 'jquery'
// CSSファイルもimportで読み込みできます
import './style.css'
// JavaScriptを分割してimportで読み込みできます
import { addTodo } from './TodoList'

// HTMLからTODO入力用input要素を取得
const newInput = $('#itemInput')
// HTMLからTODO追加用button 要素を取得
const addButton = $('#addButton')

// ボタンクリック時にTODOアイテムを追加
addButton.on('click', () => {
  const text = newInput.val()
  if (!text || typeof text !== 'string') return
  addTodo(text)
  newInput.val('')
})

// サンプルのTODOを追加
addTodo('買い物')
addTodo('部屋の掃除')
addTodo('Vite入門')
