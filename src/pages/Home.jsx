import Button from "../components/utils/Button/Bouton";
import Carousel from "../components/utils/Carousel/Carousel";
import Reviews from "../components/utils/Reviews/Reviews";
import "./home.scss";

export default function Home() {
  return (
    <main className="homepage">
      <section className="entete">
        <h1>Crockers</h1>
        <p className="subtitle">
          the least <span>flavorful</span> of crackers
        </p>
      </section>
      <section className="decouverte">
        <h2>
          Découvrez tout le savoir faire des <span className="strong-title">Croackers</span>
        </h2>
        <div className="content">
          <div className="content-left content-box">
            <p>
              Plongez dans un univers où chaque bouchée raconte une histoire de gourmandise et d’excellence. Chez Cookie Master, nous croyons que le cookie parfait est bien plus qu’un simple dessert :
              c’est une invitation au plaisir et au partage. Chaque création est conçue pour éveiller vos papilles et satisfaire toutes vos envies, que vous soyez amateur de douceur ou friand de
              textures croquantes.
              <br /> Nos recettes sont le fruit d’un mélange subtil entre tradition et innovation. Chaque cookie est préparé avec des ingrédients soigneusement sélectionnés : du beurre fondant, des
              pépites de chocolat fondantes, et une pincée de savoir-faire unique. Nos secrets de fabrication, transmis avec passion, garantissent des cookies frais, savoureux et toujours
              irrésistibles. Venez découvrir pourquoi nos cookies sont bien plus qu’une gourmandise, ils sont une véritable expérience.
            </p>
            <div className="btn-box">
              <Button content={"Déguster un Croacker"} size={"medium"} variant={"full"} />
              <Button content={"En savoir +"} size={"medium"} variant={"outline"} />
            </div>
          </div>
          <div className="content-right content-box">
            <img src="products/default.webp" alt="Croakers" />
          </div>
        </div>
      </section>
      <section className="produits">
        <div className="text">
          <h2>
            Trouvez le <span className="strong-title">Croackers</span> qui vous corresponds
          </h2>
          <p>
            Plongez dans un univers où chaque bouchée raconte une histoire de gourmandise et d’excellence. Chez Cookie Master, nous croyons que le cookie parfait est bien plus qu’un simple dessert :
            c’est une invitation au plaisir et au partage. Chaque création est conçue pour éveiller vos papilles et satisfaire toutes vos envies, que vous soyez amateur de douceur ou friand de
            textures croquantes.
          </p>
        </div>
        <Carousel />
      </section>
      <section className="avis">
        <h2>
          Ils ont adoré dévorer leurs <span className="strong-title">Croackers</span>
        </h2>
        <Reviews />
        <Button content={"Commander une boîte"} size={"medium"} variant={"full"} />
      </section>
    </main>
  );
}
