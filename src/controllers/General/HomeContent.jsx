import React, {useState, useEffect} from 'react';
import isAuthenticated from '../../auth/showSign';
import { GetProducts } from '../User/ApiUser';

const HomeContent = () => {
  const [data, setData] = useState([]);
  const [length, setLength] = useState(0);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // Destructure name and token from localStorage
  const { user, token } = isAuthenticated();

  useEffect(() => {
    const fetchProduct = async () => {
      setError("");
      setSuccess(false);
      // Api call from Get Product
      const response = await GetProducts();
      console.log(response, "response");
      if (!response) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setData(response);
        setLength(response);
      }
    };
    fetchProduct();
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

  const products = () => {
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
    <React.Fragment>
      
    </React.Fragment>
  )
}

export default HomeContent