import React from 'react'

const Filtergroup = ({minrating , onratingclick , ratings}) => {
  return (
    <div><ul className="align-center movie-filter">
        {ratings.map(rate => <li className = {minrating === rate ? 'movie-filter-item active' : 'movie-filter-item' } key={rate} onClick={() => {onratingclick(rate)}}>{rate}+ star</li> )}
        </ul>
    </div>
  )
} 

export default Filtergroup