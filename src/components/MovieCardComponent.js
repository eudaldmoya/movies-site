import { Link, useNavigate } from "react-router-dom";

export default function MovieCardComponent(props) {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/movie/${props.id}`;
    navigate(path, { state: props.id });
  }

  return (
    <div className='card-div' onClick={() => {
      <Link to={`/movie/${props.id}`} state={props.id}></Link>
      routeChange();
    }}>
      <div className="card-img-div">
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.poster}`} alt="poster" className='movie-poster'></img>
      </div>
      <div className='card-text-div'>
        <div className="card-title">{props.title}</div>
        <div className="card-rel-rate-wrapper">
          <div className="card-release">{props.release}</div>
          <div className="card-rate-div"> {props.rating} <img src="/star.svg" className="star"></img></div>
        </div>
      </div>
    </div>
  );
};