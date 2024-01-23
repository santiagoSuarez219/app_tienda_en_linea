import { useState, useEffect } from "react";
import Layaout from "../../Components/Layaout";
import Card from "../../Components/Card";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <Layaout>
      <div className="w-full h-full overflow-y-auto px-4 grid gap-4 md:gap-6 grid-cols-[repeat(auto-fit,minmax(224px,1fr))] justify-items-center">
        {items.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </Layaout>
  );
};
export default Home;
