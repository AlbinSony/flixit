import React, { useEffect, useState } from 'react';
import './Banner.css';
import { API_KEY } from '../../constants/constants';
import { imageUrl } from '../../constants/constants';
import axios from '../../axios';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        // Randomly select a movie from the 20 items in the results array
        const movies = response.data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        setMovie(movies[randomIndex]);
      })
      .catch((error) => {
        console.error("Error fetching the movie data: ", error);
      });
  }, []);

  return (
    <div 
    style={{
      backgroundImage: `url(${imageUrl}${movie ? movie.backdrop_path : ""})`,
    }}
    className='banner'>
      <div className='content'>
        {/* Check if movie is defined before accessing title or name */}
        <h1 className='title'>
          {movie ? movie.title || movie.name : "Loading..."}
        </h1>
        <div className='banner-buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>
          {/* Add a check to show description if movie is available */}
          {movie ? movie.overview : "Loading description..."}
        </h1>
      </div>
      <div className='fade-bottom'></div>
    </div>
  );
}

export default Banner;
