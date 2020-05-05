import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Degree from './Education/Degree';

export class Education extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      link: PropTypes.string,
      year: PropTypes.number,
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
      <div className="education">
        <div className="link-to" id="education" />
        <div className="title">
          <h3>Education</h3>
        </div>
        {data.map(degree => (
          <Degree
            data={degree}
            key={degree.school}
          />
        ))}
      </div>
    );
  }
}

export default Education;