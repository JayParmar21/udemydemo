import React from 'react';
import {
    Input, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem
    , NavLink, Button, Dropdown, DropdownMenu, DropdownToggle,
    Modal, Form, ModalFooter, ModalBody, ModalHeader, FormGroup, Label
} from 'reactstrap';

import '../header/header.css'
const ulogo = require('../../logo/udemylogo.png')
const tlogo = require('../../logo/trolly.png')

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                email: '',
                dob: '',
                password: ''
            },
            isOpen: false,
            modal: false,
            modal1: false
        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
    }
    change = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ user: { ...this.state.user, [name]: value } })
    }
    toggle() {
        this.setState(prevState => ({
            isOpen: !this.state.isOpen,
            modal: !prevState.modal
        }));
    }
    toggle1() {
        this.setState(prevState => ({
            //isOpen: !this.state.isOpen,
            modal1: !prevState.modal1
        }));
    }
    handleClick = (e) => {
        e.preventDefault();
        this.props.
        this.setState({
            user: {
                name: '',
                email: '',
                dob: '',
                password: ''
            }
        })
        this.toggle()
    }
    render() {
        return (
            <div>

                <Navbar className="navbar" light expand="md">

                    <NavbarBrand href="/"><img src={ulogo} alt="ulogo" style={{ height: '100px', width: '150px' }}></img></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="dp" style={{ marginLeft: '50px' }}>
                        <DropdownToggle caret>
                            Categories
                        </DropdownToggle>
                        <DropdownMenu>
                        </DropdownMenu>
                    </Dropdown>
                    <Input type="search" placeholder="Search for Anything" style={{ width: "450px", marginLeft: "80px" }}></Input><i class="material-icons" style={{ width: "20px", marginLeft: "-30px", color: "black" }}>search</i>
                    <Nav className="ml-auto" navbar >
                        <NavItem>
                            <NavbarBrand href="/"><img src={tlogo} alt="tlogo" style={{ height: '42px', width: '50px' }}></img></NavbarBrand>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#"><Button outline color="primary" onClick={this.toggle1}>Log In </Button></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#"><Button color="danger" style={{ marginRight: '20px' }} onClick={this.toggle}>SignUp</Button>{' '}</NavLink>
                        </NavItem>
                    </Nav>

                </Navbar>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label >Name</Label>
                                <Input type="text" name="name" id="name" value={this.state.user.name} placeholder="Eneter the name" onChange={this.change.bind(this)} />
                            </FormGroup>
                            <FormGroup>
                                <Label >Email</Label>
                                <Input type="text" name="email" id="email" value={this.state.user.email} placeholder="email" onChange={this.change.bind(this)} />
                            </FormGroup>
                            <FormGroup>
                                <Label >Date Of Birth</Label>
                                <Input type="date" name="dob" id="Dob" value={this.state.user.dob} placeholder="Date Of Birth" onChange={this.change.bind(this)} />
                            </FormGroup>
                            <FormGroup>
                                <Label >Password</Label>
                                <Input type="text" name="password" id="password" value={this.state.user.password} placeholder="Enter the password" onChange={this.change.bind(this)} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleClick.bind(this)}>Sign Up</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modal1} toggle={this.toggle1} className={this.props.className}>
                    <ModalHeader toggle1={this.toggle1}>Log In</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label >Email</Label>
                                <Input type="text" name="email" id="email" placeholder="email" />
                            </FormGroup>
                            <FormGroup>
                                <Label >Password</Label>
                                <Input type="text" name="password" id="password" placeholder="Enter the password" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle1}>Log In</Button>{' '}
                        <Button color="secondary" onClick={this.toggle1}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>

        );
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