import React from 'react';
import Project from './Project';

const project = (
  <Project
    name="Free Learn"
    methodology="Agile (Scrum)"
    repo={`${process.env.REACT_APP_GITHUB}/CO600_Project`}
    date="October 2018 to May 2019"
    imgs={[
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/FreeLearn/Home.jpg`,
        heading: 'Home Page',
        alt: 'registration and login forms of a website',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/FreeLearn/Module.jpg`,
        heading: 'Enroll to Modules',
        alt: 'module page with rating and "enrol" btn',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/FreeLearn/EnrollmentsModule.jpg`,
        heading: 'Rate Modules',
        alt: 'modules page with a list of modules you enrolled in',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/FreeLearn/EnrollmentsLesson.jpg`,
        heading: "Learn from User's content",
        alt: 'lesson',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/FreeLearn/EnrollmentsQuiz.jpg`,
        heading: 'Take a Quiz',
        alt: 'enroll to modules',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/FreeLearn/ModifyModule.jpg`,
        heading: 'Create Modules',
        alt: 'module page with rating',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/FreeLearn/ModifyLesson.jpg`,
        heading: 'Create Interactive Lessons',
        alt: 'lesson creation panel',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/FreeLearn/ModifyQuiz.jpg`,
        heading: 'Create a Quiz',
        alt: 'quiz creation panel',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/FreeLearn/Search.jpg`,
        heading: 'Search for Modules',
        alt: 'search page for modules',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/FreeLearn/UserHome.jpg`,
        heading: 'User Home',
        alt: 'home page of a user with enrollments, my content and settings buttons',
      },
    ]}
    summary={`FreeLearn was a learning website much like Khan Academy or Udemy.
              FreeLearn was my final year project in university. The challenge here was
              to use Node.js & Express.js which none of us was familiar with and build a website
              from scratch. We've had to design our own database schema, implement token-based authentication & routing.
              We've used UML throughout the project to convey more complex ideas. The choice of Node meant that the whole codebase was in JavaScript.
              This was done in a small, 3-person Scrum group in which we spent a lot of time on discussing the design and layout of every page so that the website provided good user experience.`}
    framework={
      {
        name: 'Bulma CSS',
        url: 'https://bulma.io/',
      }
    }
    language={{
      name: 'JavaScript (Node.js)',
      url: 'https://nodejs.org/en/',
    }}
  />
);

// eslint-disable-next-line import/prefer-default-export
export const getFreeLearn = () => project;
