import { useEffect, useState } from "react";
import { useFilters } from "../../context/filter-context";
import "./Filters.css";

const Filters = () => {
  const [rangeval, setRangeval] = useState(null);
  const {
    productListState: { sortBy, byStock, byFastDelivery, byRating, byCategory },
    productListDispatch,
  } = useFilters();

  useEffect(() => {
    productListDispatch({type: 'SORT_BY_RANGE', payload: rangeval})
  }, [rangeval])


  const filterHandler = (e, category) => {
    if (e.target.checked) {
      productListDispatch({ type: "FILTER_BY_CATEGORY", payload: category });
    } else {
      productListDispatch({ type: "REMOVE_CATEGORY", payload: category });
    }
  };


  return (
    <div className="container ml-3 mt-5">
      <div className="filter_heading">
        <p className="left m-1">Search By Filters</p>
        <button
          className="btn btn_primary filter_clear m-1"
          onClick={() => productListDispatch({ type: "CLEAR_FILTERS" })}
        >
          Clear
        </button>
      </div>
      <div className="filter_body m-2">
        <label className="mt-1">
          <input
            type="radio"
            name="radio"
            className="mr-1"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={() =>
              productListDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
            }
          />
          Price: Low to High
        </label>
        <label className="mt-1">
          <input
            type="radio"
            name="radio"
            className="mr-1"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() =>
              productListDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
            }
          />
          Price: High to Low
        </label>
        <hr className="mt-2" />
        <div>
          <input
            type="range"
            className="custom-range mt-2 "
            value={rangeval}
            min="1500"
            max="5200"
            defaultValue="1500"
            onChange={(e) => setRangeval(e.target.value)}
          />
          <div className="filter_heading">
          <div>₹1500</div>
          <div className="filter_clear">₹5200</div>
          </div>
        </div>
        <hr className="mt-2" />

        <label className="mt-1">
          <input
            type="checkbox"
            className="mr-1"
            checked={byStock}
            onChange={() =>
              productListDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
          />
          Include: Out of stock
        </label>
        <label className="mt-1">
          <input
            type="checkbox"
            className="mr-1"
            checked={byFastDelivery}
            onChange={() =>
              productListDispatch({
                type: "FILTER_BY_DELIVERY",
              })
            }
          />
          Only Fast Delivery
        </label>
        <hr className="mt-2" />
        <label className="mt-1">
          <input
            type="radio"
            name="rating"
            className="mr-1"
            checked={byRating === 4}
            onChange={() =>
              productListDispatch({ type: "FILTER_BY_RATING", payload: 4 })
            }
          />
          4 stars and above
        </label>
        <label className="mt-1">
          <input
            type="radio"
            name="rating"
            className="mr-1"
            checked={byRating === 3}
            onChange={() =>
              productListDispatch({ type: "FILTER_BY_RATING", payload: 3 })
            }
          />
          3 stars and above
        </label>
        <label className="mt-1">
          <input
            type="radio"
            name="rating"
            className="mr-1"
            checked={byRating === 2}
            onChange={() =>
              productListDispatch({ type: "FILTER_BY_RATING", payload: 2 })
            }
          />
          2 stars and above
        </label>
        <label className="mt-1">
          <input
            type="radio"
            name="rating"
            className="mr-1"
            checked={byRating === 1}
            onChange={() =>
              productListDispatch({ type: "FILTER_BY_RATING", payload: 1 })
            }
          />
          1 stars and above
        </label>
        <hr className="mt-2" />
        <label className="mt-1">
          <input
            type="checkbox"
            checked={byCategory.includes("Casuals")}
            className="mr-1"
            onChange={(e) => filterHandler(e, "Casuals")}
          />
          Casual Shoes
        </label>
        <label className="mt-1">
          <input
            type="checkbox"
            checked={byCategory.includes("Sports")}
            className="mr-1"
            onChange={(e) => filterHandler(e, "Sports")}
          />
          Sports Shoes
        </label>
        <label className="mt-1">
          <input
            type="checkbox"
            checked={byCategory.includes("Loafers")}
            className="mr-1"
            onChange={(e) => filterHandler(e, "Loafers")}
          />
          Loafers
        </label>
        <label className="mt-1">
          <input
            type="checkbox"
            checked={byCategory.includes("Chelsea")}
            className="mr-1"
            onChange={(e) => filterHandler(e, "Chelsea")}
          />
          Chelsea
        </label>
      </div>
    </div>
  );
};

export default Filters;
