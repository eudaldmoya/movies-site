import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function GenreListComponent(props) {

    const [genreList, setGenreList] = useState([]);

    let navigate = useNavigate();
 
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=935546d15f3ff81729ed34d168317c3f&language=en-US")
      .then(response => response.json())
      .then(json => {
        setGenreList(() => (json.genres));
      });
        
    }, []);

    return (
        <div className='genre-list-div'>
            <div className="genre-title">Genres</div>
            {genreList.map((genre, id) =>
                <div className="genre-div" id={`${genre.id}`} onClick={() => {
                    console.log();
                     let genreName = genre.name.toLowerCase();
                     let path = `/genre/${genreName}`;
                     navigate(path, { state: genre.id });
                  }}>{genre.name}</div>
              )}
        </div>
    );
};