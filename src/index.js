import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Project from './components/Project';

let _SQLiteREPL, _FreeLearn, _FlaskyBlog, _Yuconz, _VirtualMachine, _RegexEngine, _WebScraper;

const ProjLink = ({proj, idx, autoSel}) => {
  const url = `/projects/${proj.toLowerCase().replace(/\s+/, '-')}`;
  return (
      <Link to={url}
            key={idx}
            onClick={() => {
              const prevEl = document.querySelector( "aside h2 + nav a[href].disabled");
              if (prevEl) {
                prevEl.classList.remove('disabled');
              }
              const thisEl = document.querySelector(`a[href='${url}']`);
              thisEl.classList.add('disabled');
            }}
            className={`d-block mb-2 btn btn-warning ${autoSel ? 'disabled' : ''} mx-sm-auto py-sm-3 py-md-2 py-lg-1 py-xl-1`}>
        {proj}
      </Link>
  );
};

const ProjNavSect = ({heading, children}) => {
  return (
      <section className="mb-4">
        <h2 className="text-center mb-2" style={{color: 'darkgrey'}}>
          {heading}
        </h2>
        <nav>
          {children}
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
                              alt: "lesson",
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
                              heading: "Create Interactive Lessons",
                              alt: "lesson creation panel",
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
            alt: 'home page of a blog with a sidebar listing categories',
            heading: 'Posts & Categories',
            src: '/img/FlaskyBlog1.png',
          },
          {
            alt: 'a blog page with a sidebar',
            heading: 'Markdown Rendered Posts',
            src: '/img/FlaskyBlog2.png',
          },
          {
            alt: 'a blog with a post',
            heading: 'API (Flask - Python3) & UI (React)',
            src: '/img/FlaskyBlog3.png',
          },
          {
            alt: 'a blog post',
            heading: 'Blog Post',
            src: '/img/FlaskyBlog4.png',
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
    />;
  }
  return _Yuconz;
}

function getWebScraper() {
  if (!_WebScraper) {
    _WebScraper = <Project name="Simple Web Scraper"
                       date="June 2018 (ongoing maintenance & adding features)"
                       repo="https://github.com/nl253/WebScraper"
                       summary={`A simple web scraping library that allows to collect data from the web and save it in a database (perhaps for analysis).
                         The library is published on Node Package Manager (NPM) repositories so you can include it any node project.`}
                       imgs={[
                         {
                           src: '/img/WebScraperREADME1.png',
                           alt: 'README file describing the library and the API',
                           heading: 'Scrape Web Pages',
                         },
                         {
                           src: '/img/WebScraperREADME2.png',
                           alt: 'README file describing the library and the API',
                           heading: 'Simple, Intuitive API',
                         },
                         {
                           src: '/img/WebScraperREADME3.png',
                           alt: 'README file describing the library and the API',
                           heading: 'Extensible',
                         },
                         {
                           src: '/img/WebScraperREADME1.png',
                           alt: 'README file describing the library and the API',
                           heading: 'Published on NPM',
                         },
                       ]}
                       methodology="solo project"
                       language={{
                         name: 'Python',
                         url: 'https://www.python.org',
                       }}
    />;
  }
  return _WebScraper;
}


ReactDOM.render(
    <Router basename={document.getElementsByTagName('base')[0].getAttribute( 'href')}>
      <div>
        <section className="container-fluid row mx-xl-0 mx-lg-0 mx-md-0 mx-sm-auto mx-0 p-0"
                 style={{minHeight: '100vh'}}>
          <aside className="col-xl-2 col-lg-2 col-md-3 col-sm-12 bg-dark text-white p-4"
              style={{minHeight: '500px'}}>
            <h1 className="text-center bg-secondary mb-5">
              <a href="/" className="nav-link" style={{color: 'white', textShadow: '0 0 5px black'}}>
                Portfolio
              </a>
            </h1>
            <ProjNavSect heading="Main Projects">
              <ProjLink proj={"Free Learn"} idx={0} autoSel={true} />
              <ProjLink proj={"Yuconz"} idx={1} />
              <ProjLink proj={"SQLite REPL"} idx={2} />
              <ProjLink proj={"Flasky Blog"} idx={3} />
            </ProjNavSect>
            <ProjNavSect heading="Other Projects">
              <ProjLink proj={"Web Scraper"} idx={0} />
              <ProjLink proj={"Virtual Machine"} idx={1} />
              <ProjLink proj={"Regex Engine"} idx={2} />
            </ProjNavSect>
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
              <Route path='/projects/web-scraper' component={getWebScraper}/>
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
            <a className="text-center d-block text-black-50"
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
