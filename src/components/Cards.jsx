import { FOOD } from "./utils";
const Cards = (props) => {
  const { resData } = props;
  return (
    <div
      data-testid="Cards"
      className="w-44 bg-gray-200 m-4 p-2  break-words rounded-lg  shadow-lg"
    >
      <img
        className="w-40 h-32 break-words rounded-lg"
        src={FOOD + resData.info.cloudinaryImageId}
      />
      <h3 className="text-center text-lg text font-bold">
        {resData.info.name}
      </h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
    </div>
  );
};

export const PromotedRestaurants = (Cards) => {
  return (props) => {
    return (
      <div>
        <p className="absolute p-2 text-white bg-black">Promoted</p>
        <Cards {...props} />
      </div>
    );
  };
};
export default Cards;
