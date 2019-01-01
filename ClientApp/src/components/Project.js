import React, {Component} from 'react';
import {Container} from 'reactstrap';

export default class Project extends Component {

  constructor(props) {
    super(props);
    if (props.imgs) this.state = {imgIdx: 0};
  }

  firstCell(text) {
    return <td className="pr-3"><span
        className="font-weight-bold text-capitalize">{text.toLowerCase()}</span>
    </td>;
  }

  componentDidMount() {
    if (!this.props.imgs) return;
    this.setState({
      interval: setInterval(() => {
        return this.setState(
            {imgIdx: (this.state.imgIdx + 1) % this.props.imgs.length});
      }, 3000),
    });
  }

  componentWillUnmount() {
    if (this.state && this.state.interval) {
      clearInterval(this.state.interval);
    }
  }

  render() {
    return (
        <Container>
          <h3 className="display-4">{this.props.name}</h3>
          <table>
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
                        <a href={f.url}>{f.name}{idx < (arr.length - 1) ?
                            ', ' :
                            ''}</a>
                        :
                        <span>{f}{idx < (arr.length - 1) ? ', ' : ''}</span>)}
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
            {this.props.links && (
                this.props.links.map(link => {
                  return (
                      <tr>
                        {this.firstCell(link.name)}
                        <td><a href={link.url}>{link.url}</a></td>
                      </tr>
                  );
                })
            )}
            </tbody>
          </table>
          {this.props.summary && <p className="mt-2">{this.props.summary}</p>}
          {this.props.imgs && (
              <div className="container-fluid">
                {this.props.imgs.map(
                    (img, idx, arr) =>
                        <figure>
                          {img.heading && <figcaption
                              className={'font-weight-bold text-center mb-3' +
                              (this.state.imgIdx === idx ? '' : ' d-none')}
                              style={{fontSize: '1.5em'}}>{img.heading}</figcaption>}
                          <img src={img.src} alt={img.alt}
                               className={(this.state.imgIdx === idx ?
                                   '' :
                                   'd-none') + ' mw-100'}/>
                        </figure>,
                )
                }
              </div>
          )}
        </Container>
    );
  }
}