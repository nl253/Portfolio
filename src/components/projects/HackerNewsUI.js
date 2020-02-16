import React from 'react';
import Project from './Project';

const project = (
  <Project
    name="Alternative UI For News YCombinator"
    methodology="solo project"
    repo="https://github.com/nl253/HNUI"
    summary={`This was a React.js app that I made for myself more than anybody else. I love Hacker News but I've always found the UI to be very outdated.`}
    date="Dec 2019 (ongoing maintenance & adding features)"
    language='JavaScript'
    imgs={[
      {
        src: '/img/HackerNewsUI/1.jpg',
        alt: 'screenshot of the web app',
        heading: 'Modern UI'
      },
      {
        src: '/img/HackerNewsUI/2.jpg',
        alt: 'screenshot of the web app (story view)',
        heading: 'Mobile First'
      },
      {
        src: '/img/HackerNewsUI/3.jpg',
        alt: 'screenshot of the web app on a phone (post listing)',
        heading: 'Mobile First (2)'
      },
      {
        src: '/img/HackerNewsUI/4.jpg',
        alt: 'screenshot of the web app with nested comments',
        heading: 'Nested Comments Color-Coded'
      },
      {
        src: '/img/HackerNewsUI/5.jpg',
        alt: 'screenshot of the web app with story sorting by comments',
        heading: 'Sort Stories'
      },
      {
        src: '/img/HackerNewsUI/6.jpg',
        alt: 'screenshot of the web app with story sorting by freshness',
        heading: 'Sort Stories (2)'
      }
    ]}
    links={[
      {
        name: 'Deployed on Heroku',
        url: 'https://hn-nl.herokuapp.com',
      },
      {
        name: 'REST API',
        url: 'https://github.com/HackerNews/API',
      },
      {
        name: 'OLD Hacker News UI',
        url: 'https://news.ycombinator.com/',
      },
    ]}
    frameworks={[
      {
        name: 'React.js',
        url: 'https://reactjs.org',
      },
      {
        name: 'Bootstrap',
        url: 'https://getbootstrap.com/',
      }
    ]}
  />
);

// eslint-disable-next-line import/prefer-default-export
export const getHackerNewsUI = () => project;
