import "./App.css";
import Bottombar from "./components/Bottombar";
import Pokelist from "./components/Pokelist";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Pokelist />
      <Bottombar />
    </>
  );
}

export default App;
