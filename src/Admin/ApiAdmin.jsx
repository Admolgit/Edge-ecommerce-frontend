
const createCategory = async (userId, token, category) => {
  // console.log(name, email, password);
  try {
    const response = await fetch(`http://localhost:8000/category/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(category)
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};


const createProduct = async (userId, token, product) => {
  // console.log(name, email, password);
  try {
    const response = await fetch(`http://localhost:8000/product/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: product
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export default {
  createCategory,
  createProduct
};