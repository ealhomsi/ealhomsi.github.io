
import {Component} from 'react';
import ReactPaginate from 'react-paginate';
import PostCell from './PostCell'

export class PostCellList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts,
      offset: 0,
      data: [],
      elements: [],
      perPage: 10,
      currentPage: 0,
    };
  }
  
  render(){
    const { posts } = this.state;
    return ( posts.map(post => (
      <PostCell
        data={post}
        key={post.id}
      />))
    );
  }
}



export default PostCellList;
