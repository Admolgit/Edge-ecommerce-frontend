import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Layout from "../controllers/Pages/Layout";
import isAuthenticated from "../auth/showSign";
import { getCategories } from "./ApiAdmin";

const GetCategory = () => {
  const [data, setData] = useState([]);
  const [length, setLength] = useState(0);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // Destructure name and token from localStorage
  const { user, token } = isAuthenticated();

  useEffect(() => {
    const fetchCategory = async () => {
      setError("");
      setSuccess(false);
      // Api call from Get Category
      const response = await getCategories(token);
      console.log(response, "response");
      if (!response) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setData(response.lists);
        setLength(response.listsLength);
      }
    };
    fetchCategory();
  }, []);

  console.log(data, "data");

  const showSuccess = () => {
    if (success) {
      return <h3 className='text-success'>Categories fetched successfully</h3>;
    }
  };

  const showError = () => {
    if (error) {
      return <h3 className='text-danger'>Categories not fetched</h3>;
    }
  };

  const categories = () => {
    return (
      <>
        <p className='mb-4 mt-4'>Number of categories: {length}</p>
        <table className="card">
          <thead>
            <tr>
              <td className='card-header w-[100%]'>Name</td>
            </tr>
          </thead>
          <tbody>
            {data.map((category) => {
              return (
                <>
                  <tr key={category._id}>
                    <td className="list-group-item">{category.name}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <Layout
      title='Add a new category'
      description={`G'day ${user.name}, ready to add a category`}
      text='Go back'
    >
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          {showSuccess()}
          {showError()}
          {categories()}
        </div>
      </div>
    </Layout>
  );
};

export default GetCategory;
