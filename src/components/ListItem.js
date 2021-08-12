import React from 'react';

import './styles/SearchResults.sass';
import { withRouter } from 'react-router';
import api from '../Api';

class ListItem extends React.Component {
    goToDetails(product) {
      this.getResultFromApiDetails(product)
      this.props.history.push("/items/" + product);
    }
    getResultFromApiDetails = async (id) => {
      const dataDetails = await api.Search.searchItemDescription(id);
      console.log (dataDetails);
      let detailProduct = [];
      if (dataDetails && dataDetails.item && dataDetails.item.length > 0) {
        detailProduct = dataDetails.item;
      }
      this.setState ({loading: false, dataDetails: detailProduct});
    };
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