import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p>
          <ItemListContainer />
        </p>
        <p>Alessia Puga Cammuso</p>
      </header>
    </div>
  );
}

export default App;
