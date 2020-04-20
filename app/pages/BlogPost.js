import { Component } from 'react';
import Helmet from 'react-helmet';
import Main from '../layouts/Main';
import { getPost } from '../services/contentful.service';
import { documentToReactComponents}  from '@contentful/rich-text-react-renderer';
import dayjs from 'dayjs';
import { dtrOptions } from '../data/const';
import SubscribeToNewsLetter from '../components/Template/SubscribeToNewsLetter';


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
          {(isLoaded && !error)? 
          ( 
            <span>
              <article id="blogPost" className="post" >
                <header>
                  <div className="title">
                    <h2> {post.title} </h2>
                    <time className="published">{dayjs(post.publishedDate).format('DD, MMMM, YYYY')}</time>
                    <h4> by Elias Homsi </h4>
                  </div>
                </header>
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
                <hr/>
                <br/>
                <SubscribeToNewsLetter />
              </article>
            </span>
          ): (!error? (<h3> loading ... </h3>): (<h3> Post was not found ... </h3>))  }
      </Main>
    );
  }
}

export default BlogPost;