import React ,{Component} from 'react';
// import {listEmployees} from './redux/employee/actions';
import {connect} from 'react-redux';
import Router from './router';
import { withRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Navbar, Container} from 'react-bootstrap'
import NavLink from 'react-bootstrap/NavLink';
import {logoutUser} from './redux/user/actions'

class App extends Component {
  constructor(props)
  {
    super(props)
  }

  // componentDidMount(){
  //   this.props.listEmployees();
  // }

  logout = (e) => {
    //alert("shdfjsd")
    e.preventDefault();
    console.log(this.props)
    //this.props.logoutUser()
    this.props.history.push("/")
  }

render()
{
  return (
    <div>
      {this.props.user ? 
      <Navbar {...this.props} bg="dark">
        <Navbar.Brand {...this.props} href="/dashboard" style={{color:"aqua"}}>
         EMPLOYEE MANAGEMENT SYSTEM
        <button {...this.props} className="navbar-right" type="submit" onClick={(e)=>{
         e.preventDefault()
          this.props.logoutUser()
          this.props.history.push('/')
          }} style={{marginLeft:"1000px"}}>logout</button>

     </Navbar.Brand>
      </Navbar> : 
      
      <Navbar bg="dark">
        <Navbar.Brand href="/" style={{color:"aqua"}}>
         EMPLOYEE MANAGEMENT SYSTEM
        </Navbar.Brand>
      </Navbar>
    }
      
      <div className= "container-fluid"> 
      <Router/>
    </div>
    </div>
    
  );
}
  
}

const mapStateToProps = (state) => ({
  user:state.user,
  employees:state.employees
})

const mapDispatchToProps = {
  logoutUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)) ;
