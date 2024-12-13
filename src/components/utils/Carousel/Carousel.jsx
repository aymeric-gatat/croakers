import "./carousel.scss";

export default function Carousel() {
  const items = [
    { name: "Item 1", imgURL: "products/default.webp", statut: true },
    { name: "Item 2", imgURL: "products/default.webp", statut: true },
    { name: "Item 3", imgURL: "products/default.webp", statut: false },
  ];
  return (
    <ul className="carousel-img">
      {items.map((item, index) => (
        <li key={index}>
          <img src={item.imgURL} alt={item.name} className={item.statut ? "" : "soon"} />
          {item.statut ? "" : <p>Bientôt disponible</p>}
        </li>
      ))}
    </ul>
  );
}
