import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Pages/Layout";
import isAuthenticated from "../../auth/showSign"

const Dashboard = () => {

  const { user: { name, email, role } } = isAuthenticated();

  const userLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">My Cart</Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/profile/update">Update Profile</Link>
          </li>
          {/* <li className="list-group-item">
            <Link to="/signout">Signout</Link>
          </li> */}
        </ul>
      </div>
    );
  }

  const adminLinks = () => {
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

  const purchaseHistory = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase Information</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/dashboard/profile" className="btn btn-primary">
              Profile
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/dashboard/settings" className="btn btn-primary">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <Layout title="Dashboard" description={`G'day ${name}`} className="container-fluid">
      <div className="row">
        <div className="col-3">{userLinks()}</div>
        <div className="col-9">
          {adminLinks()}
          {purchaseHistory()}
        </div>
      </div>
    </Layout>
  )
};

export default Dashboard;