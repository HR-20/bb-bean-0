import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';

const API_URL = 'https://api.openbrewerydb.org/breweries/search';

class Search extends Component {
    state = {
        query: '',
        results: []
    };

    getInfo = () => {
        axios.get(`${API_URL}?query=${this.state.query}`)
            .then(({ data }) => {
                this.setState({
                    results: data
                })
            })
    };

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }
        })
    };

    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <Suggestions results={this.state.results} />
            </form>
        )
    }
};

export default Search;
