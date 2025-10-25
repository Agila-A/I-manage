import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <div className="container-fluid py-5">
          <h1 className="display-4 fw-bold text-dark">Welcome to Inventory Management System!</h1>
          <p className="fs-5 text-muted">Your one-stop solution for managing products, tracking stock, and optimizing your business operations efficiently.</p>
          <hr className="my-4" />
          <Link className="btn btn-primary btn-lg me-2" to="/signup" role="button">Get Started</Link>
          <Link className="btn btn-outline-secondary btn-lg" to="/login" role="button">Login</Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="row text-center g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-success">Product Management</h5>
              <p className="card-text">Easily add, view, update, and delete products from your inventory. Keep your database accurate and up-to-date.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-success">Stock Tracking</h5>
              <p className="card-text">Monitor stock levels in real-time. Receive alerts for low inventory to avoid running out of popular items.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-success">User-Friendly Interface</h5>
              <p className="card-text">A simple and intuitive design that makes managing your inventory a breeze, even for new users.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <div className="p-4 bg-secondary text-white rounded-3 shadow-sm">
            <h3>Ready to take control of your inventory?</h3>
            <p className="lead">Join thousands of businesses who trust our system to manage their products.</p>
            <Link className="btn btn-light btn-lg mt-3" to="/signup" role="button">Join Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;