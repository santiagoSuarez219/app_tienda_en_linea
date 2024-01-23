import { useState, useEffect } from "react";
import Layaout from "../../Components/Layaout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <Layaout>
      <div className="w-full h-full overflow-y-auto px-4 pb-4 md:px-6 md:pb-6 grid gap-4 md:gap-6 grid-cols-[repeat(auto-fit,minmax(224px,1fr))] justify-items-center">
        {items.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layaout>
  );
};
export default Home;
