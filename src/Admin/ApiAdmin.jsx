
const createCategory = (userId, token, category) => {
  // console.log(name, email, password);
  return fetch(`http://localhost:8000/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export default createCategory;