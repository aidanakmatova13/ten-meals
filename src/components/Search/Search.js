const Search = ({searchMeals}) =>{
    return(
        <div className='row'>

            {
                searchMeals.map(item =>
                    <div className='col-3'>
                        <div className='box'>
                            <img src={item.strMealThumb} alt='#' width='200'/>
                            <h3>{item.strMeal}</h3>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Search