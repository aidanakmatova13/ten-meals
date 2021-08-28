import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

const Browse  = () =>{
    const [searchMeals,setSearchMeals] = useState([])
    const [error, setError] = useState('')
    const searchMealsParams = useParams()
    const history=useHistory()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealsParams.name}`)
            .then(({data}) => {
                if (data.meals){
                    setSearchMeals(data.meals)
                }else {
                    setError('The dish is not found')
                }
            })
    },[searchMealsParams])
    const Back = () =>{
        history.goBack()
    }
    return (
        <>
            <button onClick={Back}>Go back</button>
        <div className='row'>

            {
                searchMeals.map( item =>
                    <div>
                        <img src={item.strMealThumb} alt='#' width='200'/>
                        <h4>{item.strMeal}</h4>
                    </div>

                )
            }
        </div>
            <div>{error}</div>
        </>
    )
}

export default Browse