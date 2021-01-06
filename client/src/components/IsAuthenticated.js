import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default function isAuthenticated(ComponentToProtect) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                redirect: false,
            };
        }

        componentDidMount() {
            fetch('/api/checkToken')
                .then(res => {
                    if (res.status === 200) {
                        this.setState({loading: false, redirect: false});
                    } else if (res.status === 401) {
                        this.setState({loading: false, redirect: true});
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        }

        render() {
            const {loading, redirect} = this.state;

            if (loading) {
                return null;
            }

            if (redirect) {
                return <Redirect to="/login"/>;
            }
            else {
                return <ComponentToProtect {...this.props} />;
            }
        }
    }
}