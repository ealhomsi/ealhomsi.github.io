import {Component} from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import { getCourses, getDegrees, getPositions, getSkills, getCategories } from '../services/contentful.service';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
  'References',
];

export class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      courses: [],
      degrees: [],
      skills: [],
      positions: [],
      categories: []
    };
  }

  componentDidMount() {
    const parser = (response) => response.items.map(item => item.fields);
    const sorter = (items) => items.sort((a, b) => a.order - b.order);
    const skillCategorizer = (skills) =>  skills.map( skill => {
      skill.category = skill.category.map(category => category.fields.name);
      return skill;
    });

    Promise.all([getCourses(), getDegrees(), getPositions(), getSkills(), getCategories()])
    .then(results => {
      this.setState({
        courses: parser(results[0]),
        degrees: sorter(parser(results[1])),
        positions: sorter(parser(results[2])),
        skills: skillCategorizer(parser(results[3])),
        categories: parser(results[4]),
        isLoaded: true,
      });
    });
  }

  render(){
    const { isLoaded, courses, degrees, skills, positions, categories } = this.state;
    return (
      <Main>
        <Helmet title="Resume" />
        <article className="post" id="resume">
          <header>
            <div className="title">
              <h2><Link to="resume">Resume</Link></h2>
              <div className="link-container">
                {sections.map(sec => (
                  <h4 key={sec}>
                    <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                  </h4>))}
              </div>
    
            </div>
          </header>

          {isLoaded? (
            <span>
              <Education data={degrees} />
              <Experience data={positions} />
              <Skills skills={skills} categories={categories} />
              <Courses data={courses} />
              <References />
            </span> 
          ): (<h3> loading ... </h3>) }

        </article>
      </Main>
    );
  }
}

export default Resume;
