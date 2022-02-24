import { Link } from "react-router-dom";

export default function MovieList(props)
{
    const setVoteClass=(vote)=>{
       if(vote>=8)
       {
           return 'green';
       }
       else if(vote>=6)
       {
           return'orange';
       }
       else 
       {
           return 'red';
       }
    }
            return(<>
        {props.movies.map((movie)=>{
                 return(
                     
                     <div key={movie.id} className="movie"><img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie"/>
                     <div className="movie-info">
                     <Link to={`/moviedetails/${movie.id}`} className="namelink"><h3>{movie.title}</h3> </Link>
                         <span className={`tag ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</span>
                     </div>
                     </div>

                    
                 )
             })}
        </>)
 
}