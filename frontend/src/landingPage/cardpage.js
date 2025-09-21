import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import EditCardForm from "./EditCardForm";
import { API_URL } from "../api";

export default function CardPage() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/allcards`)
      .then(res => setCards(res.data))
      .catch(err => console.error("Axios Error:", err));
  }, []);

    const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this card?")) return;
      await axios.delete(`${API_URL}/cards/${id}`);
      setCards((prevCards) => prevCards.filter((card) => card._id !== id));

  };
  
const handleUpdateSave = async (formData) => {
  if (!selectedCard?._id) return;

  try {
    const res = await axios.put(`${API_URL}/cards/${selectedCard._id}`, formData);
    setCards(prev => prev.map(card => card._id === selectedCard._id ? res.data : card));
    setSelectedCard(null);
    alert("Card updated successfully!");
  } catch (err) {
    console.log(err)
    alert("Failed to update card.");
  }
};




  return (
    <div className="container py-5">
      <div className="row g-4">
        {cards.map(card => (
          <div key={card._id} className="col-12 col-sm-6 col-lg-3">
            <div 
              className="card position-relative h-100 shadow-sm" 
              style={{ overflow: "hidden", cursor: "pointer" }}
            >
              {/* Placeholder image */}
              <div
                className="card-img-top bg-light d-flex align-items-center justify-content-center"
                style={{ height: "200px" }}
              >
                <span className="text-muted">Image</span>
              </div>

              {/* Card Body */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text flex-grow-1">{card.description}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold">${card.price}</span>
                  <button className="btn btn-warning btn-sm">Buy Now</button>
                </div>
              </div>

              {/* Update/Delete Buttons */}
              <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2 card-buttons">
                <button 
                  className="btn btn-primary btn-sm d-flex align-items-center gap-1"
                  onClick={() => setSelectedCard(card)}
                >
                  <FaEdit /> Update
                </button>
                <button 
                  className="btn btn-danger btn-sm d-flex align-items-center gap-1"
                  onClick={() => handleDelete(card._id)}
                >
                  <FaTrash /> Delete
                </button>
              </div>

              {/* Hover Effects */}
              <style jsx>{`
                .card-buttons {
                  opacity: 0;
                  transition: opacity 0.3s, transform 0.3s;
                  transform: translateY(-10px);
                  z-index: 10;
                }

                .card:hover .card-buttons {
                  opacity: 1;
                  transform: translateY(0);
                }

                .card:hover {
                  transform: scale(1.03);
                  transition: transform 0.3s, box-shadow 0.3s;
                  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                }
              `}</style>
            </div>
          </div>
        ))}
      </div>

        {selectedCard && (
        <EditCardForm 
          card={selectedCard} 
          onClose={() => setSelectedCard(null)} 
          onSave={handleUpdateSave} 
        />
      )}
    </div>
  );
}

