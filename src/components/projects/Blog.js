import React from 'react';
import Project from './Project';

const project = (
  <Project
    name="Personal Blog to Manage Notes"
    methodology="solo project"
    repo={`${process.env.REACT_APP_GITHUB}/Blog`}
    summary={`This blog was supposed to store and display my university notes.
    It was also one of the first semi-serious projects I worked on.
    I spent about a month working on it on during the summer after the first year of my degree.
    In that project I learnt how to use Python and I taught myself basics of Flask.
    When I became more familiar with JavaScript and React.js I fine-tuned and rewrote to be a single page application for better user experience.
    The categories, lists of posts and content ot posts are pulled from the GitHub REST API.`}
    date="August 2017"
    language="JavaScript"
    imgs={[
      {
        alt: 'home page of a blog with a sidebar listing categories',
        heading: 'Posts & Categories',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/Blog/1.jpg`,
      },
      {
        alt: 'a blog page with a sidebar',
        heading: 'Markdown Rendered Posts',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/Blog/2.jpg`,
      },
      {
        alt: 'a blog with a post',
        heading: 'Uses GitHub REST API & UI (React)',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/Blog/3.jpg`,
      },
      {
        alt: 'a blog post',
        heading: 'Blog Post',
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/Blog/4.jpg`,
      },
    ]}
    links={[
      {
        name: 'Deployed on Heroku',
        url: 'https://blog-nl.herokuapp.com',
      },
    ]}
    frameworks={[
      {
        name: 'React.js',
        url: 'https://reactjs.org/',
      },
      {
        name: 'Bootstrap',
        url: 'https://getbootstrap.com/',
      },
    ]}
  />
);

// eslint-disable-next-line import/prefer-default-export
export const getBlog = () => project;
