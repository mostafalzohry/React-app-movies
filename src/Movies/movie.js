import { useEffect } from "react"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addFavorite } from './../store/actions/favorite';
import './details.css'
import { getMoviesList } from "../store/actions/allMovies"

function MoviesComponant(){
   
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.getMovies.list)
    
    useEffect(() => {
        dispatch(getMoviesList())
    }, [])
    const add = (movie) => {
        dispatch(addFavorite(movie)) ///////// action and store 
    }
    return(
        <>      
            <div className="">
           
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                {movies.map((movie) => {
                        return(
                            <div className="bg-dark p-3 m-2" style={{width:'300px',borderRadius:'10px',position:'relative'}}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} class="card-img-top h-50" alt="..."/>
                                <div style={{textAlign:'center', marginTop:'20px'}}>
                                    <Link key={movie.id} to={`/moviedetails/${movie.id}`} style={{textDecoration:'none'}}><h6 className="card-title text-danger">{movie.original_title}</h6></Link>
                                    <div className="fav text-white" onClick={()=> add(movie)}><i class="fas fa-star"></i></div>
                                </div>
                            </div>
                        )
                    })} 
                </div>
               
            </div>
        </>
    )
}
export default MoviesComponant;