import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MovieCardComponent from "./MovieCardComponent";

export default function MovieDetail() {

    const [movieDetail, setMovieDetail] = useState({});
    const [similarList, setSimilarList] = useState([{}]);

    const location = useLocation();
    const data = location.state;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${data}?api_key=935546d15f3ff81729ed34d168317c3f&language=en-US`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setMovieDetail(() => ({
                    poster_path: json.poster_path,
                    original_title: json.original_title,
                    release_date: json.release_date,
                    description: json.overview,
                    rating: json.vote_average,
                    votings: json.vote_count,
                }));
            });
        fetch(`https://api.themoviedb.org/3/movie/${data}/similar?api_key=935546d15f3ff81729ed34d168317c3f&language=en-US&page=1`)
            .then(response => response.json())
            .then(json => {
                setSimilarList([]);
                console.log(json);
                json.results.map((movie) => {
                    setSimilarList((similarList) => [...similarList, {
                        id: movie.id,
                        poster_path: movie.poster_path,
                        original_title: movie.original_title,
                        release_date: movie.release_date,
                        rating: movie.vote_average,

                    }]);
                });
            });
    }, [data]);

    return (
        <div className='movie-detail-page'>
            <div className="detail-div">
                <div className="left-detail-div">
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movieDetail.poster_path}`} alt="poster" className='movie-poster-detail'></img>
                </div>
                <div className='right-detail-div'>
                    <div className="detail-title">{movieDetail.original_title}</div>
                    <div className="detail-info">
                        <div className="detail-rate-div">{movieDetail.release_date}</div>
                        <div className="detail-rate-div">{movieDetail.rating}<img src="/star.svg" className="star"></img></div>
                        <div className="detail-rate-div">{movieDetail.votings} voted</div>
                    </div>
                    <div className="detail-description">{movieDetail.description}</div>
                </div>
                <div className="bot-detail-div"></div>
            </div>
            <div className='carousel-outer-div'>
                <h1 className='carousel-header'>Similar movies</h1>
                <div className='carousel-movies-wrap' id='scrollbar'>
                    {similarList.map((movie, id) =>
                        <MovieCardComponent id={movie.id} poster={movie.poster_path} rating={movie.rating} title={movie.original_title} release={movie.release_date} />
                    )}
                </div>
            </div>

        </div>
    );
};