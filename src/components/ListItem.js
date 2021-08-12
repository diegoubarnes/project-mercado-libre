import React from 'react';

import './styles/SearchResults.sass';
import { withRouter } from 'react-router';

class ListItem extends React.Component {
    goToDetails(product) {
      this.props.history.push("/items/" + product);
    }
    render() {
      return (
        <div className="ListItem" onClick={() => this.goToDetails(this.props.item.id)}>
          <img
            className="ListItem__img"
            src={this.props.item.picture}
            alt="imagen de su articulo "
          />
          <div>
            <strong>
              {this.props.item.price}
            </strong>
            <br />{this.props.item.title}
          </div>
        </div>
      );
    }
  }

  export default  withRouter(ListItem);