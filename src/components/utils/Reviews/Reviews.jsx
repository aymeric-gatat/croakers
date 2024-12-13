import "./reviews.scss";

export default function Reviews() {
  const data = [
    {
      name: "User name",
      review:
        "Les cookies de Cookie Master sont tout simplement exceptionnels ! J’ai testé plusieurs variétés et chacune d'elles est une vraie découverte. Le goût est riche, la texture parfaite : ni trop dure, ni trop molle. Une adresse que je recommande sans hésiter !",
      note: "5",
    },
    {
      name: "User name",
      review:
        "Les cookies de Cookie Master sont tout simplement exceptionnels ! J’ai testé plusieurs variétés et chacune d'elles est une vraie découverte. Le goût est riche, la texture parfaite : ni trop dure, ni trop molle. Une adresse que je recommande sans hésiter !",
      note: "3",
    },
    {
      name: "User name",
      review:
        "Les cookies de Cookie Master sont tout simplement exceptionnels ! J’ai testé plusieurs variétés et chacune d'elles est une vraie découverte. Le goût est riche, la texture parfaite : ni trop dure, ni trop molle. Une adresse que je recommande sans hésiter !",
      note: "4",
    },
  ];

  const MAX_STARS = 5;

  const showStars = (note) => {
    const fullStars = Array.from({ length: Number(note) }, (_, index) => (
      <span key={`full-${index}`} className="star full">
        ⭐
      </span>
    ));
    const emptyStars = Array.from({ length: MAX_STARS - Number(note) }, (_, index) => (
      <span key={`empty-${index}`} className="star empty">
        ☆
      </span>
    ));

    return [...fullStars, ...emptyStars];
  };

  return (
    <>
      <ul className="reviews">
        {data.map((item, index) => (
          <li key={index}>
            <p className="content">{item.review}</p>
            <p className="note">{showStars(Number(item.note))}</p>
            <p className="name">{item.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
