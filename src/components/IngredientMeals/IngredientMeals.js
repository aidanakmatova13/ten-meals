import {Link} from "react-router-dom";

const IngredientMeals = ({ingredient}) =>{
    return(
        <div className='row'>
            {
                ingredient.map(item =>
                    <div className='col-3'>
                        <Link to={`/meal/${item.strMeal}`}>
                            <div className='box'>
                                <img src={item.strMealThumb} alt='#' width='150'/>
                                <h3>
                                    {item.strMeal}
                                </h3>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}
export default IngredientMeals