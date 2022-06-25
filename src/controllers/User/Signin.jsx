import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../Pages/Layout";
import isAuthenticated from "../../auth/showSign"
// import API from "../../config";

const auth = (data, next) => {
  if(typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
}

const Signin = () => {
  const [formValues, setFormValues] = useState({
    email: "adisa89@gmail.com",
    password: "zealous890.",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  // Destructure the form values
  const { email, password, error, loading, redirectToReferrer } = formValues;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setFormValues({ ...formValues, error: false, [name]: event.target.value });
  };

  const signin = (user) => {
    // console.log(name, email, password);
    return fetch("http://localhost:8000/signin", {
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
    setFormValues({ ...formValues, error: false, loading: true });
    signin({ email, password,  })
      .then((data) => {
        // console.log(data.message);
        if (data.error) {
          console.log(data.error.message);
          setFormValues({ ...formValues, error: data.error, loading: false });
        } else {
          auth(data, () => {
            setFormValues({
              ...formValues,
              redirectToReferrer: true,
            });
          })
        }
      })
  };

  const signInForm = () => (
    <form>

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
        Sign in
      </button>
    </form>
  );

  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  const showLoading = () => (
    loading && (<div className="alert alert-info" style={{ display: loading}}>
      <h2>Loading...</h2>
    </div>)
  );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if(user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />
      }
      return <Redirect to="/user/dashboard" />
    }

    if(isAuthenticated()) {
      return <Redirect to="/" />
    }
  };

  return (
    <Layout
      title="Signup Page"
      description="React E-commerce App"
      className="container col-md-8 offset-md-2"
    >
      {showLoading()}
      {showError()}
      {signInForm()}
      {redirectUser()}
    </Layout>
  );
};

export default Signin;
