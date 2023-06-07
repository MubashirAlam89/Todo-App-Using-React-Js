/* eslint-disable react/prop-types */
import DeleteIcon from "../assets/deleteicon.png";
import TickIcon from "../assets/tickicon.png";
import "./todo.css";

export const TodoItem = ({ title, deleteTodo }) => {
  const taskCompleted = (e) => {
    e.target.parentElement.previousSibling.style.textDecoration =
      "line-through";
  };
  return (
    <div className="todo-item" id="todo-1">
      <p className="todo-task-title">{title}</p>
      <div className="icons-container">
        <img className="todo-icon" src={TickIcon} onClick={taskCompleted} />
        <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
      </div>
    </div>
  );
};
