import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ProjectLink, ProjectNavigationSection} from './components/projects/navigation';
import {getFreeLearn} from './components/projects/FreeLearn';
import {getFlaskyBlog} from './components/projects/FlaskyBlog';
import {getSQLiteREPL} from './components/projects/SQLiteREPL';
import {getRegexEngine} from './components/projects/RegexEngine';
import {getVirtualMachine} from './components/projects/VirtualMachine';
import {getYuconz} from './components/projects/Yuconz';
import {getWebScraper} from './components/projects/WebScraper';
import {SocialLink, SocialMediaLinks} from './components/social/navigation';
import React from 'react';

export const app = (
  <Router basename={document.getElementsByTagName('base')[0].getAttribute('href')}>
    <div>
      <section
        className="container-fluid row mx-xl-0 mx-lg-0 mx-md-0 mx-sm-auto mx-0 p-0"
        style={{minHeight: '100vh'}}>
        <aside
          className="col-xl-2 col-lg-2 col-md-3 col-sm-12 bg-dark text-white p-4"
          style={{minHeight: '500px'}}>
          <h1 className="text-center bg-secondary mb-5">
            <a href="/" className="nav-link"
               style={{color: 'white', textShadow: '0 0 5px black'}}>
              Portfolio
            </a>
          </h1>
          <ProjectNavigationSection heading="Main Projects">
            <ProjectLink proj={'Free Learn'} idx={0} autoSel={true}/>
            <ProjectLink proj={'Yuconz'} idx={1}/>
            <ProjectLink proj={'SQLite REPL'} idx={2}/>
            <ProjectLink proj={'Flasky Blog'} idx={3}/>
          </ProjectNavigationSection>
          <ProjectNavigationSection heading="Other Projects">
            <ProjectLink proj={'Web Scraper'} idx={0}/>
            <ProjectLink proj={'Virtual Machine'} idx={1}/>
            <ProjectLink proj={'Regex Engine'} idx={2}/>
          </ProjectNavigationSection>
        </aside>
        <main
          className="col-xl-8 col-lg-8 col-md-6 col-sm-12 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-3"
          style={{minHeight: '100vh'}}>
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
        <aside className="bg-light col-xl-2 col-lg-2 col-md-2 col-sm-12 py-5"
               style={{minHeight: '500px'}}>
          <img className="d-block mx-auto rounded-circle"
               style={{maxWidth: '180px'}}
               src="/img/avatar.jpg"
               alt="selfie"/>
          <h2 className="text-center mb-3 mt-2">
            Norbert Logiewa
          </h2>
          <h3 className="text-center h5" style={{fontFamily: 'inherit'}}>
            <a
              href="https://www.kent.ac.uk/courses/undergraduate/129/computer-science-artificial-intelligence"
              className="text-black-50">
              Computer Science with AI
            </a>
          </h3>
          <h4 className="text-center h6 font-weight-bold"
              style={{fontFamily: 'inherit'}}>
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
          <SocialMediaLinks>
            <a className="d-block btn btn-secondary mb-3"
               style={{fontSize: '1.2em'}}
               href="https://docs.google.com/document/d/1I94ZHc_75a2ivyjcDXjESIrGYPmJUriTm3xmEkcwaeI/edit?usp=sharing">
              <i className="fas fa-external-link-alt mr-2"/>
              <span>CV</span>
            </a>
            <SocialLink website='GitHub'
                        key={0}
                        href='https://github.com/nl253'
                        icon='fab fa-github'/>
            <SocialLink website='LinkedIn'
                        key={1}
                        href='https://www.linkedin.com/in/norbert-logiewa'
                        icon='fab fa-linkedin-in'/>
          </SocialMediaLinks>
        </aside>
      </section>
      <footer/>
    </div>
  </Router>);
