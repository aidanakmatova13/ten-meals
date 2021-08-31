import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

const Browse  = () => {
    const [searchMeals, setSearchMeals] = useState([])
    const [error, setError] = useState('')
    const searchMealsParams = useParams()
    const history = useHistory()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealsParams.name}`)
            .then(({data}) => {
                if (data.meals) {
                    setSearchMeals(data.meals)
                } else {
                    setError('The dish is not found')
                }
            })
    }, [searchMealsParams])
    const Back = () => {
        history.goBack()
    }
    return (
        <div className='container'>
            <button className='back-btn' onClick={Back}>&laquo; Go back</button>
            <div className='row'>

                {
                    searchMeals.map(item =>
                        <div className='col-3'>
                            <div className='box'>
                            <img src={item.strMealThumb} alt='#' width='200'/>
                            <h3>{item.strMeal}</h3>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='error'>{error} &#10008;</div>
        </div>
    )
}

export default Browse