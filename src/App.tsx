import React from 'react';

import { MovieProps } from './interface/MovieProps';
import logo from './logo.svg';
import Form from './component/Form';
import List from './component/List';
import './App.css';

function App() {
  const [movieList, setMovieList] = React.useState<MovieProps["movieList"]>([]);

  return (
    <>
      <h1>My Movies</h1>
      <Form movieList={movieList} setMovieList={setMovieList} />
      <List movieList={movieList} />
    </>
  );
}

export default App;
