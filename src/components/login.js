import React, { Component } from 'react';
import {connect} from 'react-redux'
import {loginUser} from '../redux/user/actions'
import {Form, Button} from 'react-bootstrap'
 
class login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : "",
            password: ""
        }
    }

    componentDidMount(){
        console.log(this.props)
        if(this.props.user.token)
        this.props.history.push("/dashboard")
        else
        this.props.history.push("/")
    }

    loginHandler = (e)=>{
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(user)
        this.props.history.push('/dashboard')
    }


    render() { 
        return (
            <div>
               <Form onSubmit={this.loginHandler} className="col-md-8 offset-md-2 mt-4 mb-4">
              <h4> Login</h4>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text"  placeholder="Enter Email"  value={this.state.email} onChange={(e)=>{ this.setState({email: e.target.value})}}/>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  placeholder="Enter Password"  value= {this.state.password} onChange={(e)=>{this.setState({password: e.target.value})}}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>

                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user:state.user
  
    }
}

const mapDispatchToProps = {
    loginUser
}

export default connect(mapStateToProps,mapDispatchToProps)(login);