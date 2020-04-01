import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SocialLink, SocialMediaLinks } from './components/social/navigation';
import { ProjectLink, ProjectNavigationSection } from './components/projects/navigation';

import { getAPITester } from './components/projects/APITester';
import { getBlog } from './components/projects/Blog';
import { getDataFrame } from './components/projects/DataFrame';
import { getDocTest } from './components/projects/DocTest';
import { getFreeLearn } from './components/projects/FreeLearn';
import { getGeneticAlgo } from './components/projects/GeneticAlgo';
import { getHackerNewsUI } from './components/projects/HackerNewsUI';
import { getPSO } from './components/projects/PSO';
import { getSQLiteREPL } from './components/projects/SQLiteREPL';
import { getTrafficSimulator } from './components/projects/TrafficSimulator';
import { getWebScraper } from './components/projects/WebScraper';
import { getYuconz } from './components/projects/Yuconz';


const app = (
  <Router basename={document.getElementsByTagName('base')[0].getAttribute('href')}>
    <div>
      <section
        className="container-fluid row mx-xl-0 mx-lg-0 mx-md-0 mx-sm-auto mx-0 p-0"
        style={{ minHeight: '100vh' }}
      >
        <aside
          className="col-xl-2 col-lg-2 col-md-3 col-sm-12 bg-dark text-white p-4"
          style={{ minHeight: '500px' }}
        >
          <h1 className="text-center bg-secondary mb-5">
            <a
              href="/"
              className="nav-link"
              style={{ color: 'white', textShadow: '0 0 5px black' }}
            >
              Portfolio
            </a>
          </h1>
          <ProjectNavigationSection heading="Main Projects">
            {
              [
                <ProjectLink proj="Genetic Algo" idx={0} key={0} autoSel />
              ].concat(
                [
                  "Hacker News UI",
                  "SQLite REPL",
                  "Blog",
                  "Data Frame",
                  "Web Scraper",
                  "Free Learn",
                ].map((proj, idx) => <ProjectLink proj={proj} idx={idx + 1} key={idx + 1} />))}
          </ProjectNavigationSection>
          <ProjectNavigationSection heading="Other Projects">
            {[
              "API Tester",
              "Yuconz",
              "Traffic Simulator",
              "PSO",
              "Doc Test",
            ].map((proj, idx) => <ProjectLink proj={proj} idx={idx} key={idx} />)}
          </ProjectNavigationSection>
        </aside>
        <main
          className="col-xl-8 col-lg-8 col-md-6 col-sm-12 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-3"
          style={{ minHeight: '100vh' }}
        >
          <Switch>
            <Route exact path="/" component={getGeneticAlgo} />
            <Route path="/projects/api-tester" component={getAPITester} />
            <Route path="/projects/blog" component={getBlog} />
            <Route path="/projects/data-frame" component={getDataFrame} />
            <Route path="/projects/doc-test" component={getDocTest} />
            <Route path="/projects/free-learn" component={getFreeLearn} />
            <Route path="/projects/genetic-algo" component={getGeneticAlgo} />
            <Route path="/projects/hacker-news-ui" component={getHackerNewsUI} />
            <Route path="/projects/pso" component={getPSO} />
            <Route path="/projects/sqlite-repl" component={getSQLiteREPL} />
            <Route path="/projects/traffic-simulator" component={getTrafficSimulator} />
            <Route path="/projects/web-scraper" component={getWebScraper} />
            <Route path="/projects/yuconz" component={getYuconz} />
          </Switch>
        </main>
        <aside
          className="bg-light col-xl-2 col-lg-2 col-md-2 col-sm-12 py-5"
          style={{ minHeight: '500px' }}
        >
          <img
            className="d-block mx-auto rounded-circle"
            style={{ maxWidth: '220px' }}
            src={`${process.env.REACT_APP_STATIC_ROOT}/img/avatar.jpg`}
            alt="selfie"
          />
          <h2 className="text-center mb-3 mt-2">
            {process.env.REACT_APP_FULL_NAME}
          </h2>
          <h3 className="text-center h5" style={{ fontFamily: 'inherit', fontWeight: 'bold' }}>
            {process.env.REACT_APP_JOB_TITLE}
          </h3>
          <h3 className="text-center h5" style={{ fontFamily: 'inherit' }}>
            <a
              href={process.env.REACT_APP_DEGREE}
              className="text-black-50"
            >
              {process.env.REACT_APP_DEGREE_TITLE}
            </a>
          </h3>
          <h4
            className="text-center h6 font-weight-bold"
            style={{ fontFamily: 'inherit' }}
          >
            <a href="https://www.kent.ac.uk" className="text-black-50">
              {process.env.REACT_APP_UNI}
            </a>
          </h4>
          <h3 className="text-center mt-4 mb-2 h4">
            Contact
          </h3>
          <a
            className="text-center d-block text-black-50"
            style={{ fontSize: '0.9em' }}
            href={`mailto:${process.env.REACT_APP_EMAIL}`}
          >
            {process.env.REACT_APP_EMAIL}
          </a>
          <SocialMediaLinks>
            <a
              className="d-block btn btn-secondary mb-3"
              style={{ fontSize: '1.2em' }}
              href={process.env.REACT_APP_CV}
            >
              <i className="fas fa-external-link-alt mr-2" />
              <span>CV</span>
            </a>
            <SocialLink
              website="GitHub"
              key={0}
              href={process.env.REACT_APP_GITHUB}
              icon="fab fa-github"
            />
            <SocialLink
              website="LinkedIn"
              key={1}
              href={process.env.REACT_APP_LINKED_IN}
              icon="fab fa-linkedin-in"
            />
          </SocialMediaLinks>
        </aside>
      </section>
      <footer />
    </div>
  </Router>
);

export default app;
