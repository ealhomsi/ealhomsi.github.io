import {Component} from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';



export class ProjectCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }
  
  render(){
    const { data } = this.state;
    return (
      <div className="cell-container">
        <article className="mini-post">
          <header>
            <h3><a href={data.link}>{data.title}</a></h3>
            <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
          </header>
          <a href={data.link} className="image"><img src={data.image} alt="" /></a>
          <div className="description">
            <p> {data.description} </p>
          </div>
        </article>
      </div>
    );
  }
}

ProjectCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCell;
