import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {Container, Navbar} from 'reactstrap';
import Project from './components/Project';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

ReactDOM.render(
    <Router basename={baseUrl}>
      <div>
        <header>
          <Navbar color="dark"
                  className="navbar-expand-sm border-bottom box-shadow mb-3"
                  dark>
            <h1 className="text-white text-center w-100">Portfolio</h1>
          </Navbar>
        </header>
        <Container>
          <div className="container-fluid">
            <div className="row mt-5">
              <aside className="col-xl-2 col-lg-2 col-md-3 col-sm-12 pl-0 mb-4">
                <img className="w-100 pb-2"
                     src="https://lh3.googleusercontent.com/a-/AAuE7mBn6m7vkSG6jeniJfhzGwIdojv_2NntjcpH_nTIDw=s192"
                     alt="selfie"/>
                <p className="mb-4">
                <span
                    className="font-weight-bold d-block">Norbert Logiewa</span>
                  <span className="font-italic mt-2 d-block">Computer Science with<br/>Artificial Intelligence</span>
                  <a className="mt-2 d-block" href="https://www.kent.ac.uk">University
                    of Kent</a>
                </p>
                <h2 className="text-center">Projects</h2>
                <nav>
                  <Link to="/projects/sqlite-repl"
                        className="d-block mb-2 btn btn-info">
                    SQLite REPL
                  </Link>
                  <Link to="/projects/flasky-blog"
                        className="d-block mb-2 btn btn-info">
                    Flasky Blog
                  </Link>
                  <Link to="/projects/virtual-machine"
                        className="d-block mb-2 btn btn-info">
                    Virtual Machine
                  </Link>
                  <Link to="/projects/regex-engine"
                        className="d-block mb-2 btn btn-info">
                    Regex Engine
                  </Link>
                  <Link to="/projects/free-learn"
                        className="d-block mb-2 btn btn-info">
                    Free Learn
                  </Link>
                  <Link to='/projects/yuconz'
                        className="d-block mb-2 btn btn-info">
                    Yuconz
                  </Link>
                </nav>
              </aside>
              <div className="col-xl-9 col-lg-9 col-md-8">
                <Route path='/projects/free-learn'
                       component={() => <Project name="Free Learn"
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
                       />}
                />
                <Route path='/projects/flasky-blog'
                       component={() => <Project name="Personal Blog to Manage Notes"
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
                       />}
                />
                <Route path='/projects/sqlite-repl'
                       component={() => <Project name="SQLite Read-Eval-Print-Loop"
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
                                                     src: 'https://lh3.googleusercontent.com/IuHm1JDJQDSz8w-WgrhbCGg5Afpp3k1SB48-B1XHVZ0Zj6Lhq-gu8wDP8txR_gB0zPSWTkfUEN_OOhlGi0hOYUN-lYYDdXgiEnOBIgM1EXW9EOTDZrw_lZc1ul6vWfued2oUzy-D0jflaqMgG-3MiiYVTXGoWiu0QzmDpaxF86GkZKITNkPFEjXm4kqowU64qCj4zDtwai6hQrc6w-jpa9zZYW0Gr83ntVZGT_WlBM-DqVF5q63wblw2XgokI4hnM16mqiL7q2xrQ7o0brnNFWPYHUpoRuN3b9wYDuj0Ravz0buxlUzF8QrHTgsmlhooanxbJuB2fDretDUcOBfwErZsSNwsutPVtGXhtBf9FoXg6rx_oGoMMKxZodNR0WnaXxniuHJunxK23x22OAwrRC0NuBSQwKunqt-A_78hiiKU50yIry-80j-S6-WAbis5U1xDiXvBEX_nvTgXDxqiy2mxHPoXIusg3pCUQQhttWW8XZHgMYN3DJzb8Sj_yvtR_y32e_XRLrIJYeREyRoyXNaHnjdtO_ABsvN0Uc74kwOCZ8dbDvNoD8suoAvvcv6pz0R3sCNtTdUuGBRcH266UYQ9dGIDo2tiabyKTOpF42F4PSTopVUppxrDHUy_7iGVIqfoXtHCEPZC5LcHd0BKgXZ1=w1216-h929-no',
                                                     altText: 'terminal user interface',
                                                     heading: 'Syntax Highlighting',
                                                   },
                                                   {
                                                     src: 'https://lh3.googleusercontent.com/GxBplxLBQdEqqa3eItzUFjuDIh4EmZjCh6q-Ow91tlZbr1U0XXjsNFl0XMMUpfBXAH5gzeYuIe4R-8RQK2IQzKLG4HSk4GhX6HVKZlvgIggWYtZ1Z_RTGTwaKlcqPYGz-nqOZZuYE8IE0yR9bWDUTwz6DLL9TUrx6ay1LGQQUimUtHTWEdbMqykbgA0qyFsDolRzbuNg9WCZqxlBsNIEvo0RpnjhXCEwJHuf05uDUnvUjSSSvi4oo5HvvTSfbejTW0uz-04b40APWolGnmD6Ufcezm_zo4wuSuUfsyfxqYFzjgsIiJnTT13EedQ4kHntZ-14ktitTkGkA6zcKsbsNXc9G-lEIep6AdbjiKqF6u39gYBhg2xloWuYEJsSepG7utiSo_nxI_N27Tjx4Xd-6uEkqCY6oWVL_Y_2EWD-6yxNzMSKoQ8Dh9dBDB4CdE6j5TmDp8TWBgNR83cRF4tHncI6SC0UOoXeQreKRpice2PG5Y8I9jkMGUc0M5Bz2tX12qkLJpcVxQQeb6t7Vlxhpr1-iwd-D0MekovDQgN5yxfwCPoqowXTZYbCkW_MmXly8F1uOEK49QxAKyHfASECXEkMZ1TTIoXKlpTPY-Gl3KJ93ddRdjDWfDWGDuWCbc_qIDOMOnjYTxbeo7mTC_myXG1m=w1497-h927-no',
                                                     altText: 'terminal user interface',
                                                     heading: 'Excellent Completion',
                                                   },
                                                   {
                                                     src: 'https://lh3.googleusercontent.com/D6_e_iIY5kJ6BqKfd7RXTF20UjKN69f-NI6SP6jxDq1rqwGE3mpEvU3W1iMSmyiDqt-6T50eGGSThZiEkDTQdk1PHhOIdI854XMy-34xCvIMgLgRLdKBaYIUeb-2gSddT5eV4PzI5KikEYDalFf95Swyone1whmhrw75-DuGMgLjREoupECLrdwF3LjSTRwvT0Ebvg0oVe3UOKAmK1jfVgp-5_5KJl-EeBMdvsXt4BlD8VenMkkgBmz1GjNYeCXBcj_8sGqs7oTz3NT2o1LhyBsOhD8AgAxJYiCkAkO-rTW2E0tS_1Upskp7eXORovBglQ8tUni9FQM-Z1qYNd31OwDiX7qn9T2nEP1uUf0ZB4tOVfT3TUzKfbucWKWrOj9MJdLb9f44r8uvUzXlrVM2vO36gMu3TByq_yRlL8O8-dnhLxftdi0I-HZFQLsWs2KyhJ2XmEfUislr0WGYQ0NhdIMMYfq3RQxf5AaK_s1IpW8zoyvIY9qPc_qjoVMvLwZSBCcEJIygGxLBtP86NXFiQTyEyF_buxzZz8iR-pusfXZClGdM2OeineuD4zNUc8lMNN_f8LEdaX1mD2-qeYWCiADsFtgQ-cHh9U7bR_SN6zwt6nBddca5VqWt-4gt9DWDKE6AVGzQMgk4dEnmpALDIxza=w645-h391-no',
                                                     altText: 'terminal user interface',
                                                     heading: 'More Completion',
                                                   },
                                                   {
                                                     src: 'https://lh3.googleusercontent.com/-fCzGSlc8oIiBa_s9yBc2r2KuJd5GBUdPreOuTnGAIuLO3SX7xs8rjKK9GjyzxijyVzThbymDCYW9XVmFUwpZlstP0_vsSK5M9TXKxs9qbOA6Y0QgzgZ97RevpEGLKgN7LD98Dx_OibHfkWml7qr0jF6TjrNQndAFFKUpIj_o9f67l0LNx1hJoaDOwsCdPUSNrtc-RxXNg-GfUR4kDwT-GS78EdFxZFF77HCgx6Ok5TfbDo_tR-4SwVfzSp7N7_fvzgTSsfJZGhi2c38PGd86z7Q-aTFQnRe4ocG0lMq6I91-kc0L0SBMm6pHP5qiYsvM7kFIx4_U8zBuWYKSWL6_brRNNapTiRG3rLx9SY-Kij8hZBksFrspO_UvK_RBxE6PISq7RhlUokdKkdmbYoKvFcUM49YNF-CJaB8QtYhLjwGcehKNKFkUbkkIWiB61rbl-V-sr4c9dhIM5xF3LqkqPrfsu3xD1iwv3GY6ciWPc6bilJ3WAEJhbOMFWTX9FY_WW8Fsirav9Y2CauC1O9pY7ltns1OmSXlgyEB_LisWyGzqqk-SccMA1ldeuqAWIRz0hbXJaO2N7JUhE1lRHKfC-Ofos1RE8Reot8VhjkFIhLoFqNBwYrpxUs0yieTzceX_3PPo1aKRIJsMK3aWJsb13BU=w1666-h937-no',
                                                     altText: 'terminal user interface',
                                                     heading: 'Table Formats',
                                                   },
                                                 ]}
                       />}
                />
                <Route path='/projects/regex-engine'
                       component={() => <Project name="Regex Engine"
                                                 repo="https://github.com/nl253/RegexEngine"
                                                 summary={`A small regular expression engine that I built when learning about theory that underlies computation. 
                                                 Although the program is very simple it does demonstrate how finite automatas are used in implementing regular expression engines. 
                                                 The program also uses a recursive descent parser for parsing the regular expressions received as input.`}
                                                 methodology="solo project"
                                                 language={{
                                                   name: 'JavaScript',
                                                   url: 'https://nodejs.org/en/',
                                                 }}
                       />}
                />
                <Route path='/projects/virtual-machine'
                       component={() => <Project name="Virtual Machine"
                                                 repo="https://github.com/nl253/VirtualMachine"
                                                 methodology="solo project"
                                                 language={{
                                                   name: 'Rust',
                                                   url: 'https://www.rustlang.org/learn',
                                                 }}
                       />}
                />
                <Route path='/projects/yuconz'
                       component={() => <Project name="Yuconz Staff Reviews Management System"
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
                                                     { src: "/img/YuconzDashboardHREmployee.png", alt: "HR employee dashboard", heading: "Privilidge System" },
                                                     { src: "/img/YuconzDashboardHR.png", alt: "personal details record search", heading: "Search for Personal Details" },
                                                     { src: "/img/YuconzDashboardReviewer.png", alt: "reviewer dashboard", heading: "Edit Review Records" },
                                                     { src: "/img/YuconzLogin.jpg", alt: "log in dialog", heading: "Authentication" },
                                                     { src: "/img/YuconzDashboardAccessReview.png", alt: "annual performance review", heading: "Manage Review Records" },
                                                     { src: "/img/YuconzDashboardUser.png", alt: "user dashboard", heading: "Access Your Reviews" },
                                                 ]}
                                                 methodology="Agile (Scrum)"
                                                 language={{
                                                   name: 'Java',
                                                   url: 'https://docs.oracle.com/en/java/index.html',
                                                 }}
                       />}
                />
              </div>
            </div>
          </div>
        </Container>
        <footer/>
      </div>
    </Router>,
    document.getElementById('root'));

registerServiceWorker();
