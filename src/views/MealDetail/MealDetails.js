import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import {Link, useHistory} from "react-router-dom";


const MealDetails = () => {
    const [mealDetails, setMealDetails] = useState({})
    const [ingredient, setIngredient] = useState([])
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
                    if (obj[`strIngredient${idx + 1}`]) {
                        return [...acc, obj[`strIngredient${idx + 1}`]]
                    }
                    return acc
                }, [])

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
                        <iframe width="315" height="200" src={`https://www.youtube.com/embed/${youTube}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                        </iframe>
                    </div>
                    <h3>Ingredients:</h3>
                    <div className='row'>
                    {
                        ingredient.map(item =>
                            <Link to={`/ingredient/${item}`}>
                                    <div className='col-3'>
                                        <img className='ings-img' src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt='#'/>
                                        <h3 className='ings-title'>{item}</h3>
                                    </div>
                            </Link>
                        )
                    }
                </div>
                </>
            }
        </div>
    )
}
export default MealDetails












