import React from 'react';
import Project from './Project';

const project = (
  <Project
    name="Genetic Algorithm"
    methodology="solo project"
    repo={`${process.env.REACT_APP_GITHUB}/GeneticAlgo`}
    summary={`
    This library implements a multi-objective genetic algorithm. It allows to carry out AI tasks that could not be done using regular computer science / programming methods. This is in cases where the complexity of the problem is so large that the runtime of the corresponding algorithm would take more than is acceptable.
    The advantage of this library is that it allows to specify many criteria (objectives) that the search would be guided by.
    `}
    date="April 2019 (ongoing maintenance & adding features)"
    language={{
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org',
    }}
    imgs={[
      {
        alt: 'screenshot of the README file summarising the GeneticAlgo library',
        heading: 'Powerful Genetic Algorithm Library',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/GeneticAlgo/Info.jpg`,
      },
      {
        alt: 'screenshot of the README with API docs',
        heading: 'Documented API',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/GeneticAlgo/API.jpg`,
      },
      {
        alt: 'screenshot of the README with API docs with an example of multi-objective use',
        heading: 'Multiobjective',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/GeneticAlgo/Multiobjective.jpg`,
      },
      {
        alt: 'screenshot of the README with API docs describing the theory',
        heading: 'Well Documented & Explained',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/GeneticAlgo/Docs.jpg`,
      },
      {
        alt: 'screenshot of the README with API docs discussing profiling',
        heading: 'Allows Profiling',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/GeneticAlgo/Profiling.jpg`,
      },
      {
        alt: 'screenshot of the README with API docs with info about typed arrays and data types',
        heading: 'Built on Typed Arrays',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/GeneticAlgo/Typed.jpg`,
      },
    ]}
    links={[
      {
        name: 'NPM package',
        url: 'https://www.npmjs.com/package/genetic-algo',
      }
    ]}
  />
);

// eslint-disable-next-line import/prefer-default-export
export const getGeneticAlgo = () => project;
