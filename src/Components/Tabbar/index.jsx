const Tabbar = () => {
  return (
    <div className="w-full h-16 bg-card-color text-sm fixed bottom-0 flex items-center">
      <ul className="w-full flex justify-around px-4">
        <li>MyOrders</li>
        <li>MyAccount</li>
        <li>SignIn</li>
        <li>Carrito</li>
      </ul>
    </div>
  );
};
export default Tabbar;
