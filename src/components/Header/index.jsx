import "./style.css";
import logo from "../../assets/image.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="/" />
      </Link>
      <nav>
        <ul>
          <Link to="/sobre">
            <li>Sobre o projeto</li>
          </Link>
          <Link to="/noticias">
            <li>Noticias</li>
          </Link>
          <Link to="/equipe">
            <li>Equipe</li>
          </Link>
          <Link to="/material">
            <li>Acesso ao material</li>
          </Link>
          <Link to="/contato">
            <li>Contato</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
