import React from 'react';

import api from '../Api';
import PageLoading from './PageLoading';

class ListItem extends React.Component {
  render() {
    return (
      <div className="ListItem">
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

class SearchResults extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount () {
    this.fetchData ();

    this.intervalId = setInterval (this.fetchData, 5000);
  }

  componentWillUnmount () {
    clearInterval (this.intervalId);
  }

  fetchData = async () => {
    this.setState ({loading: true, error: null});

    try {
      const data = await api.Search.searchItems('MLA931241216');
      console.log(data)
      this.setState ({loading: false, data: data});
    } catch (error) {
      this.setState ({loading: false, error: error});
    }
  };
  render () {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

      return (
        <div className="List">
          <ul className="list-unstyled">
            {this.state.data.map(item => {
              return (
                <li key={item.id}>
                  <ListItem item={item} />
                </li>
              );
            })}
          </ul>
        </div>
      );
  }
}

export default SearchResults;
