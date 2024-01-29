import { useContext, useEffect } from "react";
import Layaout from "../../Components/Layaout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { AppContext } from "../../AppContext";

const Home = () => {
  const { items, setSearchByTitle, filteredItems } = useContext(AppContext);

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return filteredItems?.map((item) => <Card key={item.id} data={item} />);
    } else {
      return <div>{"We don't have anything :("}</div>;
    }
  };

  return (
    <Layaout>
      <div className="w-full flex flex-col px-4 gap-2 text-gray-color items-center justify-center relative lg:w-80 mb-4">
        <h1>Exclusive Products</h1>
        <input
          type="text"
          placeholder="Search a product"
          className="rounded-lg border bg-card-color text-gray-color border-gray-color w-full p-4 focus:outline-none text-center"
          onChange={(event) => {
            setSearchByTitle(event.target.value);
          }}
        />
      </div>
      <div className="w-full h-[calc(100vh-70px-90px)] flex items-center justify-center overflow-y-auto mb-6">
        <div className="w-full h-full max-w-screen-xl grid gap-4 md:gap-6 md:px-9 px-4 lg:grid-cols-4 md:grid-cols-3 grid-rows-[repeat(auto-fit,125px)] md:grid-rows-[repeat(auto-fit,290px)] ">
          {renderView()}
        </div>
      </div>
      <ProductDetail />
    </Layaout>
  );
};
export default Home;
