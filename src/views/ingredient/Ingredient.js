import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import {useHistory} from "react-router-dom";
import IngredientMeals from "../../components/IngredientMeals/IngredientMeals";


const Ingredient = () => {
    const [ingredient,setIngredient] = useState([])
    const ingParams = useParams()
    const history = useHistory()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingParams.ingredient}`)
            .then(({data}) =>setIngredient(data.meals))
    },[ingParams])

    const Back = () => {
        history.goBack()
    }

    return (
        <div className='container'>
            <button className='ing-back' onClick={Back}>&laquo; Go back</button>
            <div className='ing'>
                <img className='ing-img'  src={`https://www.themealdb.com/images/ingredients/${ingParams.ingredient}.png`} alt='#' width='200'/>
                <h2>Dishes that are made from this product:</h2>
            </div>
            <IngredientMeals ingredient={ingredient}/>
        </div>
    )
}

export default Ingredient