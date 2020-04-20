
import {Component} from 'react'
import { getContactIcons } from '../../services/contentful.service';

export class ContactFetcherComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        contacts: []
      };
    }
    
    componentDidMount() {
      this.fetchContactIcons();
    }
    
    fetchContactIcons() {
      const parser = (items) => items.map(item => item.fields);
      const sorter = (items) => items.sort((a, b) => a.order - b.order);
      getContactIcons()
      .then(response => {
        this.setState({
          contacts: sorter(parser(response.items)),
          isLoaded: true,
        });
      })
    }

    render() {
        return null;
    }
};