import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../controllers/Pages/Layout";
import isAuthenticated from "../auth/showSign";
import createCategory from "./ApiAdmin";

const AddCategory = () => {

  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // Destructure name and token from localStorage
  const { user, token } = isAuthenticated();

  const handleChange = (event) => {
    setError('');
    console.log(event.target.value);
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setError('');
    setSuccess(false);
    // Api call from Add Category
    createCategory(user._id, token, {name})
      .then(data => {
        if (data.error) {
          setError(true);
        } else {
          setError('')
          setSuccess(true);
        }
      }
    )
  }

  const newCategoryForm = () => {
    return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={handleChange}
          autoFocus
          required
        />
      </div>
      <button className="btn btn-outline-primary">Add Category</button>
    </form>
    );
  }

  const showSuccess = () => {
    if (success) {
      return <h3 className="text-success">{name} added successfully</h3>
    }
  }

  const showError = () => {
    if (error) {
      return <h3 className="text-danger">{error}</h3>
    }
  }

  return (
    <Layout title="Add a new category" description={`G'day ${user.name}, ready to add a category`}>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            {showSuccess()}
            {showError()}
            {newCategoryForm()}
          </div>
        </div>
    </Layout>
  );
}

export default AddCategory;