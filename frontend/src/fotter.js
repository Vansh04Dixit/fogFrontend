import React from "react";
import { FaGem, FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa"; // Using react-icons for icons

export default function Footer() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* High Quality */}
          <div className="col-12 col-md-3 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <FaGem size={30} className="mb-2 text-dark" />
            <h6 className="fw-bold">High Quality</h6>
            <p className="mb-0 text-muted">crafted from top materials</p>
          </div>

          {/* Warranty Protection */}
          <div className="col-12 col-md-3 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <FaShieldAlt size={30} className="mb-2 text-dark" />
            <h6 className="fw-bold">Warranty Protection</h6>
            <p className="mb-0 text-muted">Over 2 years</p>
          </div>

          {/* Free Shipping */}
          <div className="col-12 col-md-3 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <FaTruck size={30} className="mb-2 text-dark" />
            <h6 className="fw-bold">Free Shipping</h6>
            <p className="mb-0 text-muted">Order over $150</p>
          </div>

          {/* 24 / 7 Support */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start">
            <FaHeadset size={30} className="mb-2 text-dark" />
            <h6 className="fw-bold">24 / 7 Support</h6>
            <p className="mb-0 text-muted">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
