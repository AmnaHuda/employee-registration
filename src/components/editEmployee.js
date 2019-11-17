import React, { Component } from 'react';
import {Form, Button, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {editEmployee} from '../redux/employee/actions'
import {NavLink} from 'react-router-dom';
import DatePicker from 'react-datepicker'

class EditEMployee extends Component {
    constructor(props){
        super(props)

        const employee_index = this.props.match.params.id;
        console.log("employee_index", employee_index)
        const employee = this.props.employees[employee_index];
        console.log("employee", employee)
      
       this.state = {
            id: employee._id,
            name: employee.name,
            designation: employee.designation,
            dateOfJoining:  employee.dateOfJoining,
            salary: employee.salary,
            jobResponsibilities: employee.jobResponsibilities,
            isManager: employee.isManager
        }  
    }

    editEmployeeHandler = (e)=>{
        e.preventDefault();
 
        if(typeof(this.state.jobResponsibilities) === 'string')
        {
            var responsibilities = [];
            responsibilities  = this.state.jobResponsibilities.split(',');
        }

        const employee_index = this.props.match.params.id;
      
        const employee = {
            id: this.state.id,
            name: this.state.name,
            designation:  this.state.designation,
            dateOfJoining:  this.state.dateOfJoining,
            salary:  this.state.salary,
            jobResponsibilities: responsibilities ? responsibilities : this.state.jobResponsibilities,
            isManager:  this.state.isManager
        }
        console.log("Employee after Update", employee)

        this.props.editEmployee(employee, employee_index);
        this.props.history.push('/dashboard')
    }

    render() { 
        return (
            <div>
              <Form onSubmit={this.editEmployeeHandler} className="col-md-8 offset-md-2 mt-4 mb-4">
              <h4> EDIT EMPLOYEE</h4>
                    <Form.Group controlId="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name"  value={this.state.name} onChange={(e)=>{ this.setState({name: e.target.value})}}/>
                    </Form.Group>

                    <Form.Group controlId="designation">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" placeholder="Enter Designation" value= {this.state.designation} onChange={(e)=>{this.setState({designation: e.target.value})}}/>
                    </Form.Group>

        
                    <Form.Label>Date of Joining</Form.Label>
                    <Form.Group controlId="designation">
                    <DatePicker  dateFormat="MMMM d, yyyy" selected={new Date(this.state.dateOfJoining)}  value= {this.state.dateOfJoining} onChange={(date)=>{this.setState({dateOfJoining: new Date(date)})}} />
                
                    </Form.Group>

                    <Form.Group controlId="salary" >
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="text" placeholder="Enter Salary" value={this.state.salary} onChange={(e)=>{this.setState({salary: e.target.value})}} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="responsibilities">
                        <Form.Label>Responsibilities</Form.Label>
                        <Form.Control as="textarea" rows="3" value={this.state.jobResponsibilities} onChange={(e)=>{this.setState({jobResponsibilities: e.target.value})}}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Check id="isManager" type="checkbox" label="is Manager"  checked={this.state.isManager} onChange={(e)=>{this.setState({isManager: e.target.checked})}}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <NavLink className="btn btn-secondary ml-2" to='/'>Cancel</NavLink>

                </Form>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => ({
    employees: state.employees
  })
  
const mapDispatchToProps = {
    editEmployee
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(EditEMployee);