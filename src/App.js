import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
        
          <ItemListContainer />
          <ItemDetailContainer />
        
        <p>Alessia Puga Cammuso</p>
    </div>
  );
}

export default App;
