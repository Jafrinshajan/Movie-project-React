import React from 'react'
import './Moviecard.css'
import Star from '../../assets/star.png'


const Moviecard = ({movie}) => {
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' className=" movie_card"><img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movieposter" className="movie_poster" />
    <div className="movie_details"> 
        <h3 className='movie_details_heading'>{movie.title}</h3>
        <div className=" align-center movie_date_rate">
            <p>{movie.release_date}</p>
            <p >{movie.vote_average}<img className='card_emoji' src={Star} alt="" /></p>
        </div>
        <p className="movie_description">{movie.overview.slice(0,100)+ "..."}</p>
    </div>
    </a>
  )
}

export default Moviecard