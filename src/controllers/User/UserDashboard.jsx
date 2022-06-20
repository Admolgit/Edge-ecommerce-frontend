import React from "react";
import Layout from "../Pages/Layout";
import isAuthenticated from "../../auth/showSign"

const Dashboard = () => {

  const { user: { _id, name, email, role } } = isAuthenticated();

  return (
    <Layout title="Dashboard" description="User Dashboard Area" className="container">
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

      <div className="card mb-5">
        <h3 className="card-header">Purchase Information</h3>
        <ul className="list-group">
          <li className="list-group-item">
            {/* <Link to="/dashboard/profile" className="btn btn-primary"> */}
              Profile
            {/* </Link> */}
          </li>
          <li className="list-group-item">
            {/* <Link to="/dashboard/settings" className="btn btn-primary"> */}
              Settings
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </Layout>
  )
};

export default Dashboard;