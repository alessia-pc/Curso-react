import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="titulo">Curso-React -- Alessia Puga</p>
        <p>
          {" "}
          <ItemListContainer
            mensaje={"Hola esta es mi entrega del desafío de la clase 4"}
          />{" "}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
