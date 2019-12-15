import Project from './Project';
import React from 'react';

const project = (
  <Project name="Yuconz Staff Reviews Management System"
           date="October 2017 to May 2018"
           repo="https://github.com/nl253/Software-Engineering-Project"
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
               src: '/img/YuconzDashboardHREmployee.png',
               alt: 'HR employee dashboard',
               heading: 'Privilege System',
             },
             {
               src: '/img/YuconzDashboardHR.png',
               alt: 'personal details record search',
               heading: 'Search for Personal Details',
             },
             {
               src: '/img/YuconzDashboardReviewer.png',
               alt: 'reviewer dashboard',
               heading: 'Edit Review Records',
             },
             {
               src: '/img/YuconzLogin.jpg',
               alt: 'log in dialog',
               heading: 'Authentication',
             },
             {
               src: '/img/YuconzDashboardAccessReview.png',
               alt: 'annual performance review',
               heading: 'Manage Review Records',
             },
             {
               src: '/img/YuconzDashboardUser.png',
               alt: 'user dashboard',
               heading: 'Access Your Reviews',
             },
           ]}
           methodology="Agile (Scrum)"
           language={{
             name: 'Java',
             url: 'https://docs.oracle.com/en/java/index.html',
           }}
  />);

export const getYuconz = () => project;
