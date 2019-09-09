import React, { Component } from 'react';

/** Components */
import LoginComponent from '../../components/login'


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: {
                text: "",
                fields: []
            }
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e, path){
        let state = this.state;
        state[path] = e.target.value;
        return this.setState(state);
    }

    handleLogin(){
        const credentials = {
            email: this.state.email.trim(),
            password: this.state.password.trim()
        };

        this.props.postLogin(credentials);
        setTimeout(()=>window.location="/dashboard", 200);
    }

    render() {
        return(
            <div className="container">
                <LoginComponent handleLogin={this.handleLogin} onChange={this.onChange}/>
            </div>
        );
    }

}