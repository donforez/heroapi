import './App.css';
import HeroesFeatured from './Components/HeroFeatured/HeroesFeatured';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <>
      <Nav></Nav>
      <main>
        <div className="container">
          <HeroesFeatured />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
