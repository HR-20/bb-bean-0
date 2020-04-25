import React, { Component } from 'react';
import logo from '../../logo.svg';

export default class About extends Component {
    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Once upon a time, someone planted a seed in a hope that it will sprout a day to become a big tree. <code>- Bajaj</code>
                </p>
            </div>
        )
    }
}
