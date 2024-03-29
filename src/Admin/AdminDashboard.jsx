import React from "react";
import { Link } from "react-router-dom";
import Layout from "../controllers/Pages/Layout";
import isAuthenticated from "../auth/showSign"

const AdminDashboard = () => {

  const { user: { _id, name, email, role } } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/create/category">Create Category</Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/create/product">Create Product</Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/users">All Users</Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/products">All Products</Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/category/users">All Categories</Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/signout">Signout</Link>
          </li>
        </ul>
      </div>
    );
  }

  const adminInfo = () => {
    return (
      <div className="card-mb-5">
        <h3 className="card-header">User information</h3>
        <ul className="list-group">
          <li className="list-group-item">
            {name}
          </li>
          <li className="list-group-item">
            {email}
          </li>
          <li className="list-group-item">
            {role === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  }

  return (
    <Layout title="Dashboard" description={`G'day ${name}`} text="Go Back" className="container-fluid">
      <div className="row">
        <div className="col-3">{adminLinks()}</div>
        <div className="col-9">
          {adminInfo()}
        </div>
      </div>
    </Layout>
  )
};

export default AdminDashboard;