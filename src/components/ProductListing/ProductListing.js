import Card from '../Card/Card';
import './productListing.css'

const ProductListing = ({ products }) => {
    return (
    <>
      <p className="heading2 mt-2 center">Latest Products</p>
      <div className="products">
        {products.map((product) => (
         <Card key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductListing;
