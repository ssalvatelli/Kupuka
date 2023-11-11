import "./Navbar.css";
import logo from "../../../assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import CartWidget from "../../commons/cartWidget/CartWidget";

function Navbar() {
  return (
    <>
      <nav>
        <div id="root" className="navbar">
          <Link to="/">
            <img src={logo} className="logo" alt="Logo" />
            <h3>KUPUKA</h3>
          </Link>
          <div className="category">
            <Link to="/category/novedad">
              <button>Novedades</button>
            </Link>
            <Link to="/category/previa">
              <button>Previa</button>
            </Link>
            <Link to="/category/familiar">
              <button>Familiar</button>
            </Link>
            <Link to="/category/cartas">
              <button>Cartas</button>
            </Link>
            <Link to="/category/party">
              <button>Party</button>
            </Link>
            <Link to="/category/kids">
              <button>Kids</button>
            </Link>
            <Link to="/category/euro">
              <button>Euro</button>
            </Link>
            <Link to="/category/estrategia">
              <button>Estrategia</button>
            </Link>
          </div>
          <CartWidget />
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
