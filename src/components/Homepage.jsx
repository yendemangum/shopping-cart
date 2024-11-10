import { useEffect, useState } from "react";
import homepage from "../styles/homepage.module.css";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Homepage() {
  const [imgArray, setImgArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRequest = async () => {
      setIsLoading(true);
      const data = await fetch(`https://fakestoreapi.com/products?limit=8`);
      const dataJ = await data.json();
      setImgArray(dataJ);
      setIsLoading(false);
    };

    fetchRequest();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className={homepage.homepage}>
      <h1 className={homepage.h1}>Welcome to YendeShop.com!</h1>
      <div className={homepage.grid}>
        {imgArray.map((value) => (
          // eslint-disable-next-line react/jsx-key
          <Link to="/shop">
            <img
              src={value.image}
              alt={value.title}
              key={value.id}
              className={homepage.img}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
