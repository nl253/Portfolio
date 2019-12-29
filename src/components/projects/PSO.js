import React from 'react';
import Project from './Project';

const project = (
  <Project
    name="Particle Swarm Optimisation"
    methodology="solo project"
    repo="https://github.com/nl253/PSO"
    summary={`
    This library implements the Particle Swarm Optimisation (PSO) algorithm. It allows to carry out AI tasks that could not be done using regular computer science / programming methods. This is in cases where the complexity of the problem is so large that the runtime of the corresponding algorithm would take more than is acceptable.
    It is particularly well suited to problems that can be translated to traversing of a real multi-dimensional space.
    `}
    date="April 2019"
    language={{
      name: 'JavaScript (Node.js)',
      url: 'https://nodejs.org',
    }}
    imgs={[
      {
        alt: 'screenshot of the README file summarising the PSO library',
        heading: 'Global Search For Real Values',
        src: '/img/PSO/Info.jpg',
      },
      {
        alt: 'screenshot of the README with API docs',
        heading: 'Documented API',
        src: '/img/PSO/API.jpg',
      },
      {
        alt: 'screenshot of the README with API docs describing the theory',
        heading: 'Well Documented & Explained',
        src: '/img/PSO/Docs.jpg',
      },
      {
        alt: 'screenshot of the README with API docs discussing profiling',
        heading: 'Allows Profiling',
        src: '/img/PSO/Profiling.jpg',
      },
      {
        alt: 'screenshot of the README with API docs',
        heading: 'Documented API',
        src: '/img/PSO/Defaults.jpg',
      },
    ]}
    links={[
      {
        name: 'NPM.js',
        url: 'https://www.npmjs.com/package/particle-swarm-optimization',
      }
    ]}
  />
);

// eslint-disable-next-line import/prefer-default-export
export const getPSO = () => project;
