/**
 * Copyright 2019, Kevin Prince
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, Tag, Card, Elevation } from '@blueprintjs/core';
import './moviedrawer/MovieDrawer.css';

/**
 * Provide a common navigational headerbar
 *
 * @author Kevin M Prince
 */
const MovieDrawer = ({ onCloseDrawer, selectedMovie = false }) => {
  return (
    <Drawer
      icon="info-sign"
      onClose={onCloseDrawer}
      title={selectedMovie.Title}
      isOpen={selectedMovie}
    >
      <div className="prince-MovieDrawer--container">
        <div className="prince-MovieDrawer--tagContainer">
          <Tag>{selectedMovie.Rated}</Tag>
          <Tag large icon="time">
            {selectedMovie.Runtime}
          </Tag>
          <Tag large icon="calendar">
            {selectedMovie.Year}
          </Tag>
          <Tag large icon="thumbs-up">
            {selectedMovie.imdbVotes}
          </Tag>

          <Tag large>{selectedMovie.BoxOffice}</Tag>

          <br />
        </div>

        <Card className="prince-MovieDrawer--card" elevation={Elevation.TWO}>
          <p className="prince-MovieDrawer--cardTitle">Plot</p>
          <p>{selectedMovie.Plot}</p>
        </Card>

        <Card className="prince-MovieDrawer--card" elevation={Elevation.TWO}>
          <p className="prince-MovieDrawer--cardTitle">Ratings</p>
          {selectedMovie.Ratings &&
            selectedMovie.Ratings.map(({ Source, Value }) => {
              return (
                <div key={Source} className="prince-MovieDrawer--rating">
                  {`${Source}: ${Value}`}
                  <br />
                </div>
              );
            })}
        </Card>

        <Card className="prince-MovieDrawer--card" elevation={Elevation.TWO}>
          <h3>Writer</h3>
          {selectedMovie.Director}
          <br />
          <h3>Director</h3>
          {selectedMovie.Writer}
          <br />
          <h3>Actors</h3>
          {selectedMovie.Actors}
          <br />
        </Card>
      </div>
    </Drawer>
  );
};

MovieDrawer.propTypes = {
  /**
   * Callback for the drawer being closed
   */
  onCloseDrawer: PropTypes.func.isRequired,

  /**
   * The selected movie data being passed in. This data structure is defined by the REST endpoint.
   * See https://www.omdbapi.com/ for additional details
   */
  selectedMovie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Rated: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    Writer: PropTypes.string.isRequired,
    Actors: PropTypes.string.isRequired,
    Runtime: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbVotes: PropTypes.string.isRequired,
    BoxOffice: PropTypes.string.isRequired,
    Ratings: PropTypes.arrayOf(
      PropTypes.shape({
        Source: PropTypes.string.isRequired,
        Value: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default MovieDrawer;
