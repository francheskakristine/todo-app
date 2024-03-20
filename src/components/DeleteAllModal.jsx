import React from 'react';

const DeleteAll = ({ onDelete }) => {
  return (
    <div className="modal fade" id="DeleteAllModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Delete All Tasks</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete all tasks?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onDelete}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAll;
