import CategoryItems from "./CategoryItems";
const CategoryList = ({ categories, showItems, setShowIndex }) => {
  const clickHandler = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        onClick={() => clickHandler()}
        className="mx-80 my-4 p-4 font-serif flex justify-between cursor-pointer bg-gray-200 rounded-lg shadow-lg"
      >
        <div className="font-semibold text-md ">
          {categories?.card?.card?.title} (
          {categories?.card?.card?.itemCards.length})
        </div>
        <div>🔽</div>
      </div>
      <div>
        {showItems && (
          <CategoryItems categoryItems={categories?.card?.card?.itemCards} />
        )}
      </div>
    </div>
  );
};
export default CategoryList;
