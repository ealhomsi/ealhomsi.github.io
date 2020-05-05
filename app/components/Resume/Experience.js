import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Job from './Experience/Job';

export class Experience extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      company: PropTypes.string,
      position: PropTypes.string,
      link: PropTypes.string,
      daterange: PropTypes.string,
      points: PropTypes.arrayOf(PropTypes.string),
    })),
  };

  static defaultProps = {
    data: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }
  
  render(){
    const { data } = this.state;
    return (
      <div className="experience">
        <div className="link-to" id="experience" />
        <div className="title">
          <h3>Experience</h3>
        </div>
        {data.map(job => (
          <Job
            data={job}
            key={job.company}
          />
        ))}
      </div>
    );
  }
}

export default Experience;