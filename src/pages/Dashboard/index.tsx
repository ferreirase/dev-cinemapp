/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react/button-has-type */
/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */

import React, { useState, useCallback } from 'react';
import { Checkbox } from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';
import api from '../../services/api';
import Header from '../../components/Header';

import {
  Container,
  InputElement,
  ButtonElement,
  ListElement,
  BannerElement,
} from './styles';

interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const Dashboard: React.FC = () => {
  const [inputMovie, setInputMovie] = useState('');
  const [movies, setMovies] = useState([]);

  const handleMovieInputChange = useCallback((e: any) => {
    setInputMovie(e.target.value);
  }, []);

  const apiKey = '925eba28';

  const handleSearchButtonClick = useCallback(async () => {
    try {
      const response = await api.get(`/?apikey=${apiKey}&s=${inputMovie}`);

      if (response.data.Response === 'False') {
        alert('Filme não encontrado!');

        return;
      }
      setMovies(response.data.Search);
    } catch (error) {
      alert('Erro na busca do filme! Tente novamente em instantes.');
    }
  }, [inputMovie, setMovies]);

  const favoritedMovies: Array<Movie> = [];

  return (
    <>
      <Header />
      <Container>
        <InputElement
          placeholder="O que você busca..."
          value={inputMovie}
          onChange={handleMovieInputChange}
        />
        <ButtonElement onClick={handleSearchButtonClick}>Buscar</ButtonElement>
      </Container>
      {movies.map((movie: Movie) => (
        <ListElement key={movie.imdbID}>
          <BannerElement path={movie.Poster} />
          <h4>{movie.Title}</h4>
          <small>
            Ano:&nbsp;
            {movie.Year}
          </small>
          <Checkbox
            className="checkBox"
            color="primary"
            icon={<StarBorder />}
            checkedIcon={<Star />}
            onClick={(e: any) => {
              if (e.target.checked) {
                favoritedMovies.push(movie);
                localStorage.setItem(
                  'favoriteds',
                  JSON.stringify(favoritedMovies),
                );
              } else {
                const removeIndex = favoritedMovies
                  .map(item => item.imdbID)
                  .indexOf(movie.imdbID);

                favoritedMovies.splice(removeIndex, 1);
                localStorage.setItem(
                  'favoriteds',
                  JSON.stringify(favoritedMovies),
                );
              }
            }}
          />
        </ListElement>
      ))}
    </>
  );
};

export default Dashboard;
