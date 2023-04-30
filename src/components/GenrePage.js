import MovieCardComponent from "./MovieCardComponent";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function GenrePage() {
 
  const [list, setList] = useState([{}]);
  
  const location = useLocation();
  let data = location.state;
  console.log(data);  
  let array = useLocation().pathname.split("/");
  let name = array[array.length -1];

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=935546d15f3ff81729ed34d168317c3f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${data}&with_watch_monetization_types=flatrate`)
      .then(response => response.json())
      .then(json => {
        setList([]);
        console.log(json.results);
        json.results.map((movie) => {
          setList((list) => [...list,{
            id: movie.id,
            poster_path: movie.poster_path,
            original_title: movie.original_title,
            release_date: movie.release_date,
            rating: movie.vote_average,
          }
          ]);
        });
      });
  }, []);

  return (
    <div className="search-movies-page">
      <div className="search-title">Results for "{name}" movies</div>
      <div className='search-movies-div'>{list.map((movie, id) =>
        <MovieCardComponent id={movie.id} poster={movie.poster_path} rating={movie.rating} title={movie.original_title} release={movie.release_date} />      )
      }
      </div>
    </div>
  );
}