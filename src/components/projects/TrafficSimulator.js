import Project from './Project';
import React from 'react';

const project = (
  <Project
    name="Traffic Simulator"
    methodology="solo project"
    repo="https://github.com/nl253/TrafficSimulator-JS"
    summary={`
    This library allows for testing if your website can handle user load. It simulates user activity by making fake HTTP GET requests.
    `}
    date='April 2019'
    language={{
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org',
    }}
    imgs={[
      {
        alt: 'screenshot of the README file summarising the TrafficSimulator library',
        heading: 'Powerful Tabular Data Manipulation Library',
        src: '/img/TrafficSimulator/Info.jpg',
      },
      {
        alt: 'screenshot of the README with API docs',
        heading: 'Documented API',
        src: '/img/TrafficSimulator/API.jpg',
      },
      {
        alt: 'screenshot of the README with API docs discussing profiling',
        heading: 'Allows Profiling',
        src: '/img/TrafficSimulator/Profiling.jpg',
      },
      {
        alt: 'screenshot of the README with API docs describing the exported class interface',
        heading: 'Easy to Extend',
        src: '/img/TrafficSimulator/Extensible.jpg',
      },
      {
        alt: 'screenshot of the README with API docs describing the defaults',
        heading: 'Sane Defaults',
        src: '/img/TrafficSimulator/Defaults.jpg',
      },
    ]}
    links={[
      {
        name: 'NPM.js',
        url: 'https://www.npmjs.com/package/traffic-simulator',
      }
    ]}
  />);

export const getTrafficSimulator = () => project;
