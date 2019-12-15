import Project from './Project';
import React from 'react';

const project = (
  <Project name="Virtual Machine"
           repo="https://github.com/nl253/VirtualMachine"
           methodology="solo project"
           language={{
             name: 'Rust',
             url: 'https://www.rustlang.org/learn',
           }}
  />);

export const getVirtualMachine = () => project;
