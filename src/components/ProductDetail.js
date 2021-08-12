import React from 'react';


import './styles/ProductDetails.sass';

class ProductDetail extends React.Component {
  render () {
    return (
      <div>
        <div className="Details__container">
          <img
            className="ListDetails__img"
            src={this.state.dataDetails.picture}
            alt="imagen de su articulo"
          />

          <div className="Title">
            <strong>
            {this.state.dataDetails?.price}
            </strong>
            <br /> {this.state.dataDetails?.price}
          </div>
        </div>
        <div className="Details__container">
          <strong>
          {this.state.dataDetails?.price}
          </strong>
          <br /> {this.state.dataDetails?.price}
        </div>
      </div>
    );
  }
}

export default ProductDetail;
