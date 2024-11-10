import { useOutletContext } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import shop from "../styles/shop.module.css";
import Loading from "./Loading";

let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Shop() {
  const [cardArray, setCardArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { handlePurchase, handleChange, resetCart, total } = useOutletContext();

  useEffect(() => {
    const fetchRequest = async () => {
      setIsLoading(true);
      const data = await fetch(`https://fakestoreapi.com/products`);
      const dataJ = await data.json();
      setCardArray(dataJ);
      setIsLoading(false);
    };

    fetchRequest();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className={shop}>
      <div className={shop.topshop}>
        <div className={shop.total}>Total: {USDollar.format(total)}</div>
        <button onClick={resetCart} className={shop.checkout}>
          Checkout
        </button>
      </div>
      <h1 className={shop.h1}>
        Browse our selection of {cardArray.length} quality products
      </h1>
      <div className={shop.grid}>
        {cardArray.map((value) => (
          <Card
            src={value.image}
            alt={value.title}
            price={value.price}
            id={value.id}
            key={value.id}
            onSubmit={handlePurchase}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
