/**
 * Copyright 2019, Kevin Prince
 */
import React, { Component } from 'react';
import axios from 'axios';
import Joyride from 'react-joyride';
import HeaderBar from './HeaderBar';
import MovieDrawer from './MovieDrawer';
import StackedMovieGrid from './StackedMovieGrid';
import './app/App.css';

import {
  API_KEY,
  JOYRIDE_STEPS,
  DEFAULT_SEARCH,
  JOYRIDE_SEARCH
} from './const';

const EMPTY_DATA = {
  Search: [],
  totalResults: 0
};

class App extends Component {
  state = {
    steps: JOYRIDE_STEPS,
    searchString: DEFAULT_SEARCH,
    data: EMPTY_DATA,
    selectedMovie: undefined
  };

  type = 'movie';

  year = '';

  plot = 'full';

  headerKey = 'avengers';

  constructor() {
    super();
    this.searchMovieData();
  }

  handleJoyrideCallback = data => {
    const { index, action } = data;

    if (index === 2 && action === 'next') {
      this.setState(
        {
          searchString: JOYRIDE_SEARCH
        },
        () => {
          this.headerKey = JOYRIDE_SEARCH;
          this.searchMovieData();
        }
      );
    }
  };

  searchMovieData = () => {
    const { searchString } = this.state;

    axios
      .get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&type=${
          this.type
        }&plot=full&s=${searchString}&y=${this.year}`
      )
      .then(({ data }) => {
        this.setState({ data: { ...EMPTY_DATA, ...data } });
      })
      .catch(error => {
        this.setState({ data: EMPTY_DATA });

        // TODO: Provide a nice message for the user
        console.error(error);
      });
  };

  fetchMovieData = id => {
    axios
      .get(`http://www.omdbapi.com/?apikey=${API_KEY}&plot=full&i=${id}`)
      .then(({ data }) => {
        this.setState({ selectedMovie: data });
      })
      .catch(error => {
        this.setState({ selectedMovie: undefined });

        // TODO: Provide a nice message for the user
        console.error(error);
      });
  };

  handleSearchChange = ({ target }) => {
    const { value } = target;
    this.setState(
      {
        searchString: value
      },
      () => {
        // debounce the value Change
        setTimeout(() => {
          const { searchString } = this.state;

          if (searchString === value) {
            this.searchMovieData();
          }
        }, 1000);
      }
    );
  };

  handleCloseDrawer = () => {
    this.setState({
      selectedMovie: undefined
    });
  };

  handleSelectMovie = data => {
    this.fetchMovieData(data.imdbID);
  };

  render() {
    const { steps, data, searchString, selectedMovie } = this.state;

    return (
      <div className="App">
        <Joyride
          continuous
          steps={steps}
          callback={this.handleJoyrideCallback}
          hideBackButton
          showProgress
          showSkipButton
          styles={{
            options: {
              primaryColor: '#106ba3'
            }
          }}
        />
        <HeaderBar
          key={this.headerKey}
          searchString={searchString}
          onSearchChange={this.handleSearchChange}
        />
        <div className="prince-App--stackedMovieGridContainer">
          <StackedMovieGrid
            movieList={data.Search}
            onSelectMovie={this.handleSelectMovie}
          />
        </div>
        <MovieDrawer
          selectedMovie={selectedMovie}
          onCloseDrawer={this.handleCloseDrawer}
        />
      </div>
    );
  }
}

export default App;
