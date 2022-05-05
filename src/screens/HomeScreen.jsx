import axios from 'axios';
import { useEffect, useState } from 'react';
import Categories from '../components/Categories/Categories';
import Navbar from '../components/Nav/Navbar';

const HomeScreen = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async() => {
            try {
                const { data: { categories } } = await axios.get('/api/categories');
                setLoading(false);
                setCategories(categories);
            } catch (error) {
                setLoading(false);
                setError("Something Went Wrong");
            }
        })()    
    }, [])

    return (
        <div>
            {loading && <div>Loading....</div>}
            <p className="heading1 center">Product Categories</p>
            {!error && !loading && <Categories categories={categories} />}
            {error && <div>{error}</div>}
        </div>
    )
}

export  {HomeScreen}
