import { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from './requests';
import './App.css';
import Nav from './Components/Nav/Nav';

const featuredHerosIds = [729, 418, 208]

function App() {
  useEffect(() => {
    fetchAndRenderFeaturedHeroes()
  }, [])

  const [featuredHeroesList, setFeaturedHeroesList] = useState([])

  const fetchAndRenderFeaturedHeroes = async () => {
    let heroes = []
    for (const heroId of featuredHerosIds) {
      const data = await getBasicHeroInfoById(heroId)
      heroes.push(data)
    }
    setFeaturedHeroesList(heroes)
  }

  return (
    <>
      <Nav></Nav>
      <main>
        <section className='featured'>
          {featuredHeroesList.map(({name, imgUrl, powerstats}) => (
            <div className='featured__hero'>
              <h2>{name}</h2>
              <img src={imgUrl} alt={`${name}`} />
              <div className='featured__hero__stats'>
                <div>
                  <p>{powerstats.combat}</p>
                </div>
                <div>
                  <p>{powerstats.durability}</p>
                </div>
                <div>
                  <p>{powerstats.intelligence}</p>
                </div>
                <div>
                  <p>{powerstats.speed}</p>
                </div>
                <div>
                  <p>{powerstats.strength}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
