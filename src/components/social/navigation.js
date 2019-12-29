import React from 'react';

/**
 * @param {string} website
 * @param {string}  href
 * @param {string} icon
 * @returns {*}
 */
export const SocialLink = ({ website, href, icon }) => (
  <a
    href={href}
    className="btn btn-info font-weight-normal mb-3 p-sm-3 p-md-3 p-lg-2 p-xl-2"
  >
    <i className={`${icon} mr-2`} />
    <span>{website}</span>
  </a>
);

/**
 * @param {*[]} children
 * @returns {*}
 */
export const SocialMediaLinks = ({ children }) => (
  <section className="container mt-3">
    <nav className="d-flex flex-column justify-content-around">
      {children}
    </nav>
  </section>
);
