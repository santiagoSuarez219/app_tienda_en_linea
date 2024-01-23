const Card = (data) => {
  return (
    <div className="bg-card-color cursor-pointer w-56 mx-auto rounded-lg">
      <figure className="relative mb-2 w-full h-[192px]">
        <span className="absolute bottom-0 left-0 bg-card-color rounded-lg text-green-color text-xs m-2 px-3 py-0.5">
          {data.data.category}
        </span>
        <img
          className="w-full h-full aspect-square object-cover rounded-t-lg"
          src={data.data.image}
          alt={data.data.title}
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-card-color text-green-color w-6 h-6 rounded-full m-2 p-1">
          +
        </div>
      </figure>
      <p className="flex gap-2 justify-between px-3 py-3 text-gray-color">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-semi-bold">{data.data.price}$</span>
      </p>
    </div>
  );
};
export default Card;
