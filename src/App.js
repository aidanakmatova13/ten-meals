import {BrowserRouter as Router,Route} from "react-router-dom";
import Meals from "./Meals";
import MealDetails from "./MealDetails";

function App() {
    return (
        <>
            <Router>
                <Route exact path={"/"}><Meals /></Route>
                <Route path={"/mealdetails/i=:id"}><MealDetails /></Route>
            </Router>
        </>
    )
}


export default App;