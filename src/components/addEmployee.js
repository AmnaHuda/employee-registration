import React, { Component } from 'react';
import {Form, Button, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {addNewEmployee} from '../redux/employee/actions'
import {NavLink} from 'react-router-dom';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class AddEmployee extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            designation: "",
            dateOfJoining: "",
            salary: "",
            jobResponsibilities: "",
            isManager: false, 
            employeeError: {
                nameErr: "",
                designationErr: "",
            }
        }
    }

    validateEmployee = () =>{
        var nameErr = "";
        var designationErr = "";

        if(this.state.name === "")
        nameErr = "Please Enter Name"
       
        if(this.state.designation === "")
        designationErr = "Please Enter Designation"

        this.setState({
            employeeError: {
                nameErr: nameErr,
                designationErr: designationErr
            }
        })

        if(nameErr !== "" && designationErr !== "")
        {
            return false;
        }
           
        else
        return true;
    }

    addEmployeeHandler = (e) => {
        e.preventDefault();
        if(this.validateEmployee())
        {
            var responsibilities = [];
            responsibilities = this.state.jobResponsibilities.split(',');
           
            const employee = {
                name: this.state.name,
                designation:  this.state.designation,
                dateOfJoining:  this.state.dateOfJoining,
                salary:  this.state.salary,
                jobResponsibilities:  responsibilities,
                isManager:  this.state.isManager
            }
            this.props.addNewEmployee(employee)
            this.props.history.push('/dashboard')
        }

       
    }

    render() { 
   
      
          

        return (
       
            <div>
              <Form onSubmit={this.addEmployeeHandler} className="col-md-8 offset-md-2 mt-4 mb-4">
              <h4> ADD NEW EMPLOYEE</h4>
                    <Form.Group controlId="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" style={this.state.employeeError.nameErr !=="" ? {borderColor:"red"}: null} placeholder="Enter Full Name"  value={this.state.name} onChange={(e)=>{ this.setState({name: e.target.value})}}/>
                    <span className="text-danger">{this.state.employeeError.nameErr}</span>
                    </Form.Group>

                    <Form.Group controlId="designation">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" style={this.state.employeeError.nameErr !=="" ? {borderColor:"red"}: null} placeholder="Enter Designation"  value= {this.state.designation} onChange={(e)=>{this.setState({designation: e.target.value})}}/>
                        <span className="text-danger">{this.state.employeeError.designationErr}</span>
                    </Form.Group>

                    <Form.Label>Date of Joining</Form.Label>
                    <Form.Group controlId="designation">
                        <DatePicker  dateFormat="MMMM d, yyyy" selected={this.state.dateOfJoining}  onChange={(date)=>{this.setState({dateOfJoining: new Date(date)})}} />
                    </Form.Group>
                    
                        <Form.Group controlId="salary" >
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="text" placeholder="Enter Salary" value={this.state.salary}   onChange={(e)=>{this.setState({salary: e.target.value})}} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                    <Form.Group controlId="responsibilities">
                        <Form.Label>Responsibilities</Form.Label>
                        <Form.Control as="textarea" rows="3" value={this.state.jobResponsibilities}  onChange={(e)=>{this.setState({jobResponsibilities: e.target.value})}}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Check id="isManager" type="checkbox" label="is Manager"  value={this.state.isManager} onChange={(e)=>{this.setState({isManager: e.target.checked})}}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" >
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
    addNewEmployee
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);