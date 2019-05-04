/**
 * Copyright 2019, Kevin Prince
 */
import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from '@blueprintjs/core';
import { JOYRIDE_CLASSNAMES } from './const';
import './headerbar/HeaderBar.css';

/**
 * Provide a common navigational headerbar
 *
 * @author Kevin M Prince
 */
const HeaderBar = ({ onSearchChange, searchString }) => {
  return (
    <div className="prince-HeaderBar">
      <h1
        className={`prince-HeaderBar--applicationName ${
          JOYRIDE_CLASSNAMES.LOGO
        }`}
      >
        FlixFinder
      </h1>
      <div className={JOYRIDE_CLASSNAMES.SEARCH}>
        <InputGroup
          className="prince-HeaderBar--applicationSearch"
          leftIcon="search"
          onChange={onSearchChange}
          defaultValue={searchString}
          placeholder="Search"
          round
          large
        />
      </div>
    </div>
  );
};

HeaderBar.propTypes = {
  /**
   * Callback for the search changed
   * @param {string} the new search string
   */
  onSearchChange: PropTypes.func.isRequired,

  /**
   * The initial search string
   */
  searchString: PropTypes.string.isRequired
};

export default HeaderBar;
