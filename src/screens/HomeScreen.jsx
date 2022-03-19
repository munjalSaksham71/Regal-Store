import axios from 'axios';
import { useEffect, useState } from 'react';
import Categories from '../components/Categories/Categories';
import Navbar from '../components/Nav/Navbar';

const HomeScreen = () => {
    const [category, setCategory] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        (async() => {
            try {
                const { data: { categories } } = await axios.get('/api/categories');
                setCategory(categories);
            } catch (error) {
                setError("Something Went Wrong");
            }
        })()    
    }, [])

    return (
        <div>
            <Navbar />
            <p className="heading1 center">Product Categories</p>
            {!error && <Categories category={category} />}
            {error && <div>{error}</div>}
        </div>
    )
}

export default HomeScreen
