import React, { useEffect, useState } from "react";
import "./Home.css";
import BannerSearch from "../../components/BannerSearch";
import MovieSpan from "../../components/MovieSpan";
import image from "../../assets/moviesImages/102232-dark-staffel3-poster3000.jpg";
import News from "../../components/News";
import InfoContainer from "../../components/InfoContainer";
import ListSpan from "../../components/ListSpan";
import listImage from "../../assets/movies2.png";

import apiTMDB from '../../services/apiTMDB';
import apiFilmowBack from "../../services/apiFilmowBack";

function Home() {
    const movie = { image: image, title: "name movie" };
    const baseUrlImage = "https://image.tmdb.org/t/p/w500"
    const [trendings, setTrendings] = useState([]);
    const [news, setNews] = useState([]);
  

    useEffect(() => {
        (async () => {
            const { data : { results } } = await apiTMDB.get("/trending/movie/week", {
                params: {
                    api_key:  process.env.REACT_APP_TMDB_KEY,
                    language: "pt-BR"
                }
            })
            const tempTrending = results.slice(0, 6);
            setTrendings(tempTrending);
        })()
    }, [])

    useEffect(() => {
        (async () => {
            const { data } = await apiFilmowBack.get('news');
            const tempNews = data.slice(0, 3);
            setNews(tempNews);
        })()
    // eslint-disable-next-line 
    }, [])

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <>
            <BannerSearch />

            <InfoContainer title="Filmes e séries mais populares no Filmow">
                {
                    trendings.map(trend => (
                        <MovieSpan
                            key={trend.id}
                            title={trend.title}
                            stars={trend.vote_average/2}
                            image={`${baseUrlImage}${trend.poster_path}`}
                            countComents={getRandomInt(20, 200)}
                        />
                    ))
                }
            </InfoContainer>

            <InfoContainer title="Notícias: Cinema, Séries e TV">
                {
                    news.map(newItem => (
                        <News
                            title={newItem.title}
                            description={newItem.description}
                            image={newItem.imageURL}
                            link={newItem.link}
                        />
                    ))
                }
            </InfoContainer>

            <InfoContainer
            title="Listas mais populares da semana"
            createListShow={true}
            >
                <ListSpan
                    movies={[movie, movie, movie, movie, movie, movie]}
                    description={"Séries desconhecidas que merecem muito hype"}
                    image={listImage}
                    title="list"
                />

                <ListSpan
                    movies={[movie, movie, movie, movie, movie]}
                    description={"Séries desconhecidas que merecem muito hype"}
                    image={listImage}
                    title="list"
                />

                <ListSpan
                movies={[movie, movie, movie]}
                description={"Séries desconhecidas que merecem muito hype"}
                image={listImage}
                title="list"
                />
            </InfoContainer>
        </>
    );
}

export default Home;
