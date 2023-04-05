// import axios from 'axios'

const createCategory = async (userId, token, category) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/category/create/${userId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(category),
      }
    );
    return await response.json();
  } catch (err) {
    return console.log(err.message);
  }
};

export const createProduct = async (userId, token, product) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/product/create/${userId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: product,
      }
    );
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getCategories = async (token) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/categories/all`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export default {
  createCategory,
  createProduct,
  getCategories,
};
