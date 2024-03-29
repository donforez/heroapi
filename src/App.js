import './App.css';
import HeroesFeatured from './Components/HeroFeatured/HeroesFeatured';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './Components/Nav/Nav';
import SearchView from './Components/SearchView/SearchView';
import HeroDetails from './Components/HeroDetails/HeroDetails';

function App() {
  return (
    <>
    <Router>
        <Nav />
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<HeroesFeatured />} />
              <Route path="/search/:name" element={<SearchView />} />
              <Route path="/hero/:id" element={<HeroDetails />} />
            </Routes>
          </div>
        </main>
        <footer>
          <div className="container">
            <p>This content is kindly provided by <a href="https://superheroapi.com/">Superhero API</a></p>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
