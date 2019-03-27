import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import * as actions from '../../action/signupact'
import { bindActionCreators } from "redux";


import '../home/home.css'
import { connect } from "react-redux";

class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                email: '',
                dob: '',
                password: ''

            },
            fieldsErrors: { name: '', email: '', dob: '', password: '' },
            fieldsValid: { name: false, email: false, dob: false, password: false },
            formValid: false,
        }
    }

    change = (e) => {
        console.log(e)
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ user: { ...this.state.user, [name]: value } }, () => { this.validate(name, value) })
        //console.log("change",this.state.user);
        // this.validate()
    }
    validate = (name, value) => {
        let err = this.state.fieldsErrors;
        let valid = this.state.fieldsValid;
        switch (name) {
            case 'name':
                valid.name = value.match(/^[a-zA-Z 0-9]+$/i);
                err.name = valid.name ? '' : '  Invalid name'
                break;
            case 'email':
                valid.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                err.email = valid.email ? '' : ' Invalid email';
                break;
            case 'password':
                valid.password = value.length >= 6;
                err.password = valid.password ? '' : ' Password is too short';
                break;
            default:
                break;
        }
        this.setState({
            fieldsErrors: { ...this.state.fieldsErrors, err },
            fieldsValid: valid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.fieldsValid.name &&
                this.state.fieldsValid.email &&
                this.state.fieldsValid.password
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        debugger
        this.props.actions.signup.addAction(this.state.user)
        this.setState({
            user: {
                name: '',
                email: '',
                dob: '',
                password: ''
            }
        })
        window.location.assign('/')
        console.log(this.state.user)
        // this.props.actions.signup.addAction(this.state.user)
        // this.setState({
        //     user:{
        //         name:'',
        //         email:'',
        //         password:''
        //     }
        // })
        // console.log(this.state.user)
    }

    render() {
        return (
            <div style={{ marginTop: '40px' }}>
                <center>
                    <div style={{ fontSize: '20px' }}> <a href="/" style={{ textDecoration: 'underline' }}>Sign In</a></div>
                    <div className="signup">
                        <Form style={{ width: '25%' }}>
                            <FormGroup>
                                <Label style={{ float: 'left' }} for="name">Name</Label>
                                <Input type="name" name="name" placeholder="Enter name" value={this.state.user.name}
                                    onChange={this.change.bind(this)} required />
                                <span style={{ color: "red" }}>{this.state.fieldsErrors.name}</span>
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ float: 'left' }} for="email">Email</Label>
                                <Input type="email" name="email" placeholder="Enter email" value={this.state.user.email}
                                    onChange={this.change.bind(this)} required />
                                <span style={{ color: "red" }}>{this.state.fieldsErrors.email}</span>
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ float: 'left' }} for="name">Date of Birth</Label>
                                <Input type="Date" name="dob" value={this.state.user.dob}
                                    onChange={this.change.bind(this)} required />
                                <span style={{ color: "red" }}>{this.state.fieldsErrors.name}</span>
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ float: 'left' }} for="Password">Password</Label>
                                <Input type="password" name="password" placeholder="Enter password" value={this.state.user.password}
                                    onChange={this.change.bind(this)} required />
                                <span style={{ color: "red" }}>{this.state.fieldsErrors.password}</span>
                            </FormGroup>
                            <button className="sbtn" disabled={!this.state.formValid}
                                onClick={this.handleClick.bind(this)}>SignUp</button>
                        </Form>
                    </div>
                </center>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const { Data } = state
    return {
        signup: Data
    }
};
const mapDispatchToProps = dispatch => ({
    actions: {
        signup: bindActionCreators(actions, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(signup)