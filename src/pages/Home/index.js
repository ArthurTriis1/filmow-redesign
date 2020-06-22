import React from 'react';
import './Home.css';
import BannerSearch from '../../components/BannerSearch';
import MovieContainer from '../../components/MovieContainer';


function Home() {
  return (
    <>
      <BannerSearch/>
      <MovieContainer/>
      <MovieContainer/>
      <MovieContainer/>
    </>
  );
}

export default Home;