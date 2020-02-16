import React from 'react';
import Project from './Project';

const project = (
  <Project
    name="Automated Rest API Testing Tool"
    methodology="solo project"
    repo="https://github.com/nl253/ApiTester"
    summary={``}
    date="Jan 2020 (ongoing maintenance & adding features)"
    language={{
      name: 'JavaScript (Node.js)',
      url: 'https://nodejs.org/en/',
    }}
    imgs={[
      {
        alt: 'home page of a blog with a sidebar listing categories',
        heading: 'Posts & Categories',
        src: '/img/Blog/1.jpg',
      },
    ]}
    links={[
      {
        name: 'NPM package',
        url: 'https://www.npmjs.com/package/simple-api-tester',
      },
    ]}
  />
);

// eslint-disable-next-line import/prefer-default-export
export const getAPITester = () => project;
