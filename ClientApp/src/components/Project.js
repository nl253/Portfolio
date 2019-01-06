import React, {Component} from 'react';

export default class Project extends Component {

  constructor(props) {
    super(props);
    if (props.imgs) {
      this.state = {
        imgIdx: 0,
      };
    }
  }

  firstCell(text) {
    return (
        <td className="pr-3">
          <span className="font-weight-bold text-capitalize">
            {text.toLowerCase()}
          </span>
        </td>
    );
  }

  componentDidMount() {
    if (this.props.imgs) {
      const imgState = {
        interval: setInterval(() =>
            this.setState({
              imgIdx: (this.state.imgIdx + 1) % this.props.imgs.length
            }), 4500),
      };
      this.setState(imgState);
    }
    // {document.querySelector('.figure-box').style.minHeight = `${Array.from(document.querySelectorAll("figure img")).reduce((height, img) => img.height > height ? img.height : height, 0)}px`}
  }

  componentWillUnmount() {
    if (this.state && this.state.interval) {
      clearInterval(this.state.interval);
    }
  }

  render() {
    return (
        <div  className="mx-xl-5 mx-lg-4 mx-md-3 mx-sm-0">
          <h3 className="display-4 mb-4">{this.props.name}</h3>
          <table className="table">
            <thead/>
            <tbody>
            {this.props.date && (
                <tr>
                  {this.firstCell('date')}
                  <td>
                    {this.props.date}
                  </td>
                </tr>
            )}
            {this.props.language && (
                <tr>
                  {this.firstCell('language')}
                  <td>
                    {this.props.language.url &&
                    <a href={this.props.language.url}>{this.props.language.name}</a> ||
                    this.props.language}
                  </td>
                </tr>
            )}
            {this.props.framework && (
                <tr>
                  {this.firstCell('framework')}
                  <td>{this.props.framework.url &&
                  <a href={this.props.framework.url}>{this.props.framework.name}</a> ||
                  this.props.framework}</td>
                </tr>
            )}
            {this.props.frameworks && (
                <tr>
                  {this.firstCell('frameworks')}
                  <td>
                    {this.props.frameworks.map((f, idx, arr) => f.url
                        ?
                        <a key={idx} href={f.url}>{f.name}{idx < (arr.length - 1) ?
                            ', ' :
                            ''}</a>
                        :
                        <span key={idx}>{f}{idx < (arr.length - 1) ? ', ' : ''}</span>)}
                  </td>
                </tr>
            )}
            {this.props.methodology && (
                <tr>
                  {this.firstCell('methodology')}
                  <td>{this.props.methodology}</td>
                </tr>
            )}
            {this.props.repo && (
                <tr>
                  {this.firstCell('repository')}
                  <td><a href={this.props.repo}>{this.props.repo}</a></td>
                </tr>
            )}
            {this.props.links && this.props.links.map((link, idx) => (
                <tr key={idx}>
                  {this.firstCell(link.name)}
                  <td><a href={link.url}>{link.url}</a></td>
                </tr>
            ))}
            </tbody>
          </table>
          {this.props.summary && <p className="mt-4">{this.props.summary}</p>}
          {this.props.imgs && (
              <div className="container-fluid mt-4 figure-box">
                {this.props.imgs.map(
                    (img, idx, arr) =>
                        <figure key={idx}>
                          {img.heading && (
                              <figcaption className={`font-weight-bold text-center mb-3 h3 ${(this.state.imgIdx === idx ? '' : ' d-none')}`}
                                          style={{fontSize: '2em'}}>
                                {img.heading}
                              </figcaption>
                          )}
                          <div className={`mx-auto justify-content-center ${(this.state.imgIdx === idx ? 'd-flex' : ' d-none')}`}
                               style={{maxWidth: '300px'}}>
                            {arr.map((_, idx) => idx).map(idx => (
                                <button onClick={() => this.setState({imgIdx: idx})}
                                        className={`${(this.state.imgIdx === idx ? 'bg-secondary' : 'bg-light')} mx-1 mb-3 btn`}
                                        style={{height: '20px', width: '20px'}}
                                        key={idx}/>)
                            )}
                          </div>
                          <img src={img.src} alt={img.alt}
                               className={`${(this.state.imgIdx === idx ? 'd-block' : 'd-none')} mw-100 mx-auto p-2 bg-light`}/>
                        </figure>,
                )
                }
              </div>
          )}
        </div>
    );
  }
}