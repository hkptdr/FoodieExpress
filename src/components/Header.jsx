import { LOGO } from "./utils";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import Context from "./Context";
import { useSelector } from "react-redux";
const Header = () => {
  const [login, setLogin] = useState("Login");

  const { loginName } = useContext(Context);

  const itemCarts = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-gray-500 text-white  shadow-lg shadow-gray-500/50">
      <img src={LOGO} className="w-10" />
      <ul className="flex">
        <li className="mx-4 p-4">
          OnlineStatus : {useOnlineStatus() ? "🟢" : "🔴"}
        </li>
        <li className="mx-4 p-4 hover:-translate-y-1 ">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="mx-4 p-4  hover:-translate-y-1">
          <Link to={"/about"}>About Us</Link>
        </li>
        <li className="mx-4 p-4  hover:-translate-y-1">
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li className="mx-4 p-4  hover:-translate-y-1">
          <Link to={"/grocery"}> Grocery</Link>
        </li>
        <li className="mx-4 p-4  hover:-translate-y-1">
          <Link to={"/cart"}>Cart({itemCarts.length} items)</Link>
        </li>
        <button
          className="px-4 mx-4 border border-gray rounded-lg  hover:-translate-y-1"
          onClick={() => {
            if (login === "Login") setLogin("Logout");
            else setLogin("Login");
          }}
        >
          {login}
        </button>
        <li className="mx-4 p-4 text-green-100">{loginName}</li>
      </ul>
    </div>
  );
};

export default Header;
