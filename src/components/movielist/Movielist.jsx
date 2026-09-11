import React, { useEffect, useState } from 'react'
import _ from 'lodash'

import './movielist.css'
import fire from '../../assets/fire.png'
import Moviecard from './Moviecard'
import Filtergroup from './Filtergroup'

const Movielist = () => {
    const [movies, setmovies] = useState([])
    const [minrating, setminrating] = useState(0)
    const [filtermovies, setfiltermovies] = useState([])
    const [sort, setsort] = useState({by : 'default', order : "asc"})
    useEffect(() => {
        fetchmovies();
    }, []);

    useEffect(() => { 
    console.log(sort)

    if (sort.by !== 'default') {
        const sortedmovies = _.orderBy(
            filtermovies,
            [sort.by],
            [sort.order]
        )
        setfiltermovies(sortedmovies)
    }
}, [sort])

    const fetchmovies  = async ()=>{
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4c71505f8337ff8d0d39fc778aa8bc69");
        const data = await response.json()
        setmovies(data.results);
        setfiltermovies(data.results);
    }
    const handlefilter = rate => {
        if(rate === minrating){
            setminrating(0)
            setfiltermovies(movies)
        } else{
            setminrating(rate)
            const filtered = movies.filter((movie) => movie.vote_average >= rate)
            setfiltermovies(filtered)
        }
        
    }
    const handlesort = e => {
        const {name, value} = e.target;
        setsort((prev) => ({...prev, [name] : value}))
    };
    

  return (
    <section className="movie-list">
        
        <header className=" align-center movie-list-header">
            <h2 className="align-center movie-list-heading">Popular <img className="nav-icon" src={fire} alt="Fire" /></h2>
            <div className="align-center movie-list-filters">

                <Filtergroup minrating = {minrating} onratingclick = {handlefilter} ratings = {[8,7,6]} />

                <select className="movie-sort" onChange={handlesort} value={sort.by} name="by" id="">
                    <option value="default">Sort by</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>

                <select className="movie-sort" onChange={handlesort} value={sort.order} name="order" id="">
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>

            </div>
        </header>
       <div className="align-center movie_cards">
    {filtermovies.map(movie => {
        return <Moviecard key={movie.id} movie={movie} />;
    })}
</div>
    </section>
  )
}

export default Movielist