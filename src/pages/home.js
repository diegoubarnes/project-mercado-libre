import React from 'react'


import Search from './../components/SearchContainer';
import PageLoading from './../components/PageLoading';

class Home extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
          inputSearch: '',
        },
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
    
        // try {
        //   await api.badges.create(this.state.form);
        //   this.setState({ loading: false });
    
        //   this.props.history.push('/badges');
        // } catch (error) {
        //   this.setState({ loading: false, error: error });
        // }
      };



      render() {
        if (this.state.loading) {
          return <PageLoading />;
        }
    
        return (
            <div >
                <div>
                  <Search
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    formValues={this.state.form}
                    error={this.state.error}
                  />
                </div>
              </div>
        );
      }
}

export default Home;