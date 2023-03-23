import FavouriteSites from "./components/FavoriteSites";
import Gallery from "./components/Gallery";
import { Profile } from "./components/Profile";
import StateAssignmentOne from "./components/stateAssignment1";
import StateAssignmentTwo from "./components/stateAssignment2";
import "./styles/App.css"
function App() {
  return (
    <div className="App">
      <p id="compo">
      <FavouriteSites></FavouriteSites>
      <Profile></Profile>
      <Gallery></Gallery>
      <StateAssignmentOne></StateAssignmentOne>
      <StateAssignmentTwo></StateAssignmentTwo>
      </p>
      
    </div>
  );
}

export default App;
