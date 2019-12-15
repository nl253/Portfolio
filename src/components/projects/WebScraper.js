import Project from './Project';
import React from 'react';

const project = (
  <Project name="Simple Web Scraper"
           date="June 2018 (ongoing maintenance & adding features)"
           repo="https://github.com/nl253/WebScraper"
           summary={`A simple web scraping library that allows to collect data from the web and save it in a database (perhaps for analysis).
                       The library is published on Node Package Manager (NPM) repositories so you can include it any node project.`}
           imgs={[
             {
               src: '/img/WebScraperREADME1.png',
               alt: 'README file describing the library and the API',
               heading: 'Scrape Web Pages',
             },
             {
               src: '/img/WebScraperREADME2.png',
               alt: 'README file describing the library and the API',
               heading: 'Simple, Intuitive API',
             },
             {
               src: '/img/WebScraperREADME3.png',
               alt: 'README file describing the library and the API',
               heading: 'Extensible',
             },
             {
               src: '/img/WebScraperREADME1.png',
               alt: 'README file describing the library and the API',
               heading: 'Published on NPM',
             },
           ]}
           methodology="solo project"
           language={{
             name: 'Python',
             url: 'https://www.python.org',
           }}
  />);

export const getWebScraper = () => project;
