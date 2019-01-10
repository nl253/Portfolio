import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Project from './components/Project';

let _SQLiteREPL, _FreeLearn, _FlaskyBlog, _Yuconz, _VirtualMachine, _RegexEngine;

const ProjNavSect = ({heading, projNames, autoSel}) => {
  const ProjLink = ({proj, idx}) => {
    const url = `/projects/${proj.toLowerCase().replace(/\s+/, '-')}`;
    return (
        <Link to={url}
              key={idx}
              onClick={() => {
                const prevEl = document.querySelector( "aside h2 + nav a[href][class*='disabled']");
                if (prevEl) {
                  prevEl.classList.remove('disabled');
                }
                const thisEl = document.querySelector(`a[href='${url}']`);
                thisEl.classList.add('disabled');
              }}
              className={`d-block mb-2 btn btn-warning ${autoSel && idx === 0 ? 'disabled' : ''} font-weight-bold mx-sm-auto py-sm-3 py-md-2 py-lg-1 py-xl-1`}>
          {proj}
        </Link>
    );
  };
  return (
      <section className="mb-4">
        <h2 className="text-center mb-2" style={{color: 'darkgrey'}}>
          {heading}
        </h2>
        <nav>
          {projNames.map((proj, idx) => ProjLink({proj, idx}))}
        </nav>
      </section>
  )
};

const SocMedLink = ({website, href, icon}) => (
    <a href={href} className="btn btn-info font-weight-normal mb-3 p-sm-3 p-md-3 p-lg-2 p-xl-2">
      <i className={`${icon} mr-2`}/>
      <span>{website}</span>
    </a>
);

const SocMedLinks = ({children}) => (
    <section className="container mt-3">
      <nav className="d-flex flex-column justify-content-around">
        {children}
      </nav>
    </section>
);


