import {Component} from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Main from '../layouts/Main';
import { getAbout } from '../services/contentful.service';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export class About extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        about: null
      };
    }
  
    componentDidMount() {
      this.fetchAbout();
    }
  
    fetchAbout() {
      getAbout()
      .then(response => {
          this.setState({
            about: response.fields.aboutme,
            isLoaded: true
          });
      })
    }
  
    render(){
      const { isLoaded, about } = this.state;
      return (
        <Main>
          <Helmet title="About" />
          <article className="post" id="about">
            <header>
              <div className="title">
                <h2><Link to="/about">About Me</Link></h2>
              </div>
            </header>
            {isLoaded? 
            ( 
              <span>
                {documentToReactComponents(about)}
              </span>
            ): (<h3> loading ... </h3>) }
          </article>
        </Main>
      );
    }
}
  
export default About;
  
  