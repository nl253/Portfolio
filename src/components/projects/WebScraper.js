import React from 'react';
import Project from './Project';

const project = (
  <Project
    name="Simple Web Scraper"
    date="June 2018 (ongoing maintenance & adding features)"
    repo={`${process.env.REACT_APP_GITHUB}/WebScraper`}
    summary={`A simple web scraping library that allows to collect data from the web and save it in a database (perhaps for analysis).
                       The library is published on Node Package Manager (NPM) repositories so you can include it any node project.`}
    imgs={[
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/WebScraper/Info.jpg`,
        alt: 'README file describing the library and the API',
        heading: 'Scrape Web Pages',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/WebScraper/Example.jpg`,
        alt: 'README file describing the library and the API',
        heading: 'Simple, Intuitive API',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/WebScraper/Defaults.jpg`,
        alt: 'README file describing the library and the API',
        heading: 'Extensible',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/WebScraper/Example2.jpg`,
        alt: 'README file describing the library and the API',
        heading: 'Published on NPM',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/WebScraper/Exports.jpg`,
        alt: 'README file describing the library and the API',
        heading: 'Export API',
      },
    ]}
    methodology="solo project"
    links={{
      name: 'NPM package',
      url: 'https://www.npmjs.com/package/dataf',
    }}
    language={{
      name: 'JavaScript (Node.js)',
      url: 'https://nodejs.org',
    }}
  />
);

// eslint-disable-next-line import/prefer-default-export
export const getWebScraper = () => project;
