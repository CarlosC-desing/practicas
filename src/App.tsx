import CharacterCard from "./components/rpg-creator/CharacterCard";
import MoodPage from "./components/moods-feeling/MoodPage";
import PanelCohete from "./components/cohete/cohete";
import PanelMisiones from "./components/misiones/ListMissions";
import Inventario from "./components/IventarioPociones/Inventario";
import NinjaTask from "./components/ListaNinja/ListaTareas";
import Armeria from "./components/Armeria/Armeria";
function App() {
  return (
    <div className="container d-flex flex-column mt-5 text-white gap-5">
      <Armeria />
    </div>
  );
}

export default App;
