import {BrowserRouter, BrowserRouter as Router, Route} from "react-router-dom";
import Meals from "./Meals";
import MealDetails from "./MealDetails";
import Browse from "./Browse";

function App() {
    return (
        <>
            <BrowserRouter/>
            <Router>
                <Route exact path="/"><Meals /></Route>
                <Route path="/mealdetails/i=:id"><MealDetails /></Route>
                <Route path='/browse/:name'><Browse/></Route>
            </Router>
        </>
    )
}


export default App;