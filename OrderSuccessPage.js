// OrderSuccessPage.js
import React, { useState } from 'react';

const OrderSuccessPage = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [foodItem, setFoodItem] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data
    console.log(`Order placed successfully for ${name}`);
    console.log(`Phone Number: ${phoneNumber}`);
    console.log(`Food Item: ${foodItem}`);
    console.log(`Quantity: ${Quantity}`);
    console.log(`Address: ${address}`);
    console.log(`Payment Method: ${paymentMethod}`);
    // Display success message or navigate to another page
    alert('Your order has been placed successfully!');
  };

  return (
    <div>
      <h1>ORDER THE ITEM</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="foodItem">Food Item:</label>
          <input
            type="text"
            id="foodItem"
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            id="quantity"
            value={Quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OrderSuccessPage;
