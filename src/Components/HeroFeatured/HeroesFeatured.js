import { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../requests';
import './HeroesFeatured.css';
import HeroSimplified from '../HeroSimplified/HeroSimplified';

const featuredHeroesIds = [729, 418, 208];

function HeroesFeatured() {
  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, []); 

  const [featuredHeroesList, setFeaturedHeroesList] = useState([]);

  const fetchAndRenderFeaturedHeroes = async () => {
    let heroes = [];
    for (const heroId of featuredHeroesIds) {
      const data = await getBasicHeroInfoById(heroId);
      heroes.push(data);
    }
    setFeaturedHeroesList(heroes);
  }

  return (
    <section className='featured'>
      <div className="featured__list">
        {featuredHeroesList.map(({ name, imgUrl, powerstats }) => (
          <HeroSimplified name={name} imgUrl={imgUrl} powerstats={powerstats}/>
        ))}
      </div>
    </section>
  );
}

export default HeroesFeatured;