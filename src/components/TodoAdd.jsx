import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";


const TodoAdd = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      onAdd(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleAdd}>
      <div class="container w-75 input-group mb-3">
        <input 
        type="text" 
        class="form-control form-control-secondary" value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new a task..."
        required
        />
        <button class="btn btn-secondary btn-lg" type="submit"><FiPlus /></button>
      </div>
    </form>
  );
};

export default TodoAdd;
