import {BrowserRouter,Route } from 'react-router-dom'
import Meals from "./views/Meals/Meals";
import MealDetails from "./views/MealDetail/MealDetails";
import Browse from "./views/Browse/Browse";
import Ings from "./views/ingredients/Ings";

function App() {
    return (
        <>
        <BrowserRouter>
            <Route exact path='/'><Meals/></Route>
            <Route path='/meal/:id'><MealDetails/></Route>
            <Route path='/browse/:name'><Browse/></Route>
            <Route path='/ingredient/:ingredient'><Ings/></Route>
        </BrowserRouter>
        </>
    );
}

export default App;