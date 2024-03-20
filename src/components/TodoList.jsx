import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';
import DeleteCompleted from './DeleteCompletedModal';
import DeleteAll from './DeleteAllModal';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [allComplete, setAllComplete] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const handleAddTodo = (text) => {
    const newTodo = { 
      id: Date.now(), 
      text, 
      completed: false, 
      createdAt: new Date().toISOString()
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleEditTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleMarkAllComplete = () => {
    const updatedTodos = todos.map((todo) => ({ ...todo, completed: true }));
    setTodos(updatedTodos);
    setAllComplete(true);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleMarkAllIncomplete = () => {
    const updatedTodos = todos.map((todo) => ({ ...todo, completed: false }));
    setTodos(updatedTodos);
    setAllComplete(false);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleDeleteCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleDeleteAll = () => {
    setTodos([]);
    localStorage.removeItem('todos');
  };

  const completedTasksCount = todos.filter((todo) => todo.completed).length;
  const totalTasksCount = todos.length;

  return (
    <>
    <div className="header">
      <h1 className="py-3 text-center text-white">TO-DO LIST</h1>
      <div className="w-50 mx-auto mb-4 border border-light-subtle" />
      <TodoAdd onAdd={handleAddTodo} />

      <div className="container w-75">
        <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
            <span className="text-secondary">{completedTasksCount} out of {totalTasksCount} tasks completed</span>
            {allComplete ? (
              <>
                <button className="btn btn-primary d-flex gap-2 align-items-center" onClick={handleMarkAllIncomplete}>
                  <FiSquare />
                  Mark all as Incomplete
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-primary d-flex gap-2 align-items-center" onClick={handleMarkAllComplete}>
                  <FiCheckSquare />
                  Mark all as Complete
                </button>
              </>
            )}
        </div>


          <div className="card-body">
          {todos.length === 0 ? (
              <p className="text-center text-muted">Task lisk is empty.</p>
            ) : (
              <ul className="list-group list-group-flush">
                {todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onEdit={handleEditTodo}
                    onDelete={handleDeleteTodo}
                    onToggle={() => handleToggleTodo(todo.id)}
                  />
                ))}
              </ul>
            )}
          </div>

          <div className="card-footer">
            <div className="d-flex gap-2 d-md-flex justify-content-end">
              <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#DeleteCompletedModal">Delete Completed</button>
              <DeleteCompleted onDelete={handleDeleteCompleted} />
              <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#DeleteAllModal">Delete All</button>
              <DeleteAll onDelete={handleDeleteAll}  />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TodoList;
