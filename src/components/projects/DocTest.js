import React from 'react';
import Project from './Project';

const project = (
  <Project
    name="Unit testing tool"
    methodology="solo project"
    repo="https://github.com/nl253/DocTest"
    summary={`This command line utility allows to run tests from within doc strings in your project.
    This uses the JSDoc syntax @test followed by an expression and expected output.
    Python has a similar, but a more sophisticated tool.`}
    date="Jan 2020 (ongoing maintenance & adding features)"
    language={{
      name: 'JavaScript (Node.js)',
      url: 'https://nodejs.org/en/',
    }}
    imgs={[
      {
        alt: 'example of usage within a docstring',
        heading: 'Write Small Unit Tests in Doc Strings',
        src: '/img/DocTest/1.jpg',
      },
      {
        alt: 'example of usage within a docstring',
        heading: 'Easy to Use & Test Code',
        src: '/img/DocTest/2.jpg',
      },
      {
        alt: 'screenshot of terminal with results displayed',
        heading: 'Command Line Test Runner',
        src: '/img/DocTest/3.jpg',
      },
      {
        alt: 'screenshot of terminal with command line options (flags)',
        heading: 'Command Line Interface With Options',
        src: '/img/DocTest/4.jpg',
      },
    ]}
    links={[
      {
        name: 'NPM package',
        url: 'https://www.npmjs.com/package/simple-doc-tester',
      },
    ]}
  />
);

// eslint-disable-next-line import/prefer-default-export
export const getDocTest = () => project;
