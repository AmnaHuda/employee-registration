import React ,{Component} from 'react';
import {listEmployees} from './redux/employee/actions';
import {connect} from 'react-redux';
import Router from './router';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Navbar, Container} from 'react-bootstrap'

class App extends Component {

  componentDidMount(){
    this.props.listEmployees();
  }

  
render()
{
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand href="/" style={{color:"aqua"}}>
         EMPLOYEE MANAGEMENT SYSTEM
        </Navbar.Brand>
      </Navbar>
      <div className= "container-fluid"> 
      <Router/>
    </div>
    </div>
    
  );
}
  
}

const mapStateToProps = (state) => ({
  employees: state.employees
})

const mapDispatchToProps = {
  listEmployees
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
