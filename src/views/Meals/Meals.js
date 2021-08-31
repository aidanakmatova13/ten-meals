import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import MealsList from "../../components/MealsList/MealsList";


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
            <MealsList meals = {meals}/>
        </div>
    )
}

export default Meals