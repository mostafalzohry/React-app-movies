
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieList from "../component/movielist";
import {AxiosInstance} from "../component/axiosintance"


export default function Home()
{
    const[movies,setMovies]=useState([])
    useEffect(()=>{
        AxiosInstance.get("/3/movie/popular?api_key=6836d2d66066d4eb511ca7d62769eb97")
    .then((res)=>
    
    
        setMovies(res.data.results)
   )
    .catch((err)=>
         console.log(err)
         )},[])
    
    

    return(<>
   
        <div className="movie-container">
            
            <MovieList movies={movies}/>

        </div>
   
    </>)
}