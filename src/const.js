/**
 * Copyright 2019, Kevin Prince
 */

/**
 * Define the classnames used by Joyride
 */
export const JOYRIDE_CLASSNAMES = {
  LOGO: 'prince-HeaderBar--applicationName',
  SEARCH: 'prince-HeaderBar--applicationSearchContainer'
};

/**
 * Developer API Key used to access REST data. This is not harmful to have as freefrom test since the
 * data is severly restricted.
 */
export const API_KEY = 'e28ffd13';

/**
 * Steps used to configure Joyride. This is how we configure showing features in the app to new users.
 * TODO: implement i18n messages
 */
export const JOYRIDE_STEPS = [
  {
    title: 'Our LOGO',
    target: `.${JOYRIDE_CLASSNAMES.LOGO}`,
    content:
      'This is the name of the application. If you ever forget, it will always be here.'
  },
  {
    title: 'Search Here',
    target: `.${JOYRIDE_CLASSNAMES.SEARCH}`,
    content: `If you have no idea why you're here, it's because you are looking for something. A movie perhaps? Well, we picked one for you to get you started. You might notice the movies below.`
  },
  {
    title: 'Change Search',
    target: `.${JOYRIDE_CLASSNAMES.SEARCH}`,
    content: `When you change your search, the list below will update. Pretty cool, huh?`
  },
  {
    title: 'View Details',
    target: `#root > div > div.prince-App--stackedMovieGridContainer > div > span:nth-child(2) > div`,
    content: `When you see a movie you like, click it to view more details.`
  }
];

/**
 * This is the initial search selection. We probably don't want this in production, but it makes a good POC
 */
export const DEFAULT_SEARCH = 'avengers';

/**
 * This is a second search value used by Joyride
 */
export const JOYRIDE_SEARCH = 'iron';
