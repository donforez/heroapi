import combatIcon from '../../assets/icons/boxing.svg';
import strengthIcon from '../../assets/icons/fist.svg';
import speedIcon from '../../assets/icons/speedometer.svg';
import intelligenceIcon from '../../assets/icons/thinking.svg';
import durabilityIcon from '../../assets/icons/durable.svg';
import { Link } from 'react-router-dom';
import './HeroSimplified.css';

function HeroSimplified({ name, imgUrl, powerstats, id }) {
  return (
    <div className='featured__hero'>
      <h2>{name}</h2>
      <Link to={`/hero/${id}`}><img className='featured__hero__img' src={imgUrl} alt={`${name}`} /></Link>
      <div className='featured__hero__stats'>
        <div>
          <img className='featured__hero__stats__icon' src={combatIcon} alt="combat icon" />
          <p>{powerstats.combat}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' src={durabilityIcon} alt="durability icon" />
          <p>{powerstats.durability}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' src={intelligenceIcon} alt="intelligence icon" />
          <p>{powerstats.intelligence}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' src={speedIcon} alt="speed icon" />
          <p>{powerstats.speed}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' src={strengthIcon} alt="strength icon" />
          <p>{powerstats.strength}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSimplified;