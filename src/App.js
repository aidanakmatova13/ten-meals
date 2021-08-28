import {BrowserRouter,Route } from 'react-router-dom'
import Meals from "./Meals";
import MealDetails from "./MealDetails";
import Browse from "./Browse";
import Ings from "./Ings";
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