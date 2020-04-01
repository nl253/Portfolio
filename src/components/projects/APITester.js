import React from 'react';
import Project from './Project';

const project = (
  <Project
    name="Automated Rest API Testing Tool"
    methodology="solo project"
    repo={`${process.env.REACT_APP_GITHUB}/ApiTester`}
    summary={`This utility automates testing of JSON REST APIs.
    All you need to do is specify the description of the API for test in a JSON file (similar to a swagger file / a postman collection JSON file).`}
    date="Jan 2020 (ongoing maintenance & adding features)"
    language={{
      name: 'JavaScript (Node.js)',
      url: 'https://nodejs.org/en/',
    }}
    imgs={[
      {
        alt: 'test output with full logging',
        heading: 'Test JSON REST APIs',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/APITester/3.jpg`,
      },
      {
        alt: 'test output with partial logging',
        heading: 'Control Output',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/APITester/2.jpg`,
      },
      {
        alt: 'test output with partial logging',
        heading: 'Control Output (2)',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/APITester/4.jpg`,
      },
      {
        alt: 'example of JSON file with specification of the API for testing',
        heading: 'Example (JSON schema validated)',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/APITester/5.jpg`,
      },
      {
        alt: 'command line interface with various options',
        heading: 'Command Line Interface (control output logging)',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/APITester/1.jpg`,
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
