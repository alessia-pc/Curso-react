import "./Inicio.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Footer from "../Footer/Footer";

const Inicio = () => {
  return (
    <div className="container-inicio">
      <picture>
        <img
          className="banner"
          src="./banner--sonorous.jpg"
          alt="banner"
        ></img>
      </picture>

      <p className="nombre-de-la-pagina">
        <strong>SonorouS</strong>{" "}
      </p>

      <div className="container">
        <ItemListContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
