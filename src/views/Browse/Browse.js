import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import Search from "../../components/Search/Search";

const Browse  = () => {
    const [searchMeals, setSearchMeals] = useState([])
    const [error, setError] = useState('')
    const searchMealsParams = useParams()
    const history = useHistory()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealsParams.name}`)
            .then(({data}) => data.meals ? setSearchMeals(data.meals) : setError('The dish is not found'))
    }, [searchMealsParams])
    const Back = () => {
        history.goBack()
    }
    return (
        <div className='container'>
            <button className='back-btn' onClick={Back}>&laquo; Go back</button>
            <Search searchMeals={searchMeals}/>
            <div className='error'>{error} &#10008;</div>
        </div>
    )
}

export default Browse