import "./Filters.css";

const Filters = () => {
  return (
    <div className="container ml-3 mt-5">
      <div className="filter_heading">
        <p className="left m-1">Search By Filters</p>
        <p className="filter_clear m-1">Clear</p>
      </div>
      <div className="filter_body m-2">
        <label className="mt-1">
          <input type="radio" value="increase" name="radio" /> Price: Low to High
        </label>
        <label className="mt-1">
          <input type="radio" value="decrease" name="radio" /> Price: High to Low
        </label> <hr className="mt-2" />

        <label className="mt-1">
          <input type="checkbox" /> Include: Out of stock
        </label>
        <label className="mt-1">
          <input type="checkbox" /> Only Fast Delivery
        </label> <hr className="mt-2" />
        <label className="mt-1">
          <input type="checkbox" /> 4 stars and above
        </label>
        <label className="mt-1">
          <input type="checkbox" />  3 stars and above
        </label>
        <label className="mt-1">
          <input type="checkbox" />  2 stars and above
        </label>
        <label className="mt-1">
          <input type="checkbox" />  1 stars and above
        </label> <hr className="mt-2" />
        <label className="mt-1">
          <input type="checkbox" />  Casual Shoes
        </label>
        <label className="mt-1">
          <input type="checkbox" />  Sports Shoes
        </label>
        <label className="mt-1">
          <input type="checkbox" />  Loafers
        </label>
        <label className="mt-1">
          <input type="checkbox" />  Chelsea
        </label>
      </div>
    </div>
  );
};

export default Filters;
