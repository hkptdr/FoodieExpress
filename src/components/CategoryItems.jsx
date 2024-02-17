import { useDispatch } from "react-redux";
import { FOOD } from "./utils";
import { addItem } from "./CartSlice";
const CategoryItems = ({ categoryItems }) => {
  const itemList = categoryItems;

  const dispatch = useDispatch();
  const cartAdd = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <ul>
        {itemList.map((item) => (
          <div
            key={item.card.info.id}
            className=" mx-[330px] my-4 p-2 bg-gray-50 text-left rounded-lg shadow-lg flex justify-between"
          >
            <div>
              <li className="font-semibold">{item.card.info.name} </li>
              <li className="font-semibold text-gray-900">
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </li>
              <p className="text-xs text-gray-400">
                {item.card.info.description}
              </p>
            </div>
            <button
              onClick={() => cartAdd(item)}
              className="bg-black rounded-lg text-white my-6 justify-center text-center mx-2 px-4 hover:-translate-y-1 "
            >
              Add+
            </button>
            <img
              className="w-20 justify-end"
              src={FOOD + item?.card?.info?.imageId}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};
export default CategoryItems;
