import React, { useState } from "react";
import "./modal.css";

function Modal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="text-center mt-5 container">
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="btn btn-success"
        >
          Open Modal
        </button>
        {open && (
          <div className="poppup">
            <div className="modal_title">
              <h4>Modal Title</h4>
              <button
                onClick={() => {
                  setOpen(false);
                }}
              >
                X
              </button>
              <hr />
            </div>
            <div className="modal_body">
              <h4>Moodal Body</h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Modal;
