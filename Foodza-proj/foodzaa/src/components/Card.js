
import React, { useState } from 'react';
import '../styles/RestaurantCard.css'
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Cartslice';
function  RestaurantCard ({ imageUrl, restname,Rating,price, Area}) {

  const dispatch=useDispatch()
  const [cartCount, setCartCount] = useState(0);


  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    dispatch(add(imageUrl, restname,Rating,price, Area))
    
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={restname} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{restname}</h2>
        <p className="card-description">{Rating}</p>
        <p className="card-description">{Area}</p>
        <p className="card-description">{price}</p>
        <button className='add-button' onClick={()=>handleAddToCart()}>Add to cart</button>
      </div>
    </div>
  );
};

export default RestaurantCard;