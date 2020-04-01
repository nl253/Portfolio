import React from 'react';
import Project from './Project';

const project = (
  <Project
    name="Traffic Simulator"
    methodology="solo project"
    repo={`${process.env.REACT_APP_GITHUB}/TrafficSimulator`}
    summary={`
    This library allows for testing if your website can handle user load. It simulates user activity by making fake HTTP GET requests.
    `}
    date="April 2019"
    language={{
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org',
    }}
    imgs={[
      {
        alt: 'screenshot of the README file summarising the TrafficSimulator library',
        heading: 'Node.js Library',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/TrafficSimulator/Info.jpg`,
      },
      {
        alt: 'screenshot of the README with API docs',
        heading: 'Documented API',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/TrafficSimulator/API.jpg`,
      },
      {
        alt: 'screenshot of the README with API docs discussing profiling',
        heading: 'Allows Profiling',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/TrafficSimulator/Profiling.jpg`,
      },
      {
        alt: 'screenshot of the README with API docs describing the exported class interface',
        heading: 'Easy to Extend',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/TrafficSimulator/Extensible.jpg`,
      },
      {
        alt: 'screenshot of the README with API docs describing the defaults',
        heading: 'Sane Defaults',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/TrafficSimulator/Defaults.jpg`,
      },
    ]}
    links={[
      {
        name: 'NPM package',
        url: 'https://www.npmjs.com/package/traffic-simulator',
      }
    ]}
  />
);

// eslint-disable-next-line import/prefer-default-export
export const getTrafficSimulator = () => project;
