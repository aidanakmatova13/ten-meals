import {useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
            .then(({data}) => setMeals(data.meals))
    },[]) //сегда массив

    return (
        <div>
            Meals list:
            {
                meals.map(item =>
                    <p key={item.id}>
                        <Link to={`/mealdetails/i=${item.idMeal}`}>
                            {item.strMeal}
                        </Link>
                    </p>
                )
            }
        </div>
    )
}

export default Meals;