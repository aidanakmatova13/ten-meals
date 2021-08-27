import {useParams} from "react-router-dom"
import {useEffect,useState} from "react";
import axios from "axios";

const MealDetails = () => {
    const [meal, setMeal] = useState({})
    const [ingredients, setIngredients] = useState([])
    const params = useParams()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(({data}) => {
                const obj = data.meals[0]
                setMeal(obj)
                const newIngs = Array(20).fill(0).reduce((acc, item, idx) => {
                    if (obj[`strIngredient${idx + 1}`]) {
                        return [...acc, obj[`strIngredient${idx + 1}`]]
                    }
                    return acc
                }, [])
                setIngredients(newIngs)
            })
    }, [])

    return (
        <div>
            {
                <div>
                    Meals details:
                    <div><img src={meal.strMealThumb} alt="" width='300'/></div>
                    <div>
                        <h4>Instructions:</h4>
                        {meal.strInstructions}
                    </div>
                    <div>
                        <h4>Ingredients:</h4>
                        {ingredients.map(el =>
                            <>
                                {el}
                                <img width='150' src={`https://www.themealdb.com/images/ingredients/${el}.png`} alt=""/>
                            </>
                        )}
                    </div>
                </div>
            }
        </div>
    );
}
export default MealDetails;












