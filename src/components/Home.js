import React, { Component } from 'react';

import Searchbar from '../containers/Searchbar';
import PodcastList from '../containers/PodcastList';

export default class Home extends Component {
    render() {
        return (
            <div className="container home-page">
                <Searchbar />
                <PodcastList />
            </div>
        );
    }
}
