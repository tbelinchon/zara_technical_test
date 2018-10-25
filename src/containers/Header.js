import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles/Header.css';

class Header extends Component {
    render() {
        const { isLoading } = this.props;

        return (
            <header>
                <div className="container">
                    { isLoading ?
                        <img src="images/loading.gif"/>
                        : null
                    }
                    <Link to="/">Podcaster</Link>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.pageReducer.isLoading,
    };
}

export default connect(mapStateToProps)(Header);
