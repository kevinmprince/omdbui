/**
 * Copyright 2019, Kevin Prince
 */
import React from 'react';
import PropTypes from 'prop-types';
import StackGrid, { transitions, easings } from 'react-stack-grid';
import './stackedmoviegrid/StackedMovieGrid.css';

const transition = transitions.scaleDown;

const getPosterURL = ({ Poster: url }) =>
  url && url !== 'N/A'
    ? url
    : 'http://pages.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg';

const StackedMovieGrid = ({ movieList, columnWidth, onSelectMovie }) => {
  const colWidth = columnWidth || 300;

  /**
   * Calls onSelectMovie callback with the movie data of the selected movie
   *
   * @param index - The index of the movie poster
   * @return all the data passed in from the movie
   */
  const selectMovie = index => () => onSelectMovie(movieList[index]);

  return (
    <StackGrid
      monitorImagesLoaded
      columnWidth={colWidth}
      duration={600}
      gutterWidth={20}
      gutterHeight={15}
      easing={easings.cubicOut}
      appearDelay={60}
      appear={transition.appear}
      appeared={transition.appeared}
      enter={transition.enter}
      entered={transition.entered}
      leaved={transition.leaved}
      role="list"
    >
      {movieList.map((movie, index) => (
        <div
          key={movie.imdbID}
          role="button listitem"
          tabIndex={0}
          onKeyPress={selectMovie(index)}
          onClick={selectMovie(index)}
        >
          <div
            key={movie.imdbID}
            className="prince-StackedMovieGrid--poster"
            width={colWidth}
            style={{
              backgroundImage: `url(${getPosterURL(movie)})`,
              height: 175
            }}
          />
          <figcaption className="prince-StackedMovieGrid--caption">
            {movie.Title}
          </figcaption>
        </div>
      ))}
    </StackGrid>
  );
};

StackedMovieGrid.propTypes = {
  /**
   * Callback for when a movie is selected
   * @return the data of the movie, see data prop for more dteails
   */
  onSelectMovie: PropTypes.func.isRequired,

  columnWidth: PropTypes.number.isRequired,

  /**
   * The selected movies data being passed in. This data structure is defined by the REST endpoint.
   * See https://www.omdbapi.com/ for additional details
   */
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
export default StackedMovieGrid;
