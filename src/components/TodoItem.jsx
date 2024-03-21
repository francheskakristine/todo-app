import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiSave } from "react-icons/fi";
import TodoDelete from './TodoDelete';

const TodoItem = ({ todo, onEdit, onDelete, onToggle }) => {
  const [editMode, setEditMode] = useState(false); 
  const [newText, setNewText] = useState(todo.text);

  const handleEditChange = (e) => {
    setNewText(e.target.value);
  };

  const handleEditSave = (e) => {
    e.preventDefault(); 
  
    if (newText.trim() !== '') {
      onEdit(todo.id, newText); 
      setEditMode(false);
    }
  };

  const handleEdit = () => {
    setEditMode(true); 
  };

  return (
    <li className={todo.completed ? 'list-group-item completed' : 'list-group-item'}>
      <div className="row align-items-center">
        <div className="col-auto">
          <input type="checkbox" className="todo-checkbox" checked={todo.completed} onChange={onToggle} />
        </div>

        {editMode ? (
          <form onSubmit={handleEditSave} className="col">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-primary"
                value={newText}
                onChange={handleEditChange}
                onBlur={handleEditSave}
                autoFocus
                required
              />
              <button type="submit" className="btn btn-primary"><FiSave /></button>
            </div>
          </form>
        ) : (
          <div className="col">
            <span className={`todo-text ${todo.completed ? 'todo-completed' : 'todo-incomplete'}`}>{todo.text}</span>
          </div>
        )}

        <div className="col">
          <p className="todo-creation-time">Created at: {new Date(todo.createdAt).toLocaleString()}</p>
        </div>
        <div className="col-auto d-flex gap-2">
          <button className="btn btn-primary" onClick={handleEdit}><FiEdit /></button>
          <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target={`#DeleteConfirmationModal-${todo.id}`}><FiTrash2 /></button>
        </div>
      </div>
      <TodoDelete onDelete={() => onDelete(todo.id)} taskID={todo.id} />
    </li>
  );
};

export default TodoItem;
