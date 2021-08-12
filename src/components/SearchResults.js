import React from 'react';
import ListItem from './ListItem';

import './styles/SearchResults.sass';



class SearchResults extends React.Component {
  render () {
      return (
        <div className="Search__container">
        <div className="List">
          <ul className="list-unstyled">
            {this.props?.products?.map((item, index) => {
              if(index <= 3) {
              return (
                <li key={item.id}>
                  <ListItem item={item} />
                </li>
              );
              }
            })}
          </ul>
        </div>
        </div>
      );
  }
}

export default  SearchResults;
