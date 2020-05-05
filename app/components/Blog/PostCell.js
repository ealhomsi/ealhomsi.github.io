
import {Component} from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export class PostCell extends Component {
  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      publishedDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
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
      <div className="cell-container">
        <article className="mini-post">
          <header>
            <h3><Link to={{pathname: `/post/${data.id}`}}>{data.title}</Link></h3>
            <time className="published">{dayjs(data.publishedDate).format('DD, MMMM, YYYY')}</time>
          </header>
          <Link className="image" to={{pathname: `/post/${data.id}`}}> <img src={data.image} alt={data.title} /></Link>
          <div className="description">
            <p> {data.description} </p>
          </div>
        </article>
      </div>
    );
  }
}

export default PostCell;