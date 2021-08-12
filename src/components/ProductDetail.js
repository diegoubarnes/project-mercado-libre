import React from 'react';
import api from '../Api';


import './styles/ProductDetails.sass';

class ProductDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      detailProduct: {}
    }
    const id = this.props.match.params.id;
    this.getResultFromApiDetails(id);
  }

  getResultFromApiDetails = async (id) => {
    const dataDetails = await api.Search.searchItemDescription(id);
    console.log (dataDetails);
    let detailProduct = [];
    if (dataDetails && dataDetails.item) {
      detailProduct = dataDetails.item;
    }
    this.setState ({loading: false, dataDetails: detailProduct});
  };
  render () {
    return (
      <div className="container">
        <div className="Details__container row">
        <div className="col text-center">
          <img
            className="ListDetails__img"
            src={this.state.dataDetails?.picture}
            alt="imagen de su articulo"
          />
          </div>
          <div className="col">
            <strong>
            {this.state.dataDetails?.title}
            </strong>
            <br /> 
            <h1>
            $  {this.state.dataDetails?.price}
            </h1>
            <div className="text-center">
            <button type="button" className="btn btn-primary btnSize">Comprar</button>
            </div>
          </div>
        </div>
        <div className="Details__container">
          <h4>
          Descripción del producto
          </h4>
          <p className="text-muted">
          {this.state.dataDetails?.description}
          </p>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
