/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import { Star, StarBorder } from '@material-ui/icons';
import { Checkbox } from '@material-ui/core';
import Header from '../../components/Header';

import { ListElement, BannerElement } from './styles';

interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const Import: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>(() => {
    const storageRepositories = localStorage.getItem('favoriteds');

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  return (
    <>
      <Header size="small" />
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
            checked
            onClick={() => {
              const removeIndex = movies
                .map(item => item.imdbID)
                .indexOf(movie.imdbID);

              movies.splice(removeIndex, 1);

              localStorage.setItem('favoriteds', JSON.stringify(movies));
              setMovies(() => {
                const storageRepositories = localStorage.getItem('favoriteds');

                if (storageRepositories) {
                  return JSON.parse(storageRepositories);
                }
                return [];
              });
            }}
          />
        </ListElement>
      ))}
    </>
  );
};

export default Import;
