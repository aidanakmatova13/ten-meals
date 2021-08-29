import {useEffect, useState} from "react";
import axios from "axios";
import {Link,useHistory} from "react-router-dom";


const Meals = () => {
    const [meals, setMeals] = useState([])
    const [smeals, setSMeals] = useState('')
    const history = useHistory()
    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setMeals(data.meals))
    }, [])
    const handleInput = (e) => {
        setSMeals(e.target.value)

    }
    const Search  = () => {
        if (smeals.trim()){
            history.push(`/browse/${smeals}`)
        }
    }
    return (
        <div className='container'>
            <div className='top'>
                <h1 className='menu-title'>TOP 10 Dishes<br/> from the Menu </h1>
                <input className='search-input' onChange={handleInput} type='text' placeholder='type...'/>
                <button onClick={Search}>Search &#8634; </button>
            </div>
            <div className='row'>
                {
                    meals.map(item =>

                        <div className='col-3'>
                            <div className='box'>
                            <Link to={`/meal/${item.strMeal}`} key={item.idMeal}>
                                <img className='menu ' src={item.strMealThumb} alt='#' width='150'/>
                                <h2 className='menu-title'>{item.strMeal}</h2>
                            </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Meals