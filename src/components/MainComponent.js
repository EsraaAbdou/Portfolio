import { Component } from 'react';
import Header from './HeaderComponent';
import ListComponent from './ListComponent';
import { PORTFOLIOITEMS } from '../shared/portfolioItems';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewItems: PORTFOLIOITEMS,
        filterTitle: "" 
      };
      this.onTagClick = this.onTagClick.bind(this);
      this.resetFilter = this.resetFilter.bind(this);
    }

    onTagClick(tag) {
      this.setState(state => {return {viewItems: state.viewItems.filter(item => item.tags.includes(tag)), filterTitle: tag}})
    }

    resetFilter() {
      this.setState({viewItems: PORTFOLIOITEMS, filterTitle:""});
    }

    render () {
      return (
        <div>
          <Header />
          <ListComponent viewItems={this.state.viewItems} onTagClick={this.onTagClick} filter={this.state.filterTitle}
            resetFilter={this.resetFilter} />
        </div>
      );
    }
  }
  
  export default Main;