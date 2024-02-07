// Write your code here
import './index.css'

const TodoItem = props => {
  const {id, name, onDeleteTodo} = props
  const todoDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="todo">
      <p className="todo-para">{name}</p>
      <button type="button" className="delete-btn" onClick={todoDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
