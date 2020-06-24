import React from 'react';
import './Home.css';
import BannerSearch from '../../components/BannerSearch';
import MovieSpan from '../../components/MovieSpan';
import image from '../../assets/moviesImages/102232-dark-staffel3-poster3000.jpg'
import News from '../../components/News';
import InfoContainer from '../../components/InfoContainer';
import ListSpan from '../../components/ListSpan';
import listImage from '../../assets/movies2.png';



function Home() {

  const movie = {image: image, title: "name movie"};

  return (
    <>
      <BannerSearch/>

      <InfoContainer title="Filmes e séries mais populares no Filmow">
                <MovieSpan title="Parasita" stars={4.5} image={image} countComents={230}/>
                <MovieSpan title="Parasita" stars={4.5} image={image} countComents={230}/>
                <MovieSpan title="Parasita" stars={4.5} image={image} countComents={230}/>
                <MovieSpan title="Parasita" stars={4.5} image={image} countComents={230}/>
                <MovieSpan title="Parasita" stars={4.5} image={image} countComents={230}/>
                <MovieSpan title="Parasita" stars={4.5} image={image} countComents={230}/>
      </InfoContainer>

      <InfoContainer title="Notícias: Cinema, Séries e TV">
                <News
                  title="5 filmes com doguinhos que vão derreter seu coração"
                  description="Se você também é um amante de cães, confira essa seleção de longas que prometem derreter o seu coração."
                  image={image}
                  link="/"
                />
                <News
                  title="5 filmes com doguinhos que vão derreter seu coração"
                  description="Se você também é um amante de cães, confira essa seleção de longas que prometem derreter o seu coração."
                  image={image}
                  link="/"
                />
                <News
                  title="5 filmes com doguinhos que vão derreter seu coração"
                  description="Se você também é um amante de cães, confira essa seleção de longas que prometem derreter o seu coração."
                  image={image}
                  link="/"
                />
                
      </InfoContainer>
    

      <InfoContainer title="Listas mais populares da semana" createListShow={true}>
        <ListSpan
          movies={[movie, movie, movie, movie, movie, movie, ]}
          description={"Séries desconhecidas que merecem muito hype"}
          image={listImage}
          title="list"
        />

        <ListSpan
          movies={[movie, movie, movie, movie, movie ]}
          description={"Séries desconhecidas que merecem muito hype"}
          image={listImage}
          title="list"
        />

        <ListSpan
          movies={[movie, movie, movie ]}
          description={"Séries desconhecidas que merecem muito hype"}
          image={listImage}
          title="list"
        />
      </InfoContainer>
    </>
  );
}

export default Home;