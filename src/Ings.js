import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import {Link,useHistory} from "react-router-dom";


const Ings = () => {
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
        <div>
            <button className='ing-back' onClick={Back}>Go back</button>
            <div className='ingBigImg'>
                <img  src={`https://www.themealdb.com/images/ingredients/${ingParams.ingredient}.png`} alt='#' width='200'/>
            </div>
            <div className='row'>
                {
                    ingredient.map(el =>
                        <Link to={`/meal/${el.strMeal}`}>
                            <div className='box'>
                                <img src={el.strMealThumb} alt='#' width='150'/>
                                <h4>
                                    {el.strMeal}
                                </h4>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Ings