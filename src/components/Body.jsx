import Cards, { PromotedRestaurants } from "./Cards";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import Context from "./Context";
const Body = () => {
  const [res, setRes] = useState([]);
  const [copyres, setCopyres] = useState(res);
  const [val, setVal] = useState("");
  const { setUserName, loginName } = useContext(Context);
  const PromotedLabel = PromotedRestaurants(Cards);

  const api =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7199008&lng=75.857383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(api);
    const value = await data.json();

    setRes(
      value?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setCopyres(
      value?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (useOnlineStatus() === false) {
    return <h1>Please check your internet connection..</h1>;
  }

  if (res.length === 0) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="body">
      <div className="flex justify-between ">
        <div className="my-8 p-6 flex">
          <input
            data-testid="searchInput"
            className="mr-4  border border-grey-50 rounded-lg"
            type="text"
            placeholder="Search your Restaurant"
            value={val}
            onChange={(event) => {
              setVal(event.target.value);
            }}
          />
          <button
            className="py-2 px-4 border border-gray-100 rounded-lg hover:-translate-y-1"
            onClick={() => {
              const selectedArray = res.filter((element) =>
                element.info.name.toUpperCase().includes(val.toUpperCase())
              );
              setCopyres(selectedArray);
            }}
          >
            Search
          </button>

          <input
            className="mx-4 border border-grey-50 rounded-lg"
            type="text"
            placeholder="UserName"
            value={loginName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </div>

        <button
          className="h-10 mt-14 mr-4 p-2 border text-center justify-center"
          onClick={() => {
            const filteredArray = copyres.filter(
              (data) => data.info.avgRating > 4
            );
            setCopyres(filteredArray);
          }}
        >
          Filter Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {copyres.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {true ? (
              <PromotedLabel resData={restaurant} />
            ) : (
              <Cards resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
