import MovieCardComponent from "./MovieCardComponent";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function SearchPage() {
 
  const [list, setList] = useState([
    {
      id: "",
      poster_path: "",
      original_title: "",
      release_date: "",
    }
  ]);
  
  const location = useLocation();
  console.log(location);
  let array = useLocation().pathname.split("/");
  let data = array[array.length -1];
  console.log(data);  

  useEffect(() => {
    
    fetch("https://api.themoviedb.org/3/search/movie?api_key=935546d15f3ff81729ed34d168317c3f&query=" + data + "&language=en-US&page=1&include_adult=false")
      .then(response => response.json())
      .then(json => {
        setList([]);
        console.log(json.results);
        json.results.map((movie) => {
          setList((list) => [...list, {
            id: movie.id,
            poster_path: movie.poster_path,
            original_title: movie.original_title,
            release_date: movie.release_date,
            rating: movie.vote_average,
          }
          ]);
        });
      });
  }, [data]);

  return (
    <div className="search-movies-page">
      <div className="search-title">Results for "{data}"</div>
      <div className='search-movies-div'>{list.map((movie, id) =>
        <MovieCardComponent id={movie.id} poster={movie.poster_path} rating={movie.rating} title={movie.original_title} release={movie.release_date} />      )
      }
      </div>
    </div>
  );
}