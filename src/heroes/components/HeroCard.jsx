import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  return (alter_ego === characters)
  ? <></>
  : <p> { characters } </p>
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImgUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-4 col-12">
          <img src={heroImgUrl} alt={superhero} className="card-img" />
        </div>
  
        <div className="col-md-8 col-12 col-md-6">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            <CharactersByHero characters={characters} alter_ego={alter_ego}/>
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`/hero/${id}`}>Mas Info...</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  );
};
