import {BrowserRouter,Route } from 'react-router-dom'
import Meals from "./Meals";
import MealDetails from "./MealDetails";
import Browse from "./Browse";
import Header from "./Header";
function App() {
    return (
        <>
        <BrowserRouter>
            <Route exact path='/'><Header/></Route>
            <Route exact path='/'><Meals/></Route>             <Route path='/meal/:id'><MealDetails/></Route>
            <Route path='/browse/:name'><Browse/></Route>
        </BrowserRouter>
        </>
    );
}

export default App;