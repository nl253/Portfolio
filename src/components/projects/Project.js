import React, { Component } from 'react';

/**
 * @param {number} sec
 * @returns {Promise<void>}
 */
const sleep = (sec) => new Promise((resolve) => setTimeout(resolve, sec * 1000));

export default class Project extends Component {
  /**
   * @param {Partial<{date: string, name: string, summary: string, framework: {name: string, url: string}, repo: string, imgs: {heading: string, src: string, alt: string}[], language: { name: string, url: ?string }, frameworks: {url: string, name: string}[], methodology: string, links: {name: string, url: string}[]}>} props
   */
  constructor(props) {
    super(props);
    if (props.imgs) {
      this.state = { imgIdx: 0 };
      (async () => {
        while (true) {
          await sleep(4.5);
          // eslint-disable-next-line react/no-access-state-in-setstate,
          const imgIdx = (this.state.imgIdx + 1) % this.props.imgs.length;
          const oldImgIdx = this.state.imgIdx;
          this.setState({ imgIdx });
          if (this.state.imgIdx === oldImgIdx) {
            return;
          }
        }
      })();
    }
  }

  /**
   * @param {string} text
   * @returns {*}
   */
  firstCell(text) {
    return (
      <td className="pr-3">
        <span className="font-weight-bold text-capitalize">
          {text.toLowerCase()}
        </span>
      </td>
    );
  }

  /**
   * @returns {*}
   */
  render() {
    const { repo, summary, language, imgs, methodology, name, framework, links, frameworks, date } = this.props;
    const { imgIdx } = this.state;
    return (
      <div className="mx-xl-5 mx-lg-4 mx-md-3 mx-sm-0">
        <h3 className="display-4 mb-4 mx-sm-auto">{name}</h3>
        <table className="table">
          <thead />
          <tbody>
            {date && (
              <tr>
                {this.firstCell('date')}
                <td>
                  {date}
                </td>
              </tr>
            )}
            {language && (
              <tr>
                {this.firstCell('language')}
                <td>
                  {language.url
                  && <a href={language.url}>{language.name}</a>
                  || language}
                </td>
              </tr>
            )}
            {framework && (
              <tr>
                {this.firstCell('framework')}
                <td>{framework.url
                && <a href={framework.url}>{framework.name}</a> || framework}
                </td>
              </tr>
            )}
            {Array.isArray(frameworks) && (
              <tr>
                {this.firstCell('frameworks')}
                <td>
                  {frameworks.map((f, idx, arr) => f.url
                    ? <a key={idx} href={f.url}>{f.name}{idx < (arr.length - 1) ? ', ' : ''}</a>
                    : <span key={idx}>{f}{idx < (arr.length - 1) ? ', ' : ''}</span>)}
                </td>
              </tr>
            )}
            {methodology && (
              <tr>
                {this.firstCell('methodology')}
                <td>{methodology}</td>
              </tr>
            )}
            {repo && (
              <tr>
                {this.firstCell('repository')}
                <td><a href={repo}>{repo}</a></td>
              </tr>
            )}
            {Array.isArray(links) && links.map((link, idx) => (
              <tr key={idx}>
                {this.firstCell(link.name)}
                <td><a href={link.url}>{link.url}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
        {summary && <p className="mt-4">{summary}</p>}
        {Array.isArray(imgs) && (
          <div className="container-fluid mt-4 figure-box">
            {imgs.map(
              (img, idx, arr) => (
                <figure key={idx}>
                  {img.heading && (
                    <figcaption
                      className={`font-weight-bold text-center mb-3 h3 ${(imgIdx === idx ? '' : ' d-none')}`}
                      style={{ fontSize: '2em' }}
                    >
                      {img.heading}
                    </figcaption>
                  )}
                  <div
                    className={`mx-auto justify-content-center ${(imgIdx === idx ? 'd-flex' : ' d-none')}`}
                    style={{ maxWidth: '300px' }}
                  >
                    {/* eslint-disable-next-line no-shadow */}
                    {arr.map((_, idx) => idx).map((idx) => (
                      // eslint-disable-next-line jsx-a11y/control-has-associated-label
                      <button
                        type="button"
                        onClick={() => this.setState({ imgIdx: idx })}
                        className={`${(imgIdx === idx ? 'bg-secondary' : 'bg-light')} mx-1 mb-3 btn`}
                        style={{ height: '20px', width: '20px' }}
                        key={idx}
                      />
                    ))}
                  </div>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`${(imgIdx === idx ? 'd-block' : 'd-none')} mw-100 mx-auto p-2 bg-light`}
                  />
                </figure>
              ),
            )}
          </div>
        )}
      </div>
    );
  }
}
