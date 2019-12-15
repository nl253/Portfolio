import Project from './Project';
import React from 'react';

const project = (
  <Project name="Free Learn"
           methodology="Agile (Scrum)"
           repo="https://github.com/nl253/CO600_Project"
           date="October 2018 to May 2019"
           imgs={[
             {
               src: '/img/FreeLearnHome.png',
               heading: 'Home Page',
               alt: 'registration and login forms of a website',
             },
             {
               src: '/img/FreeLearnModule.png',
               heading: 'Enroll to Modules',
               alt: 'module page with rating and "enrol" btn',
             },
             {
               src: '/img/FreeLearnEnrollmentsModule.png',
               heading: 'Rate Modules',
               alt: 'modules page with a list of modules you enrolled in',
             },
             {
               src: '/img/FreeLearnEnrollmentsLesson.png',
               heading: "Learn from User's content",
               alt: 'lesson',
             },
             {
               src: '/img/FreeLearnEnrollmentsQuiz.png',
               heading: 'Take a Quiz',
               alt: 'enroll to modules',
             },
             {
               src: '/img/FreeLearnModifyModule.png',
               heading: 'Create Modules',
               alt: 'module page with rating',
             },
             {
               src: '/img/FreeLearnModifyLesson.png',
               heading: 'Create Interactive Lessons',
               alt: 'lesson creation panel',
             },
             {
               src: '/img/FreeLearnModifyQuiz.png',
               heading: 'Create a Quiz',
               alt: 'quiz creation panel',
             },
             {
               src: '/img/FreeLearnSearch.png',
               heading: 'Search for Modules',
               alt: 'search page for modules',
             },
             {
               src: '/img/FreeLearnUserHome.png',
               heading: 'User Home',
               alt: 'home page of a user with enrollments, my content and settings buttons',
             },
           ]}
           summary={`FreeLearn was a learning website much like Khan Academy or Udemy.
                     FreeLearn was my final year project in university. The challenge here was
                     to use Node.js & Express.js which none of us was familiar with and build a website
                     from scratch. We've had to design our own database schema, implement token-based authentication & routing.
                     We've used UML throughout the project to convey more complex ideas. The choice of Node meant that the whole codebase was in JavaScript.
                     This was done in a small, 3-person Scrum group in which we spent a lot of time on discussing the design and layout of every page so that the website provided good user experience.
                    `}
           language={{
             name: 'JavaScript',
             url: 'https://nodejs.org/en/',
           }}
  />);

export const getFreeLearn = () => project;
