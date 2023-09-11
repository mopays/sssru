import React from 'react';
import './cart.css'; // Import the CSS file

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: 'AMD CPU Ryzen 7 7800X3D 4.20 Ghz 8C/16T AM5',
      price: 17600,
      quantity: 1,
      image: 'https://media-cdn.bnn.in.th/296993/amd-ryzen7-7800x3d-1-square_medium.jpg',
    },
    {
      id: 2,
      name: 'AMD CPU Ryzen 9 7900X3D 4.4GHz 12C/24T AM5',
      price: 22590,
      quantity: 1,
      image: 'https://media-cdn.bnn.in.th/280791/amd-ryzen9-7900x3d-1-square_medium.jpg',
    },
  
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = () => {
    alert('Payment functionality will be added soon!');
  };


  const handleContinueShopping = () => {
    alert('Continue shopping functionality will be added soon!');
  };

  return (
    <div className="cart">
      <div className="cart-header">Your Cart</div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price}</span>
              <span className="item-quantity">Quantity: {item.quantity}</span>
            </div>
          </div>
        ))}
        {cartItems.length === 0 && <div className="empty-cart-message">Your cart is empty.</div>}
      </div>
      {cartItems.length > 0 && <div className="total-price">Total Price: ${totalPrice}</div>}
      <div className="buttons-container">
            <button className="continue-shopping-button" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
            <button className="payment-button" onClick={handlePayment}>
              Payment
            </button>
          </div>
        </div>
      )}
    <div/>
    
export default Cart;