import React, { useState } from 'react';
import '../styles/Cart.css'
const products = [
  {
    id: 1,
    name: 'Paneer Tikka',
    price: '200$',
    image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG',
  },
  {
    id: 2,
    name: 'Mandi Biryani ',
    price: '200$',
    image: 'https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.webp?b=1&s=170667a&w=0&k=20&c=cL2fbP4UF9nbp6BmCP3B0wm_XSXUiJ1aGtiotSyiFg4=',
  },
  // Add more products as needed
];

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-container" >
      <h2 style={{marginBottom:'10%'}}>Shopping Cart</h2>
      <div className="product-list" >
        {products.map(product => (
          <div className="product-item" key={product.id} style={{backgroundColor:'white'}}>
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            <button className='addButton' >Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3 style={{marginBottom:'5%'}}>Cart Summary</h3>
        


        <p style={{textAlign:'left', marginTop:'5%'} }>Total Items: {2}</p>
        <p style={{textAlign:'right'}}>Total Amount: 400 $</p>
        
        
      </div>
    </div>
  );
};  

export default Cart;
