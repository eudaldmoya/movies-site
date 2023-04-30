import React from 'react';
import MovieCardComponent from './MovieCardComponent';
import GenreListComponent from './GenresListComponent';


class MoviesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      upcomingMovies: [],
      popularMovies: [],
      latestMovies: [],
      moreMovies: [],
      genres: [],
      value: '',
    }
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=935546d15f3ff81729ed34d168317c3f&language=en-US&page=1")
      .then(response => response.json())
      .then(json => {
        this.setState({
          upcomingMovies: json.results
        });
      });
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=935546d15f3ff81729ed34d168317c3f&language=en-US&page=1")
      .then(response => response.json())
      .then(json => {
        this.setState({
          popularMovies: json.results
        });
      });
      fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=935546d15f3ff81729ed34d168317c3f&language=en-US&page=1")
      .then(response => response.json())
      .then(json => {
        this.setState({
          latestMovies: json.results
        });
      });
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=935546d15f3ff81729ed34d168317c3f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
      .then(response => response.json())
      .then(json => {
        this.setState({
          moreMovies: json.results
        });
      });
  }

  render() {
    return <div>
      <div className='top-image-div'>
        <img src='/background.jpg' className='top-image'></img>
        <div className='main-title'>Film Database</div>
        <div className='main-description'>Millions of movies, TV shows and people to discover. Explore now.</div>
      </div>
      <div className='main'>
        <div className='main-left'>
          <GenreListComponent></GenreListComponent>
        </div>
        <div className='main-right'>
          <div className='carousel-outer-div'>
            <h1 className='carousel-header'>Upcoming movies</h1>
            <div className='carousel-movies-wrap' id='scrollbar'>
              {this.state.upcomingMovies.map((movie, id) =>
                <MovieCardComponent id={movie.id} poster={movie.poster_path} rating={movie.vote_average} title={movie.original_title} release={movie.release_date} />
              )}
            </div>
          </div>
          <div className='carousel-outer-div'>
            <h1 className='carousel-header'>Popular movies</h1>
            <div className='carousel-movies-wrap' id='scrollbar'>
              {this.state.popularMovies.map((movie, id) =>
                <MovieCardComponent id={movie.id} poster={movie.poster_path} rating={movie.vote_average} title={movie.original_title} release={movie.release_date} />
              )}
            </div>
          </div>
          <div className='carousel-outer-div'>
            <h1 className='carousel-header'>Top rated movies</h1>
            <div className='carousel-movies-wrap' id='scrollbar'>
              {this.state.latestMovies.map((movie, id) =>
                <MovieCardComponent id={movie.id} poster={movie.poster_path} rating={movie.vote_average} title={movie.original_title} release={movie.release_date} />
              )}
            </div>
          </div>
          <div className='carousel-header'>Other Movies</div>
          <div className='more-movies-div'>
          {this.state.moreMovies.map((movie, id) =>
                <MovieCardComponent id={movie.id} poster={movie.poster_path} rating={movie.vote_average} title={movie.original_title} release={movie.release_date} />
              )}
          </div>
        </div>
      </div>

    </div>;
  }
}

export default MoviesPage;




// POPULAR: https://api.themoviedb.org/3/movie/popular?api_key=935546d15f3ff81729ed34d168317c3f&language=en-US&page=1
// TOP-RATED: https://api.themoviedb.org/3/movie/top_rated?api_key=935546d15f3ff81729ed34d168317c3f&language=en-US&page=1
// LATEST: https://api.themoviedb.org/3/movie/latest?api_key=935546d15f3ff81729ed34d168317c3f&language=en-US
// UPCOMING: https://api.themoviedb.org/3/movie/upcoming?api_key=935546d15f3ff81729ed34d168317c3f&language=en-US&page=1
// https://api.themoviedb.org/3/discover/movie?api_key=935546d15f3ff81729ed34d168317c3f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
// https://api.themoviedb.org/3/discover/movie?api_key=935546d15f3ff81729ed34d168317c3f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate