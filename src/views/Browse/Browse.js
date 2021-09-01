import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import MealsList from "../../components/MealsList/MealsList";

const Browse  = () => {
    const [meals, setMeals] = useState([])
    const [error, setError] = useState(false)
    const {name} = useParams()
    const history = useHistory()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(({data}) => data.meals ? setMeals(data.meals) : setError(true))
    }, [name])
    const Back = () => {
        history.goBack()
    }
    return (
        <div className='container'>
            <button className='back-btn' onClick={Back}>&laquo; Go back</button>
            {error ? <div className='error'>The dish is not found &#10008;</div> : <MealsList meals = {meals}/>}
        </div>
    )
}

export default Browse