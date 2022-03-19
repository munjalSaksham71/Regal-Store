import { Link } from 'react-router-dom';
import { useFilters } from '../../context/filter-context';
import './Categories.css'
const Categories = ({categories}) => {
    const { productListDispatch } = useFilters()
    return (
        <div className="category">   
            {categories.map((category) => (
                <div key={category._id} className="card m-2 up-curve-border">
                <img className="up-curve-border" src={category.image} />
                <div className="card_main pl-3 mt-2 mb-1">
                    <div className="card_topic mb-1">{category.categoryName}</div>
                </div>
                <div className="card_content pl-3 pr-1 mt-2">{category.description}</div>
                <div className="card_footer mt-2 mb-2 pl-3">
                    <div className="card_buttons">
                        <Link to='/products'><button className="btn btn-primary" onClick={() => productListDispatch({type: 'FILTER_BY_CATEGORY', payload: category.categoryName})}>See Products</button> </Link>
                    </div>
                </div>
                </div>
            ))}
            <Link to="/products" className="btn btn-outline-primary primary-text">See All Products</Link>
        </div>
    )
}

export default Categories
