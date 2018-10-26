import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../containers/Header';

import ACTIONS from '../actions';

import 'normalize.css';
import '../themes/Base.css';

class App extends Component {
    render() {
        const { children, isLoading } = this.props;

        return (
            <div>
                <Header />
                <div className={`${isLoading ? 'hide' : 'show'}`}>
                    {children}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.pageReducer.isLoading,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ACTIONS, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
