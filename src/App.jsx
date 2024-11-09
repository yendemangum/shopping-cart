import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [items, setItems] = useState(0);
  const [total, setTotal] = useState(0);

  const handlePurchase = (purchase) => setTotal(total + purchase);

  const handleChange = (amount) => setItems(items + amount * 1);

  const resetCart = () => {
    setTotal(0);
    setItems(0);
  };

  return (
    <div>
      <Navbar items={items} />
      <Outlet
        context={{
          handlePurchase,
          handleChange,
          resetCart,
          total,
          items,
        }}
      />
    </div>
  );
}

export default App;