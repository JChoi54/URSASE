import React, {Component} from 'react';
import '../../App.css';
import {Redirect} from "react-router-dom";

class Logout extends Component {
    state = {
        loading: true
    }

    componentDidMount() {
        fetch('/api/signout').then(res => {
            if (res.status === 200) {
                this.setState({loading: false})
                this.props.logOut()
            }
        })
    }

    render() {
        if (this.state.loading) {
            return null // TODO: Add a refresh icon when loading.
        } else {
            return (
                <Redirect to={"/"}/>
            )
        }
    }
}

export default Logout