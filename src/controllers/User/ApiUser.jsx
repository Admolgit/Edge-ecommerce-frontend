// import axios from 'axios'

export const GetProducts = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products/all`, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
