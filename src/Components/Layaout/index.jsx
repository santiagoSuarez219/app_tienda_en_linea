const Layaout = ({ children }) => {
  return (
    <div className="flex flex-col items-center mt-[72px] h-[calc(100vh-72px)]">
      {children}
    </div>
  );
};
export default Layaout;
