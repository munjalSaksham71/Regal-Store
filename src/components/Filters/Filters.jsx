import { Action } from "history";
import { useFilters } from "../../context/filter-context";
import "./Filters.css";

const Filters = () => {
  const {
    productListState: { sortBy, byStock, byFastDelivery, byRating, byCategory },
    productListDispatch,
  } = useFilters();

  const changeHandler = (e) => {
    if(e.target.checked){
      productListDispatch({ type: "FILTER_BY_CATEGORY", payload: e.target.value })
    } else {
    console.log("Unchecked")
  }
}

  console.log({ sortBy, byStock, byFastDelivery, byRating, byCategory });
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
            checked={sortBy === "LOW_TO_HIGH" ? true : false}
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
            checked={sortBy === "HIGH_TO_LOW" ? true : false}
            onChange={() =>
              productListDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
            }
          />
          Price: High to Low
        </label>
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
            checked={byRating === 4 ? true : false}
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
            checked={byRating === 3 ? true : false}
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
            checked={byRating === 2 ? true : false}
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
            checked={byRating === 1 ? true : false}
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
            checked={byCategory.includes("Casuals") ? true : false}
            onChange={() =>
              productListDispatch({ type: "FILTER_BY_CATEGORY", payload: 'Casuals' })
            }
          />
          Casual Shoes
        </label>
        <label className="mt-1">
          <input
            type="checkbox"
            checked={byCategory.includes("Sports") ? true : false}
            onChange={() =>
              productListDispatch({ type: "FILTER_BY_CATEGORY", payload: 'Sports' })
            }
          />
          Sports Shoes
        </label>
        <label className="mt-1">
          <input
            type="checkbox"
            checked={byCategory.includes("Loafers") ? true : false}
            onChange={() =>
              productListDispatch({ type: "FILTER_BY_CATEGORY", payload: 'Loafers' })
            }
          />
          Loafers
        </label>
        <label className="mt-1">
          <input
            type="checkbox"
            checked={byCategory.includes("Chelsea") ? true : false}
            onChange={() =>
              productListDispatch({ type: "FILTER_BY_CATEGORY", payload: 'Chelsea' })
            }
          />
          Chelsea
        </label>
      </div>
    </div>
  );
};

export default Filters;
