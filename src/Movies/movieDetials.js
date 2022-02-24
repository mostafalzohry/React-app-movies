import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './details.css'
import { useDispatch } from "react-redux"
import {changeLoader} from "../store/actions/loader"

function MoviesDetialsComponant(){
    const params = useParams()
    const [movie, setMovie] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=229941a38edbfb81bcf212bdbe456518`)
        .then((res) => {
            setMovie(res.data);
            dispatch(changeLoader(false));
        }
        )
        .catch((err) => 
            console.log(err)
        )
    }, [])
    return(
        <>
     
            <div className="container details-container">
        <div className="row details">
            <div className="col-md-6">
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie"/>
            </div>
            <div className="col-md-6">
               <h3 className="text-center text-light"> {movie.title}</h3>
               <br></br>
               <h6 className="text-light text"><span className="text-danger ">Overview:</span><br></br>{movie.overview}</h6>
               <br></br>
               <h6 className="text-light text"><span className="text-danger ">Vote count:</span><br></br>{movie.vote_count}</h6>
               <br></br>
               <h6 className="text-light text"><span className="text-danger">Popularity:</span><br></br>{movie.popularity}</h6>
            </div>
        </div>
    </div>
        </>
    )
}
export default MoviesDetialsComponant;

