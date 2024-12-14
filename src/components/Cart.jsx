import  { useState } from "react";

const CartPage = () => {
  // Example cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Chicken Noodles",
      price: 7.79,
      image: "https://images.pexels.com/photos/5338138/pexels-photo-5338138.jpeg",
      quantity: 2,
    },
    {
      id: 2,
      name: "Hamburger",
      price: 15.99,
      image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg",
      quantity: 1,
    },
  ]);

  const handleIncrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };


  const handleDecrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

 
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="h-screen bg-orange-50 p-6 md:p-12">
        <h1 className="text-3xl font-bold mb-6">Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white rounded-lg shadow-md p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    {item.name}
                  </h2>
                  <p className="text-orange-500 font-bold">${item.price}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="px-3 py-1 bg-gray-200 text-black font-bold rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-black font-bold">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="px-3 py-1 bg-gray-200 text-black font-bold rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-xl font-bold text-black">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-black mb-4">Order Summary</h2>
          <div className="flex justify-between text-black text-lg mb-2">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-black text-lg mb-2">
            <span>Tax (5%)</span>
            <span>${(totalPrice * 0.05).toFixed(2)}</span>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between text-black text-xl font-bold">
            <span>Total</span>
            <span>${(totalPrice * 1.05).toFixed(2)}</span>
          </div>
          <button className="mt-6 w-full px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
