import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class SkillBar extends Component {
  static defaultProps = {
    categories: [],
  };

  static propTypes = {
    data: PropTypes.shape({
      category: PropTypes.arrayOf(PropTypes.string).isRequired,
      competency: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    })),
  };

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      categories: props.categories
    };
    
    const data = props.data
    const categories = props.categories
    const { category, competency, title } = data;
    this.data = props.data
    this.categories = props.categories
    this.category = category
    this.competency = competency
    this.title = title

    this.titleStyle = {
      background: categories
        .filter(cat => category.includes(cat.name))
        .map(cat => cat.color)[0],
    };

    this.barStyle = {
      ...this.titleStyle,
      width: `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`,
    };
  }

  

 
  
  render(){
    return (
      <div className="skillbar clearfix">
        <div className="skillbar-title" style={this.titleStyle}><span>{this.title}</span></div>
        <div className="skillbar-bar" style={this.barStyle} />
        <div className="skill-bar-percent">{this.competency} / 5</div>
      </div>
    );
  }
}

export default SkillBar;