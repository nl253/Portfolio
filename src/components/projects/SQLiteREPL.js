import React from 'react';
import Project from './Project';

const project = (
  <Project
    name="SQLite Read-Eval-Print-Loop"
    framework={{
      name: 'prompt-toolkit',
      url: 'https://python-prompt-toolkit.readthedocs.io/en/master/index.html',
    }}
    summary={`Interactive command line client for accessing and modifying SQLite databases for Linux.
              The REPL provides (arguably) better user interface and completion than the REPL sqlite ships with.
              It features syntax highlighting which a user can alter by changing the theme.
              Similarly, a user may tweak the app to display tables differently.`}
    repo={`${process.env.REACT_APP_GITHUB}/SQLiteREPL`}
    methodology="solo project"
    language={{
      name: 'Python',
      url: 'https://www.python.org',
    }}
    imgs={[
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/SQLiteREPL/SyntaxHL.jpg`,
        altText: 'terminal user interface',
        heading: 'Syntax Highlighting',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/SQLiteREPL/Completion.jpg`,
        altText: 'terminal user interface',
        heading: 'Excellent Completion',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/SQLiteREPL/MoreCompletion.jpg`,
        altText: 'terminal user interface',
        heading: 'More Completion',
      },
      {
        src: `${process.env.REACT_APP_STATIC_ROOT}/img/SQLiteREPL/Tables.jpg`,
        altText: 'terminal user interface',
        heading: 'Table Formats',
      },
    ]}
  />
);

// eslint-disable-next-line import/prefer-default-export
export const getSQLiteREPL = () => project;
