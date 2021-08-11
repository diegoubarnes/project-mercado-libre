import React from 'react';

import api from '../Api';
import './styles/SearchResults.sass';
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
    data: [
      {
        id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
        price: 'Freda',
        lastName: 'Grady',
        email: 'Leann_Berge@gmail.com',
        title: 'Legacy Brand Director',
        twitter: 'FredaGrady22221-7573',
        picture:
          'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
      },
      {
        id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
        price: 'Major',
        lastName: 'Rodriguez',
        email: 'Ilene66@hotmail.com',
        title: 'Human Research Architect',
        twitter: 'MajorRodriguez61545',
        picture:
          'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
      },
      {
        id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
        price: 'Daphney',
        lastName: 'Torphy',
        email: 'Ron61@hotmail.com',
        title: 'National Markets Officer',
        twitter: 'DaphneyTorphy96105',
        picture:
          'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
      },
    ],
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
      // const data = await api.Search.searchItems('MLA931241216');
      // console.log(data)
      // this.setState ({loading: false, data: data});
    } catch (error) {
      this.setState ({loading: false, error: error});
    }
  };
  render () {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

      return (
        <div className="Search__container">
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
        </div>
      );
  }
}

export default SearchResults;
