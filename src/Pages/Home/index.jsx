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
      <div className="w-full flex flex-col px-4 gap-2 text-gray-color items-center justify-center relative lg:w-80 mb-4">
        <h1>Exclusive Products</h1>
        <input
          type="text"
          placeholder="Search a product"
          className="rounded-lg border bg-card-color text-gray-color border-gray-color w-full p-4 focus:outline-none text-center"
        />
      </div>
      <div className="w-full grid gap-4 px-4 overflow-y-auto grid-cols-[repeat(auto-fit,minmax(224px,1fr))]">
        {items.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      {/* <div className="w-full h-full overflow-y-auto px-4 pb-4 md:px-6 md:pb-6 grid gap-4 md:gap-6 grid-cols-[repeat(auto-fit,minmax(224px,1fr))] justify-items-center">
        {items.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div> */}
      <ProductDetail />
    </Layaout>
  );
};
export default Home;
