import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function EditCardForm({ card, onClose, onSave }) {

  const [formData, setFormData] = useState({
    title: card.title,
    description: card.description,
    price: card.price,
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };


  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Edit Card</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// import React from 'react';


// export default function EditCardForm({ card, onClose, onSave }) {
//   const [formData, setFormData] = React.useState({
//     title: card.title,
//     description: card.description,
//     price: card.price
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
//     <div className="modal show d-block">
//       <div className="modal-dialog">
//         <form className="modal-content" onSubmit={handleSubmit}>
//           <div className="modal-header">
//             <h5 className="modal-title">Edit Card</h5>
//             <button type="button" className="btn-close" onClick={onClose}></button>
//           </div>
//           <div className="modal-body">
//             <input type="text" name="title" value={formData.title} onChange={handleChange} className="form-control mb-2" />
//             <textarea name="description" value={formData.description} onChange={handleChange} className="form-control mb-2"></textarea>
//             <input type="number" name="price" value={formData.price} onChange={handleChange} className="form-control mb-2" />
//           </div>
//           <div className="modal-footer">
//             <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
//             <button type="submit" className="btn btn-primary">Save changes</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
