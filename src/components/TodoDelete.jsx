import React from 'react';

const TodoDelete = ({ onDelete, taskID }) => {
  const handleDelete = () => {
    onDelete(taskID); 
  };

  return (
    <div className="modal fade" id={`DeleteConfirmationModal-${taskID}`} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Task</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this task?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleDelete}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDelete;
