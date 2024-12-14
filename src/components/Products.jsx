import  { useState } from "react";
import Button from "../layouts/Buttons";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Atho",
      price: 7.79,
      image: "https://images.pexels.com/photos/13065187/pexels-photo-13065187.jpeg",
      rating: 3.8,
    },
    {
      id: 2,
      name: "Hamburger",
      price: 15.99,
      image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg",
      rating: 4.3,
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    rating: "",
  });

  const [showForm, setShowForm] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };


  const handleAddProduct = () => {
    const { name, price, image, rating } = newProduct;
    if (!name || !price || !image || !rating) {
      alert("Please fill out all fields before adding the product.");
      return;
    }

    const newProductEntry = {
      id: products.length + 1,
      name,
      price: parseFloat(price),
      image,
      rating: parseFloat(rating),
    };

    setProducts((prev) => [...prev, newProductEntry]);
    setNewProduct({ name: "", price: "", image: "", rating: "" }); 
    setShowForm(false); 
  };


  const handleRemoveProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
      <h1 className="text-center text-3xl font-semibold mb-10">Our Products</h1>

      
      <div className="flex justify-end text-center mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          {showForm ? "Close Form" : "Add New Product"}
        </button>
      </div>

      
      {showForm && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4">Add Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="rating"
              placeholder="Rating (1-5)"
              step="0.1"
              value={newProduct.rating}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            <button
              onClick={handleAddProduct}
              className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Submit Product
            </button>
          </div>
        </div>
      )}

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden relative"
          >
            
            <button
              onClick={() => handleRemoveProduct(product.id)}
              className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600"
            >
              X
            </button>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-medium">{product.name}</h2>
              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < Math.round(product.rating)
                        ? "text-orange-400"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xl font-bold text-gray-800">
                ${product.price.toFixed(2)}
              </p>
              <Button title="Add to Cart" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
