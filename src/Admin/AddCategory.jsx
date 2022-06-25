import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../controllers/Pages/Layout";
import isAuthenticated from "../auth/showSign";

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
    if(name === '') {
      setError('Name is required');
    } else {
      const category = {
        name,
        user: user._id,
        token
      }
      fetch('http://localhost:8000/api/category', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.error) {
          setError(data.error);
        } else {
          setName('');
          setSuccess(data.message);
        }
      }
      )
      .catch(err => console.log(err));
    }
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
        />
      </div>
      <button className="btn btn-outline-primary">Add Category</button>
    </form>
    );
  }

  return (
    <Layout title="Add a new category" description={`G'day ${user.name}, ready to add a category`}>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            {newCategoryForm()}
          </div>
        </div>
    </Layout>
  );
}

export default AddCategory;