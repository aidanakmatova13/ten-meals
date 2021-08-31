import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import {useHistory} from "react-router-dom";
import Ingredients from "../../components/Ingredients/Ingredients";
import YoutubeVideo from "../../components/YoutubeVideo/YoutubeVideo";


const MealDetails = () => {
    const [mealDetails, setMealDetails] = useState({})
    const [ingredients, setIngredient] = useState([])
    const [youTube, setYouTube] = useState('')
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
            .then(({data}) => {
                const obj = data.meals[0]
                const str = obj.strYoutube
                setMealDetails(obj)
                const strIngredient = Array(20).fill(0).reduce((acc, item, idx) => {
                    const ingredient = obj[`strIngredient${idx + 1}`]
                    return ingredient ? [...acc, ingredient] : acc }, [])

                setIngredient(strIngredient)
                setYouTube(str.slice(str.indexOf('v=') + 2, str.length))

            })
    }, [id])


    const Back = () => {
        history.goBack()
    }

    return (
        <div className='container'>
            <button onClick={Back}>&laquo; Go back</button>
            {
                <>
                    <h1 className='ing-title'>{mealDetails.strMeal}</h1>
                    <div className='details-top'>
                        <img className='ing-img' src={mealDetails.strMealThumb} alt='#'/>
                        <div className='instr-title'>
                            <h3>Instructions</h3>
                            <p> {mealDetails.strInstructions}</p>
                        </div>
                        <YoutubeVideo youTube={youTube}/>
                    </div>
                    <h3>Ingredients:</h3>
                    <Ingredients ingredients={ingredients}/>
                </>
            }
        </div>
    )
}
export default MealDetails












