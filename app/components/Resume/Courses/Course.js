import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Course extends Component {
  static propTypes = {
    data: PropTypes.shape({
      link: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    last: PropTypes.bool,
  };

  static defaultProps = {
    last: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      last: props.last,
    };
  }
  
  render(){
    const { data, last } = this.state;
    return (
      <li className="course-container">
        <a href={data.link}>
          <h4 className="course-number">{data.number}:</h4>
          <p className="course-name">{data.title}</p>
        </a>
        {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
      </li>
    );
  }
}

export default Course;