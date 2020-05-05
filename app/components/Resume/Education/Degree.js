import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Degree extends Component {
  static propTypes = {
    data: PropTypes.shape({
      degree: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }
  
  render(){
    const { data } = this.state;
    return (
      <article className="degree-container">
        <header>
          <h4 className="degree">{data.degree}</h4>
          <p className="school"><a href={data.link}>{data.school}</a>, {data.year}</p>
          <p className="school-info"> GPA: {data.gpa}, <a href={data.locationlink}>{data.location}</a> </p>
        </header>
      </article>
    );
  }
}

export default Degree;