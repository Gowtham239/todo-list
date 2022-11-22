// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItems, deleteList} = props
  const {title, id} = todoItems

  const onDelete = () => {
    deleteList(id)
  }

  return (
    <li className="todo-list">
      <p className="title-name">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
