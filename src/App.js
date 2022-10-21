import "./App.css";
import Bottombar from "./components/Bottombar";
import Pokelist from "./components/Pokelist";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Pokelist />
      <Bottombar />
    </div>
  );
}

export default App;
