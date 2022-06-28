import React, { Fragment } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Signout from "../User/Signout";
import isAuthenticated from "../../auth/showSign";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

// Using destucturing from react router dom because we are using withRouter
const Menu = ({ history }) => {
  
  // const { user: { name } } = isAuthenticated();
  // console.log(isAuthenticated())
  
  return (
    <div>
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/")} to="/">
            Home
          </Link>
        </li>
        {isAuthenticated() && isAuthenticated().user === 0 && (
          <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/user/dashboard")} to="/user/dashboard">
            Dashboard
          </Link>
        </li>
        )}
        {isAuthenticated() && isAuthenticated().user === 1 && (
          <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/admin/dashboard")} to="/admin/dashboard">
            Dashboard
          </Link>
        </li>
        )}

        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/signin")}
                to="/signin"
              >
                Signin
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/signup")}
                to="/signup"
              >
                Signup
              </Link>
            </li>
          </Fragment>
        )}
        {isAuthenticated() && (
          <>
          <li className="nav-item">
            <span
              className="nav-link"
              style={{ cursor: "pointer", color: "white" }}
              onClick={() => Signout(() => {
                history.push("/");
              })}
            >
              Signout
            </span>
          </li>
          <li className="nav-item">
          <span
            className="nav-link"
            style={{ cursor: "pointer", color: "white" }}
            onClick={() => Signout(() => {
              history.push("/");
            })}
          >
            Hello 
          </span>
        </li>
        </>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
