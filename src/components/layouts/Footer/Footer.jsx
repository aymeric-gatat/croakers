import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="column">
        <p className="logo">Croakers</p>
      </div>
      <div className="column">
        <ul>
          <li>
            <p className="footer-title">Parcourir</p>
          </li>
          <li>
            <p>Accueil</p>
          </li>
          <li>
            <p>Nos Produits</p>
          </li>
          <li>
            <p>Nous Découvrir</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
      </div>
      <div className="column">
        <ul>
          <li>
            <p className="footer-title">Autre</p>
          </li>
          <li>
            <p>Mentions légales</p>
          </li>
          <li>
            <p>Politiques de confidentialité</p>
          </li>
          <li>
            <p>Conditions générales de ventes</p>
          </li>
        </ul>
      </div>
      <p>Copyright © Tous droits réserver</p>
    </footer>
  );
}
