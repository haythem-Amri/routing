import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import Modal from './Modal'
import "./MovieList.css"



export default function MovieList(props) {
    const [filter, setFilter] = useState(false);
    const [title, setTitle] = useState(false)
    const changeFilter = () => setFilter(!filter);
    const changeTitle = () => setTitle(!title);


    const [movieList, setMovieList] = useState([{
        title: "Casa del papel",
        description: "Money Heist (Spanish: La casa de papel, The House of Paper) is a Spanish heist crime drama television series created by Álex Pina. The series traces two .",
        posterURL: "https://static.fnac-static.com/multimedia/Images/FD/Comete/147721/CCP_IMG_ORIGINAL/1947893.jpg",
        rating: 5
    },
    {
        title: "Game OF throne",
        description: "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and ",
        posterURL: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
        rating: 5
    },
    {
        title: "ROOM",
        description: "Room (2015) Brie Larson and Jacob Tremblay | Film bilgileri, Film afişleri, Film posteri",
        posterURL: "https://i.pinimg.com/564x/a4/14/6e/a4146eb068cbe850ac23d3ba36cba452--top-film-room-movie-.jpg",
        rating: 6
    },
    {
      title: "Mr Robot",
      description: "TV Series. Thriller. Drama TV Series (2015-2019). 4 Seasons. 46 Episodes. Follows a mysterious anarchist who recruits a young computer programmer (Malek) who",
      posterURL: "https://pics.filmaffinity.com/Mr_Robot_TV_Series-978107021-large.jpg",
      rating: 5
  },
  {
    title: "THe Originals",
    description: "Klaus, the original vampire/werewolf hybrid, returns to New Orleans -- which his family helped build -- to investigate rumors of a plot against him, in ",
    posterURL: "https://resizing.flixster.com/0_quMw56WNfY_DrZAT6-EugIe8Y=/206x305/v2/https://flxt.tmsimg.com/assets/p9944343_b_v8_al.jpg",
    rating: 5
},
{
  title: "The Vampire Diaries",
  description: "Vampire Diaries, based off a series written 15 years before Twilight,is about a girl Elena who just lost her parents when a new guy, Stefan Salvatore, ",
  posterURL: "https://resizing.flixster.com/G6nNvLX4x-o1sQW0i1241hccN-E=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p3563021_b_h9_bb.jpg",
  rating: 9
},
 ]);
    useEffect(() => {
        console.log(movieList);

    }, [movieList])
    const filterByRate = () => {
        filter ? setMovieList(movieList.sort((a, b) => b.rating - a.rating)) : setMovieList(movieList.sort((a, b) => a.rating - b.rating));
    }
    const filterByTitle = () => {
        title ? setMovieList(movieList.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))) : setMovieList(movieList.sort((a, b) => (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 : 0)))
    }
    return (



        <>
            <Modal movies={movieList} newList={(movie) => setMovieList(movie)} ></Modal>
            <div className="btns">
                <button className="filter" onClick={() => { changeFilter(); filterByRate();}}>Filter By rank</button>
                <button className="title" onClick={() => { changeTitle(); filterByTitle() }}>Filter By Title</button>
            </div>
            <div className="list">
                {movieList.map(el => <MovieCard title={el.title} rating={el.rating} description={el.description} posterURL={el.posterURL} />
                )}
            </div>
        </>
    )
}