function getFreeLearn() {
  if (!_FreeLearn) {
    _FreeLearn = <Project name="Free Learn"
                          methodology="Agile (Scrum)"
                          repo="https://github.com/nl253/CO600_Project"
                          date="October 2018 to May 2019"
                          imgs={[
                            {
                              src: '/img/FreeLearnHome.jpg',
                              heading: 'Home Page',
                              alt: 'registration and login forms of a website',
                            },
                            {
                              src: '/img/FreeLearnCreatorDashboard.jpg',
                              heading: 'Creator Dashboard',
                              alt: 'creator dashboard allowing to create. modify and delete modules, lessons and quizes',
                            },
                            {
                              src: '/img/FreeLearnUserHome.jpg',
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
    />;
  }
  return _FreeLearn;
}

function getFlaskyBlog() {
  if (!_FlaskyBlog) {
    _FlaskyBlog = <Project
        name="Personal Blog to Manage Notes"
        methodology="solo project"
        repo="https://github.com/nl253/FlaskyBlog"
        summary={`This blog was supposed to store and display my university notes.
    It was also  one of the first semi-serious projects I worked on.
    I spent about a month working on it on during the summer after the first year of my degree.
    In that project I learnt how to use Python and I taught myself basics of Flask.
    I ended up not using the blog but it is out there on the internet (deployed on Heroku) available for anyone interested to see.
    `}
        date='August 2017'
        language={{
          name: 'Python',
          url: 'https://www.python.org',
        }}
        imgs={[
          {
            src: '/img/FlaskyBlogHome.jpg',
            heading: 'Home Page',
            alt: 'home page of a blog with a sidebar listing categories',
          },
          {
            src: '/img/FlaskyBlogCategory.jpg',
            heading: 'Posts in a Category',
            alt: 'a blog page with a sidebar and an expanded category listing posts',
          },
          {
            src: '/img/FlaskyBlogPost.jpg',
            heading: 'Blog Post',
            alt: 'a blog post',
          },
        ]}
        links={[
          {
            url: 'https://mysterious-ridge-59576.herokuapp.com/',
            name: 'FlaskyBlog deployed on Heroku',
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
          }]}
    />;
  }
  return _FlaskyBlog;
}

function getSQLiteREPL() {
  if (!_SQLiteREPL) {
    _SQLiteREPL = <Project
        name="SQLite Read-Eval-Print-Loop"
        framework={{
          name: 'prompt-toolkit',
          url: 'https://python-prompt-toolkit.readthedocs.io/en/master/index.html',
        }}
        summary={`Interactive command line client for accessing and modifying SQLite databases for Linux.
    The REPL provides (arguably) better user interface and completion than the REPL sqlite ships with.
    It features syntax highlighting which a user can alter by changing the theme.
    Similarly, a user may tweak the app to display tables differently.
    `}
        repo="https://github.com/nl253/SQLiteREPL"
        methodology="solo project"
        language={{
          name: 'Python',
          url: 'https://www.python.org',
        }}
        imgs={[
          {
            src: '/img/SQLiteREPLSyntaxHL.png',
            altText: 'terminal user interface',
            heading: 'Syntax Highlighting',
          },
          {
            src: '/img/SQLiteREPLCompletion.png',
            altText: 'terminal user interface',
            heading: 'Excellent Completion',
          },
          {
            src: '/img/SQLiteREPLMoreCompletion.png',
            altText: 'terminal user interface',
            heading: 'More Completion',
          },
          {
            src: '/img/SQLiteREPLTables.png',
            altText: 'terminal user interface',
            heading: 'Table Formats',
          },
        ]}
    />;

  }
  return _SQLiteREPL;
};

function getRegexEngine() {
  if (!_RegexEngine) {
    _RegexEngine = <Project name="Regex Engine"
                            repo="https://github.com/nl253/RegexEngine"
                            summary={`A small regular expression engine that I built when learning about theory that underlies computation.
                                       Although the program is very simple it does demonstrate how finite automatas are used in implementing regular expression engines.
                                       The program also uses a recursive descent parser for parsing the regular expressions received as input.`}
                            methodology="solo project"
                            language={{
                              name: 'JavaScript',
                              url: 'https://nodejs.org/en/',
                            }}
    />;
  }
  return _RegexEngine;
}

function getVirtualMachine() {
  if (!_VirtualMachine) {
    _VirtualMachine = <Project name="Virtual Machine"
                               repo="https://github.com/nl253/VirtualMachine"
                               methodology="solo project"
                               language={{
                                 name: 'Rust',
                                 url: 'https://www.rustlang.org/learn',
                               }}
    />;
  }
  return _VirtualMachine;
}

function getYuconz() {
  if (!_Yuconz) {
    _Yuconz = <Project name="Yuconz Staff Reviews Management System"
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
                        Thought the project we also had to use UML (class & sequence diagrams) to discuss and plan the architecture of the system we were designing.
                        `}
                       imgs={[
                         {
                           src: '/Portfolion/img/YuconzDashboardHREmployee.png',
                           alt: 'HR employee dashboard',
                           heading: 'Privilidge System',
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
                           src: '/Portfolnio/img/YuconzDashboardAccessReview.png',
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
    />;
  }
  return _Yuconz;
}

ReactDOM.render(
    <Router basename={document.getElementsByTagName('base')[0].getAttribute(
        'href')}>
      <div>
        <section className="container-fluid row mx-xl-0 mx-lg-0 mx-md-0 mx-sm-auto mx-0 p-0"
                 style={{minHeight: '100vh'}}>
          <aside className="col-xl-2 col-lg-2 col-md-3 col-sm-12 bg-dark text-white p-4"
              style={{minHeight: '500px'}}>
            <h1 className="text-center bg-secondary mb-5">
              <a href="/" className="nav-link" style={{color: 'inherit', textShadow: '0 0 5px black'}}>Portfolio</a>
            </h1>
            <ProjNavSect heading="Main Projects" projNames={['Free Learn', 'Yuconz', 'SQLite REPL', 'Flasky Blog']} autoSel/>
            <ProjNavSect heading="Other Projects" projNames={['Virtual Machine', 'Regex Engine']}/>
          </aside>
          <main className="col-xl-8 col-lg-8 col-md-6 col-sm-12 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-3" style={{minHeight: '100vh'}}>
            <Switch>
              <Route exact path='/' component={getFreeLearn}/>
              <Route path='/projects/free-learn' component={getFreeLearn}/>
              <Route path='/projects/flasky-blog' component={getFlaskyBlog}/>
              <Route path='/projects/sqlite-repl' component={getSQLiteREPL}/>
              <Route path='/projects/regex-engine' component={getRegexEngine}/>
              <Route path='/projects/virtual-machine' component={getVirtualMachine}/>
              <Route path='/projects/yuconz' component={getYuconz}/>
            </Switch>
          </main>
          <aside className="bg-light col-xl-2 col-lg-2 col-md-2 col-sm-12 py-5" style={{minHeight: '500px'}}>
            <img className="d-block mx-auto rounded-circle"
                 style={{maxWidth: '180px'}}
                 src="/img/avatar.jpg"
                 alt="selfie"/>
            <h2 className="text-center mb-3 mt-2">
              Norbert Logiewa
            </h2>
            <h3 className="text-center h5" style={{fontFamily: 'inherit'}}>
              <a href="https://www.kent.ac.uk/courses/undergraduate/129/computer-science-artificial-intelligence"
                 className="text-black-50">
                Computer Science with AI
              </a>
            </h3>
            <h4 className="text-center h6 font-weight-bold" style={{fontFamily: 'inherit'}}>
              <a href="https://www.kent.ac.uk" className="text-black-50">
                University of Kent
              </a>
            </h4>
            <h3 className="text-center mt-4 mb-2 h4">
              Contact
            </h3>
            <a className="text-center d-block text-black-50 font-weight-bold"
               style={{fontSize: '0.9em'}}
               href="mailto:norbertlogiewa96@gmail.com">
              norbertlogiewa96@gmail.com
            </a>
            <SocMedLinks>
              <a className="d-block btn btn-secondary mb-3"
                 style={{fontSize: '1.2em'}}
                 href="https://docs.google.com/document/d/1I94ZHc_75a2ivyjcDXjESIrGYPmJUriTm3xmEkcwaeI/edit?usp=sharing">
                <i className="fas fa-external-link-alt mr-2"/>
                <span>CV</span>
              </a>
              <SocMedLink website='GitHub'
                          key={0}
                          href='https://github.com/nl253'
                          icon='fab fa-github' />
              <SocMedLink website='LinkedIn'
                          key={1}
                          href='https://www.linkedin.com/in/norbert-logiewa'
                          icon='fab fa-linkedin-in'/>
            </SocMedLinks>
          </aside>
        </section>
        <footer/>
      </div>
    </Router>,
    document.getElementById('root'));

registerServiceWorker();
