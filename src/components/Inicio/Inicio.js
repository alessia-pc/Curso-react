import "./Inicio.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Footer from "../Footer/Footer";

const Inicio = () => {
  return (
    <div className="container-inicio">
      <picture>
        <img
          className="banner"
          src="https://images.pexels.com/photos/8131392/pexels-photo-8131392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="banner"
        ></img>
      </picture>

      <p className="nombre-de-la-pagina">
        <strong>SonorouS</strong>{" "}
      </p>

      <ul>
        <ItemListContainer />
      </ul>
      <Footer />
    </div>
  );
};

export default Inicio;
