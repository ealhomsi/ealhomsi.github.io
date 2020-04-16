import { Component } from 'react';
import Helmet from 'react-helmet';
import Main from '../layouts/Main';
import { getPost } from '../services/contentful.service';
import { documentToReactComponents}  from '@contentful/rich-text-react-renderer';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { BLOCKS } from '@contentful/rich-text-types';

const dtrOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img
        className="inpostImage"
        src={node.data?.target?.fields?.file?.url}
        alt={node.data?.target?.fields?.title}
      />
    ),
  },
};

export class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      id: props.match.params.id,
      post: [],
      error: null
    };
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {
    const postPraser = (item) => {
      item = item.fields;
      item.image = item.heroImage.fields.file['url']
      item.tags = item.tags.filter((item, i, ar) => ar.indexOf(item) === i)
      return item;
    };

    getPost(this.state.id)
    .then(response => {
      this.setState({
        post: postPraser(response),
        isLoaded: true,
      });
    })
    .catch(err => this.setState({
      error: err,
      isLoaded: true
    }))
  }

  render(){
    const { isLoaded, post, error } = this.state;
    return (
      <Main>
        <Helmet title="BlogPost" />
        <article className="post" id="blogPost">
          
          
          {(isLoaded && !error)? 
          ( 
            <span>
              <header>
                <div className="title">
                  <Link to="/blog"> <p>go back</p> </Link>
                  <h2> {post.title} </h2>
                  <time className="published">{dayjs(post.publishedDate).format('DD, MMMM, YYYY')}</time>
                  <h4> by Elias Homsi </h4>
                </div>
              </header>
              <article className="post" id="about">
                <img className="hero" src={post.image}/>
                <br/>
                <br/>
                {documentToReactComponents(post.body, dtrOptions)}
                <br/>
                <h5> tags: </h5>
                {
                  this.state.post.tags.map(tag => {
                    return(<span className="tag"> #{tag} </span>);
                  })
                }
              </article>
            </span>
          ): (!error? (<h3> loading ... </h3>): (<h3> Post was not found ... </h3>))  }
        </article>
      </Main>
    );
  }
}

export default BlogPost;