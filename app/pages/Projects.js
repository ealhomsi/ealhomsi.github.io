import { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Main from '../layouts/Main';
import { ProjectCell } from '../components/Projects/ProjectCell';
import { getProjects } from '../services/contentful.service';

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      projects: []
    };
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects() {
    const parser = (items) => items.map(item => {
      let newitem = item.fields;
      newitem.image = newitem.image.fields.file['url'];
      return newitem;
    })

    getProjects()
    .then(response => {
      this.setState({
        projects: parser(response.items),
        isLoaded: true,
      });
    })
  }

  render(){
    const { isLoaded, projects } = this.state;
    return (
      <Main>
        <Helmet title="Projects" />
        <article className="post" id="projects">
          <header>
            <div className="title">
              <h2><Link to="/projects">Projects</Link></h2>
              <p>A selection of projects that I&apos;m not too ashamed of (including this website)</p>
            </div>
          </header>
          
          {isLoaded? ( projects.map(project => (
                <ProjectCell
                  data={project}
                  key={project.title}
                />))): (<h3> loading ... </h3>) }
        </article>
      </Main>
    );
  }
}

export default Projects;

