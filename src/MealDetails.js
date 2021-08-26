import {Link, useParams} from "react-router-dom"
import {useEffect,useState} from "react";
import axios from "axios";

const MealDetails = () => {
    const [meal, setMeal] = useState({})
    const [ings, setIngs] = useState([])

    const params = useParams()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(({data}) => {
                const obj = data.meals[0]
                setMeal(obj)
                const newIngs = Array(20).fill(0).reduce((acc, rec, idx) => {
                    if (obj[`strIngredient${idx + 1}`]) {
                        return [...acc, obj[`strIngredient${idx + 1}`]]
                    }
                    return acc
                }, [])
                setIngs(newIngs)
            })
    }, [])

    return (
        <div>
            {
                <div>
                    Meals details:
                    <div>{<img src={meal.strMealThumb} alt="" width="300"/>}</div>
                    <div>{meal.strInstructions}</div>
                    Ingredients: {ings}
                </div>
            }
        </div>
    );
}
export default MealDetails;