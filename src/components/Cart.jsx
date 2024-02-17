import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { clearItems } from "./CartSlice";

const Cart = () => {
  const data = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearAll = () => {
    dispatch(clearItems());
  };
  return (
    <div>
      <div className="text-center">
        <h1 className=" m-6 p-4 font-bold text-2xl text-center"> My Cart</h1>
        <button
          className=" p-2 mb-4 rounded bg-green-100  font-semibold"
          onClick={clearAll}
        >
          Clear Cart
        </button>
        {data.length === 0 && (
          <h1 className="text-lg font-semibold">
            Cart is Empty. Add items to the Cart!!!
          </h1>
        )}
      </div>
      <CategoryItems categoryItems={data} />
    </div>
  );
};
export default Cart;
