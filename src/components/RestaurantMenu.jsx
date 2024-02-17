import useRestaurantMenu from "./useRestaurantMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import CategoryList from "./CategoryList";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const menuInfo = useRestaurantMenu(resId);

  if (menuInfo === null) return <h1>Loading..</h1>;

  const itemCards =
    menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, cuisines, avgRating } = menuInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <p className="text-sm my-2">{cuisines}</p>
      <p className="font-semibold mb-4 bg-green-300 mx-[640px]">
        {avgRating} stars
      </p>
      <div>
        <h2 className="font-semibold text-xl mb-4">Menu</h2>
        <ul>
          {itemCards.map((item, index) => (
            <li key={item.card.card.title}>
              <CategoryList
                categories={item}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
