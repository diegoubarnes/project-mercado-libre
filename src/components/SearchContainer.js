import React from 'react';

import logo from '../assets/images/Logo_ML.png';
import btnSearch from '../assets/images/ic_Search.png';
import './styles/SearchContainer.sass';

class Search extends React.Component {

  render () {
    return (
      <div className="Search">
        <div className="container py-2">
          <div className="row justify-content-center align-items-center">
            <div className="col-10 d-flex">
            <div className="positionImg">
              <img src={logo} alt="Logo de Mercado Libre" />
            </div>
            <form className="sizeForm" onSubmit={this.props.onSubmit}>
              <div className="input-group">
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  name="inputSearch"
                  aria-label="Nunca dejes de buscar"
                  aria-describedby="button-search"
                  placeholder="Nunca dejes de buscar"
                  value={this.props.formValues.inputSearch}
                />
                <button
                  className="btn btn-outline-secondary"
                  id="button-search"
                >
                  <img src={btnSearch} alt="Boton para buscar" />
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
