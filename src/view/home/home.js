import React, { Component } from 'react'
import {
    Input, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, ModalBody, Modal, ModalHeader, Label, Form, FormGroup, ModalFooter
} from 'reactstrap';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import '../home/home.css'
import * as actions from '../../action/loginact'
const ulogo = require('../../logo/udemylogo.png')
const tlogo = require('../../logo/trolly.png')

const hom = require('../../logo/hom.jpg')

class home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            },
            isOpen: false,
            modal: false,
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            isOpen: !this.state.isOpen,
            modal: !prevState.modal
        }));
    }
    change = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ user: { ...this.state.user, [name]: value } })
    }
    routeChange() {
        window.location.assign('/signup');
    }
    routeChange1() {
        window.location.assign('/login');
    }
    show(e) {
        e.preventDefault()
        this.props.actions.home.loginUser(this.state.user)
        this.toggle()
    }
    render() {
        return (
            <div>
                <Navbar className="navbar" light expand="md">
                    <NavbarBrand href="/"><img src={ulogo} alt="ulogo" style={{ height: '100px', width: '150px' }}></img></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Input type="search" placeholder="Search for Anything" style={{ width: "450px", marginLeft: "80px" }}></Input><i class="material-icons" style={{ width: "20px", marginLeft: "-30px", color: "black" }}>search</i>
                    <Nav className="ml-auto" navbar >
                        <NavItem>
                            <NavbarBrand href="/"><img src={tlogo} alt="tlogo" style={{ height: '42px', width: '50px' }}></img></NavbarBrand>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#"><Button outline color="primary" onClick={this.toggle}>Log In </Button></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#"><Button color="danger" style={{ marginRight: '20px' }} onClick={this.routeChange}>SignUp</Button>{' '}</NavLink>
                        </NavItem>
                    </Nav>

                </Navbar>
                <img src={hom} alt="hom" className="home"></img>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label >Email</Label>
                                <Input type="text" name="email" id="email" placeholder="email" value={this.state.user.email} onChange={this.change.bind(this)} />
                            </FormGroup>
                            <FormGroup>
                                <Label >Password</Label>
                                <Input type="text" name="password" id="password" placeholder="Enter the password" value={this.state.user.password} onChange={this.change.bind(this)} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.show.bind(this)}>Log In</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { Data } = state
    return {
        home: Data
    }
};
const mapDispatchToProps = dispatch => ({
    actions: {
        home: bindActionCreators(actions, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(home)

