import "./Navbar.css";
import logo from "../../../assets/logo.png";
import CartWidget from "../../commons/cartWidget/CartWidget";

function Navbar() {
  return (
    <nav>
      <img src={logo} className="logo" alt="Logo" />
      <h3>KUPUKA</h3>
      <div>
        <button>Inicio</button>
        <button>Productos</button>
        <button>Contacto</button>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
