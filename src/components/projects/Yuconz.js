import React from 'react';
import Project from './Project';

const project = (
  <Project
    name="Yuconz Staff Reviews Management System"
    date="October 2017 to May 2018"
    repo={`${process.env.REACT_APP_GITHUB}/Software-Engineering-Project`}
    framework={{
      name: 'JavaFX',
      url: 'https://docs.oracle.com/javafx/2/get_started/jfxpub-get_started.htm',
    }}
    summary={`This was an Agile university project that was supposed to teach us good software engineering practices.
              The app was a graphical user interface (GUI) application built with Java (so cross-platform) that was created for an imaginary company called "Yuconz".
              It was meant to help the HR department manage "annual performance review records".
              We used the standard Agile practices such as user stories, UML, sprint backlog etc.
              Thought the project we also had to use UML (class & sequence diagrams) to discuss and plan the architecture of the system we were designing.`}
    imgs={[
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/Yuconz/DashboardHREmployee.jpg`,
        alt: 'HR employee dashboard',
        heading: 'Privilege System',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/Yuconz/DashboardHR.jpg`,
        alt: 'personal details record search',
        heading: 'Search for Personal Details',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/Yuconz/DashboardReviewer.jpg`,
        alt: 'reviewer dashboard',
        heading: 'Edit Review Records',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/Yuconz/Login.jpg`,
        alt: 'log in dialog',
        heading: 'Authentication',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/Yuconz/DashboardAccessReview.jpg`,
        alt: 'annual performance review',
        heading: 'Manage Review Records',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/Yuconz/DashboardUser.jpg`,
        alt: 'user dashboard',
        heading: 'Access Your Reviews',
      },
    ]}
    methodology="Agile (Scrum)"
    language={{
      name: 'Java',
      url: 'https://docs.oracle.com/en/java/index.html',
    }}
  />
);

// eslint-disable-next-line import/prefer-default-export
export const getYuconz = () => project;
