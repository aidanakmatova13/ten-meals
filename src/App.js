import Meals from "./Meals";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MealDetails from "./MealDetails";

function App() {
  return (
    <Router>
      <Route exact path ='/'><Meals/></Route>
      <Route path ='/meals/i=:id'><MealDetails/></Route>
    </Router>
  );
}

export default App;