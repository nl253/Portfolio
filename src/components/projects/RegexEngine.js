import Project from './Project';
import React from 'react';

const project = (
  <Project name="Regex Engine"
           repo="https://github.com/nl253/RegexEngine"
           summary={`A small regular expression engine that I built when learning about theory that underlies computation.
                                     Although the program is very simple it does demonstrate how finite automatas are used in implementing regular expression engines.
                                     The program also uses a recursive descent parser for parsing the regular expressions received as input.`}
           methodology="solo project"
           language={{
             name: 'JavaScript',
             url: 'https://nodejs.org/en/',
           }}
  />);

export const getRegexEngine = () => project;
