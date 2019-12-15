import Project from './Project';
import React from 'react';

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
  />);

export const getSQLiteREPL = () => project;
