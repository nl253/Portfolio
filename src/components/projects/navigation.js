import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @param {string} proj
 * @param {number} idx
 * @param {boolean} autoSel
 * @returns {*}
 */
export const ProjectLink = ({ proj, idx, autoSel }) => {
  const url = `/projects/${proj.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <Link
      to={url}
      key={idx}
      onClick={() => {
        const prevEl = document.querySelector('aside h2 + nav a[href].disabled');
        if (prevEl) {
          prevEl.classList.remove('disabled');
        }
        document.querySelector(`a[href='${url}']`).classList.add('disabled');
      }}
      className={`d-block mb-2 btn btn-warning ${autoSel ? 'disabled' : ''} mx-sm-auto py-sm-3 py-md-2 py-lg-1 py-xl-1`}
    >
      {proj}
    </Link>
  );
};

/**
 * @param {string} heading
 * @param {*[]} children
 * @returns {*}
 */
export const ProjectNavigationSection = ({ heading, children }) => (
  <section className="mb-4">
    <h2 className="text-center mb-2" style={{ color: 'darkgrey' }}>
      {heading}
    </h2>
    <nav>
      {children}
    </nav>
  </section>
);
