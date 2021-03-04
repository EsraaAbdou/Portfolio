import { Component } from 'react';
import Header from './HeaderComponent';
import ListComponent from './ListComponent';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
  
      };
    }
    render () {
      return (
        <div>
          <Header />
          <ListComponent />
        </div>
      );
    }
  }
  
  export default Main;