import React from 'react';

import logo from '../assets/images/Logo_ML.png';
import btnSearch from '../assets/images/ic_Search.png';
import './styles/SearchContainer.sass';

class Search extends React.Component {
  handleClick () {
    console.log ('object');
  }
  render () {
    return (
      <div className="Search">
      <div className="navbar navbar-expand-lg">
        <div className="navbar-brand">
          <img src={logo} alt="Logo de Mercado Libre" />
        </div>
        <form onSubmit={this.props.onSubmit}>
          <div className="input-group d-flex">
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
              onClick={this.handleClick}
              className="btn btn-outline-secondary"
              id="button-search"
            >
              <img src={btnSearch} alt="Boton para buscar" />
            </button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default Search;