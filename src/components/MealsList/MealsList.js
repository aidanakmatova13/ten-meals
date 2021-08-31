import {Link} from "react-router-dom";

const  MealsList = ({meals}) =>{
    return (
        <div className='row'>
            {
                meals.map(item =>
                    <div className='col-3'>
                        <div className='box'>
                            <Link to={`/meal/${item.strMeal}`} key={item.idMeal}>
                                <img className='menu ' src={item.strMealThumb} alt='#' width='150'/>
                                <h2 className='menu-title'>{item.strMeal}</h2>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default MealsList