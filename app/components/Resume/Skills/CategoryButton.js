import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CategoryButton extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    active: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      handleClick: props.handleClick,
      active: props.active,
      label: props.label 
    };
  }
  
  render(){
    const { handleClick, active, label  } = this.state;
    return (
      <button
        className={`skillbutton ${active[label] ? 'skillbutton-active' : ''}`}
        type="button"
        onClick={() => handleClick(label)}
      >
        {label}
      </button>
    );
  }
}

export default CategoryButton;