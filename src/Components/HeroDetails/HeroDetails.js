import { useEffect, useState } from 'react';
import './HeroDetails.css';
import { useParams } from 'react-router';
import { getDetailsHeroById } from '../../requests';
import Loader from '../Loader/Loader';


function HeroDetails() {
  const [ heroDetails, setHeroDetailsList ] = useState([]);
  const [ isLoading, setLoadingState ] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchHeroDetails = async () => {
      const details = await getDetailsHeroById(id)
      setHeroDetailsList(details)
      setLoadingState(false)
    }
    fetchHeroDetails();
  }, [id])

  return (
    <>
      <h1>Detale herosa!</h1>
      { !isLoading && <div className='details-hero'>
        <div className='details-section'>
          <h2>Biography: </h2>
          <div>
            <h3>Full Name:</h3>
            <p>{heroDetails.name}</p>
          </div>
          <div>
            <h3>Aliases:</h3>
            <p>{heroDetails.aliases}</p>
          </div>
          <div>
            <h3>Place of Birth</h3>
            <p>{heroDetails.birthPlace}</p>
          </div>        
        </div>
        <div className='details-section'>
          <h2>Appearance: </h2>
          <div>
            <h3>Gender</h3>
            <p>{heroDetails.gender}</p>
          </div>
          <div>
            <h3>Race</h3>
            <p>{heroDetails.race}</p>
          </div>
          <div>
            <h3>Height</h3>
            <p>{heroDetails.height}</p>
          </div>
          <div>
            <h3>Weight</h3>
            <p>{heroDetails.weight}</p>
          </div>
          <div>
            <h3>Eye-color</h3>
            <p>{heroDetails.eyeColor}</p>
          </div>
          <div>
            <h3>Hair-color</h3>
            <p>{heroDetails.hairColor}</p>
          </div>
        </div>
        <div className='details-section'>
          <h2>Work: </h2>
          <div>
            <h3>Occupation</h3>
            <p>{heroDetails.occupation}</p>
          </div>
          <div>
            <h3>Base</h3>
            <p>{heroDetails.base}</p>
          </div> 
        </div>
        <div className='details-section'>
          <h2>Connections: </h2>
          <div>
            <h3>Group affiliation </h3>
            <p>{heroDetails.groupAffiliation}</p>
          </div>
          <div>
            <h3>Relatives </h3>
            <p>{heroDetails.relatives}</p>
          </div>
        </div>
      </div>}
      { isLoading && <div className='loader-container'>
        <Loader></Loader> 
        </div>}
    </>
  );
}

export default HeroDetails;