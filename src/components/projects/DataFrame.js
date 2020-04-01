import React from 'react';
import Project from './Project';

const project = (
  <Project
    name="Tabular Data Manipulation Library"
    methodology="solo project"
    repo={`${process.env.REACT_APP_GITHUB}/DataFrame`}
    summary={`
    I began this project because I really enjoyed JavaScript and Node.js but there is a distinct lack of a pandas-like library that Python has for tabular data manipulation.
    DataFrame was supposed to fill that gap by providing a very convienient high-level API allowing to pre-process small datasets for machine learning and data analysis tasks.
    `}
    date="Jan 2019 (ongoing maintenance & adding features)"
    language={{
      name: 'JavaScript (Node.js)',
      url: 'https://nodejs.org',
    }}
    imgs={[
      {
        alt: 'screenshot of the README file summarising the DataFrame library',
        heading: 'Powerful Tabular Data Manipulation Library',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/DataFrame/Info.jpg`,
      },
      {
        alt: 'screenshot of a Data Frame as produced by the DataFrame library (default printing preset)',
        heading: 'Easy, Human-Friendly API',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/DataFrame/TableDefault.jpg`,
      },
      {
        alt: 'screenshot of a Data Frame as produced by the DataFrame library (minimal printing preset)',
        heading: 'Customizable (minimal)',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/DataFrame/TableMinimal.jpg`,
      },
      {
        alt: 'screenshot of a Data Frame as produced by the DataFrame library (programmers printing preset)',
        heading: 'Customizable (programmers)',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/DataFrame/TableProgrammers.jpg`,
      },
      {
        alt: 'screenshot of the README with API docs',
        heading: 'Powerful Selecting',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/DataFrame/Selecting.jpg`,
      },
      {
        alt: 'screenshot of the README with API docs (2)',
        heading: 'Aggregate Operations',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/DataFrame/Aggregates.jpg`,
      },
      {
        alt: 'screenshot of the README with API docs (3)',
        heading: 'Export to SQL, CSV, JSON, HTML',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/DataFrame/Exports.jpg`,
      },
    ]}
    links={[
      {
        name: 'NPM package',
        url: 'https://www.npmjs.com/package/dataf',
      },
    ]}
  />
);

// eslint-disable-next-line import/prefer-default-export
export const getDataFrame = () => project;
