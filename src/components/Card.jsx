/* 
quantity
add to cart
*/

import { useState } from "react";
import card from "../card.module.css";

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


// eslint-disable-next-line react/prop-types
function Card({ src, alt, price, onSubmit, id, onChange }) {
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    setQuantity(formData.get("quantity"));
    onSubmit(price * quantity);
    onChange(quantity);
  };

  return (
    <div className={card.card}>
      <div className={card.productTitle}>{alt}</div>
      <img src={src} alt={alt} key={id} className={card.img} />
      <form action="" method="post" id={id} onSubmit={handleSubmit} className={card.form}>
        <label htmlFor="quantity" className={card.label}>Quantity: </label>
        <input type="number" name="quantity" id="quantity" min="0" placeholder="1"/>
        <button type="submit" className={card.atc}>Add to cart - {USDollar.format(price)}</button>
      </form>
    </div>
  );
}

export default Card;
