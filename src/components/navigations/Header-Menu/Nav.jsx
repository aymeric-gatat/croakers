import { NavLink } from "react-router-dom";
import "./nav.scss";
import Button from "../../utils/Button/Bouton";

export default function Nav() {
  return (
    <nav className="primary-menu">
      <NavLink to="/" className="item-nav">
        Accueil
      </NavLink>
      <NavLink to="/produits" className="item-nav">
        Nos Produits
      </NavLink>
      <NavLink to="/a-propos" className="item-nav">
        Nous découvrir
      </NavLink>
      <NavLink to="/contact" className="item-nav">
        Nous contacter
      </NavLink>
      <Button
        content={"Mon Panier"}
        onClick={() => {
          console.log("ok");
        }}
        size={"medium"}
        variant={"full"}
      />
    </nav>
  );
}
