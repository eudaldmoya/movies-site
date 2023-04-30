import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesPage from './components/MoviesPage';
import SearchPage from './components/SearchPage';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieDetail from './components/MovieDetail';
import GenrePage from './components/GenrePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<MoviesPage />} />
          <Route exact path="/search/:filmKeyword" element={<SearchPage/>} />
          <Route exact path="/movie/:filmId" element={<MovieDetail/>} />
          <Route exact path="/genre/:genreId" element={<GenrePage/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;