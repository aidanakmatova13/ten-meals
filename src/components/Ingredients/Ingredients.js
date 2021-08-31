import {Link} from "react-router-dom";

const Ingredients = ({ingredients}) =>{
    return(
        <div className='row'>
            {
                ingredients.map(item =>
                    <Link to={`/ingredient/${item}`}>
                        <div className='col-3'>
                            <img className='ings-img' src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt='#'/>
                            <h3 className='ings-title'>{item}</h3>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}
export default Ingredients