import React from 'react';
import Project from './Project';

const project = (
  <Project
    name="Personal Blog to Manage Notes"
    methodology="solo project"
    repo="https://github.com/nl253/FlaskyBlog"
    summary={`This blog was supposed to store and display my university notes.
    It was also  one of the first semi-serious projects I worked on.
    I spent about a month working on it on during the summer after the first year of my degree.
    In that project I learnt how to use Python and I taught myself basics of Flask.
    I ended up not using the blog but it is out there on the internet (deployed on Heroku) available for anyone interested to see.
    `}
    date="August 2017"
    language={{
      name: 'Python',
      url: 'https://www.python.org',
    }}
    imgs={[
      {
        alt: 'home page of a blog with a sidebar listing categories',
        heading: 'Posts & Categories',
        src: '/img/FlaskyBlog/1.jpg',
      },
      {
        alt: 'a blog page with a sidebar',
        heading: 'Markdown Rendered Posts',
        src: '/img/FlaskyBlog/2.jpg',
      },
      {
        alt: 'a blog with a post',
        heading: 'API (Flask - Python3) & UI (React)',
        src: '/img/FlaskyBlog/3.jpg',
      },
      {
        alt: 'a blog post',
        heading: 'Blog Post',
        src: '/img/FlaskyBlog/4.jpg',
      },
    ]}
    links={[
      {
        name: 'FlaskyBlog deployed on Heroku',
        url: 'https://blog-nl.herokuapp.com',
      },
    ]}
    frameworks={[
      {
        name: 'Flask',
        url: 'http://flask.pocoo.org',
      },
      {
        name: 'Bootstrap',
        url: 'https://getbootstrap.com/',
      }
    ]}
  />
);

// eslint-disable-next-line import/prefer-default-export
export const getFlaskyBlog = () => project;
