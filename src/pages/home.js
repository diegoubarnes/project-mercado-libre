import React from 'react'


import Search from './../components/SearchContainer';
import PageLoading from './../components/PageLoading';
import api from '../Api';
import SearchResults from '../components/SearchResults';
import PageError from '../components/PageError';
import { withRouter } from 'react-router';

class Home extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
          inputSearch: '',
        },
        data: [],
        dataDetails: []
      };
    
      handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };

      handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true, error: null });
        this.getResultFromApi();
        this.props.history.push("/items?search=" + this.state.form.inputSearch);
      };

      getResultFromApi = async () => {
        try {
        const data = await api.Search.searchItems(this.state.form.inputSearch);
          console.log(data)
          let products = [];
          if (data && data.items && data.items.length > 0) {
            products = data.items
          }
          this.setState ({loading: false, data: products});
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
      }
      render() {
        if (this.state.loading) {
          return <PageLoading />;
        }

        if (this.state.error) {
          return <PageError error={this.state.error} />;
        }

        return (
            <div >
                <div>
                  <Search
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    onHandleClick={this.handleSubmit}
                    formValues={this.state.form}
                    error={this.state.error}
                  />
                  <SearchResults
                    products={this.state.data}
                  />
                </div>
              </div>
        );
      }
}

export default  withRouter(Home);