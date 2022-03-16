const Card = (props) => {
  const { title, categoryName, brand, imageUrl, price } = props.product;
  return (
    <div className="card m-2 up-curve-border">
        <img className=" up-curve-border" src={imageUrl}></img>
      <div className="card_main pl-3 mt-2 mb-1">
        <div className="card_topic mb-1">{title}</div>
        <div className="card_author">{categoryName}</div>
      </div>
      <div className="card_content pl-3 pr-1 mt-2">Rs.{price}</div>
      <div className="card_footer mt-2 mb-2 pl-3">
        <div className="card_buttons">
          <div className="card_button">Add to wishlist</div>
          <div className="card_button">Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
