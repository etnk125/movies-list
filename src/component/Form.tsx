import React, { Dispatch, SetStateAction, ChangeEvent, useState, MouseEvent } from 'react'
import { MovieProps } from '../interface/MovieProps';

interface Props {
  movieList: MovieProps["movieList"];
  setMovieList: Dispatch<SetStateAction<MovieProps["movieList"]>>;
}

function Form({ movieList, setMovieList }: Props) {
  const [title, setTitle] = useState<string>('');
  const [cover, setCover] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [imdb, setImdb] = useState<number>(0);

  const setTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }
  const setCoverHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCover(e.target.value);
  }
  const setGenreHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setGenre(e.target.value);
  }
  const setImdbHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setImdb(Number(e.target.value));
  }

  const addMovieHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (title.length > 0 && cover.length > 0 && genre.length > 0 && imdb > 0) {
      setMovieList(movieList.concat({
        Id: Date.now(),
        Title: title,
        Genre: genre,
        IMDB: imdb,
        Cover: cover
      }));
      return resetForm()
    }
    return alert('Please fill all the fields');
  }
  const resetForm = () => {
    setTitle('');
    setCover('');
    setGenre('');
    setImdb(0);
  }

  return (
    <>
      <h2>Form</h2>
      <div className="form-container">
        <div className="form-div">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={setTitleHandler} />
        </div>
        <div className="form-div">
          <label htmlFor="cover">Cover</label>
          <input type="text" id="cover" value={cover} onChange={setCoverHandler} />
        </div>
        <div className="form-div">
          <label htmlFor="genre">Genre</label>
          <input type="text" id="genre" value={genre} onChange={setGenreHandler} />
        </div>
        <div className="form-div">
          <label htmlFor="imdb">IMDB</label>
          <input type="number" id="imdb" value={imdb} onChange={setImdbHandler} />
        </div>
        <button onClick={addMovieHandler}>Add Movie</button>
      </div>
    </>
  )
}

export default Form