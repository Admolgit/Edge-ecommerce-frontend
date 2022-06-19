import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Layout from "../Pages/Layout";
// import API from "../../config";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  // Destructure the form values
  const { name, email, password, success, error } = formValues;

  const handleChange = (name) => (event) => {
    setFormValues({ ...formValues, error: false, [name]: event.target.value });
  };

  const signup = (user) => {
    // console.log(name, email, password);
    return fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormValues({ ...formValues, error: false });
    signup({ name, email, password })
      .then((data) => {
        // console.log(data.message);
        if (data.error) {
          console.log(data.error.message);
          setFormValues({ ...formValues, error: data.error, success: false });
        } else {
          setFormValues({
            ...formValues,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
  };

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label htmlFor="name" className="text-muted">
          Name
        </label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="text-muted">
          Email
        </label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="text-muted">
          Password
        </label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>

      <button onClick={handleSubmit} className="btn btn-primary">
        Sign up
      </button>
    </form>
  );

  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className="alert alert-info" style={{ display: success ? "" : "none" }}>
      New account is created. Please <Router><Link to="/signin">sign in.</Link></Router>
    </div>
  );

  return (
    <Layout
      title="Signup Page"
      description="React E-commerce App"
      className="container col-md-8 offset-md-2"
    >
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  );
};

export default Signup;
