import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Layout from "../controllers/Pages/Layout";
import isAuthenticated from "../auth/showSign";
import { createProduct, getCategories } from "./ApiAdmin";

const AddProduct = () => {
  const { user, token } = isAuthenticated();
  const [values, setValue] = useState({
    name: "",
    description: "",
    price: "",
    category: [],
    shipping: "",
    quantity: "",
    image: "",
    loading: false,
    error: "",
    createdProduct: "",
    redirectToProfile: false,
    formData: "",
  });

  const {
    // name,
    // description,
    // price,
    // category,
    // shipping,
    // quantity,
    // image,
    // loading,
    // error,
    // createdProduct,
    // redirectToProfile,
    formData,
  } = values;

  const productCategory = async () => {
    const initCategory = await getCategories();

    console.log(initCategory)

    if (initCategory.error) {
      setValue({ ...values, error: initCategory.error });
    } else {
      setValue({ ...values, category: initCategory, formData: new FormData() });
    }
    
  };

  // This runs when the component mounts and when component updates
  useEffect(() => {
    productCategory();
  }, []);

  // console.log(values.category)

  const handleChange = (name) => (event) => {
    const value = name === "image" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValue({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setValue({ ...values, error: "", loading: true });

    const data = await createProduct(user._id, token, formData);
    // .then(data => {
    if (data.error) {
      setValue({ ...values, error: data.error });
    } else {
      setValue({
        ...values,
        name: "",
        description: "",
        price: "",
        quantity: "",
        image: "",
        loading: false,
        createdProduct: data.name,
      });
    }
    // })
  };

  const categ = values.category.lists;

  console.log(categ);

  const getTicketType = () => {
    return categ && categ.map((item) => {
      return (
        <option
          key={item._id}
          value={item._id}
        >
          {item.name}
        </option>
      );
    });
  };

  const newProductForm = () => (
    <form className='mb-3' onSubmit={handleSubmit}>
      <h4>Post Image</h4>
      <div className='form-group'>
        <label htmlFor='image' className='btn btn-secondary'>
          <input
            type='file'
            onChange={handleChange("image")}
            name='image'
            accept='image/*'
          />
        </label>
      </div>

      <div className='form-group'>
        <label htmlFor='name' className='text-muted'>
          Name
        </label>
        <input
          type='text'
          name='name'
          className='form-control'
          value={values.name}
          onChange={handleChange("name")}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='description' className='text-muted'>
          Description
        </label>
        <input
          type='text'
          name='description'
          className='form-control'
          value={values.description}
          onChange={handleChange("description")}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='price' className='text-muted'>
          Price
        </label>
        <input
          type='number'
          name='price'
          className='form-control'
          value={values.price}
          onChange={handleChange("price")}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='category' className='text-muted'>
          Category
        </label>
        <select className='form-control' onChange={handleChange("category")}>
          <option>Select category</option>
          {getTicketType()}
        </select>
      </div>

      <div className='form-group'>
        <label htmlFor='shipping' className='text-muted'>
          Shipping
        </label>
        <select className='form-control' onChange={handleChange("shipping")}>
         <option>Select shipping</option>
          <option value='0'>No</option>
          <option value='1'>Yes</option>
        </select>
      </div>

      <div className='form-group'>
        <label htmlFor='quantity' className='text-muted'>
          Quantity
        </label>
        <input
          type='number'
          name='quantity'
          className='form-control'
          value={values.quantity}
          onChange={handleChange("quantity")}
        />
      </div>

      <button className='btn btn-outline-primary'>Create Product</button>
    </form>
  );

  return (
    <Layout
      title='Add a new product'
      description={`G'day ${user.name}, ready to add a product`}
    >
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          {/* {showSuccess()}
            {showError()} */}
          {newProductForm()}
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;
