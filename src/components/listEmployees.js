import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Navbar, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom';
import {deleteEmployee,listEmployees} from '../redux/employee/actions'

class ListEmployees extends Component {
  
    constructor(props){

        super(props)
        this.state = {
            searchStr: "",
        }
    }

    render() { 
        
        return (
            
            <div>
                 <Row>
                <NavLink className="btn btn-primary mt-3 mr-3 ml-3" to='/add-employee'>Add New Employee</NavLink>
                 <form class="form-inline my-2 my-lg-0 pt-3" >
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" onChange={(e)=>{this.setState({searchStr:e.target.value})}}/>
                    </form>
                </Row>
                
                 
                    <Row className="mt-5">
                        {this.props.employees.map((item, index)=>{
                            if(item.name.includes(this.state.searchStr))
                            {
                                return (
                                    <Col xs="3" key={index}>
                                    <Card bg="light" text="slate-grey" className="mb-3"  style={{ minHeight: '20rem' }}>
                                        <Card.Header>{item.name}</Card.Header>
                                        <Card.Body>
                                        <Card.Title>{item.designation}</Card.Title>
                                        <Card.Text>
                                            {item.jobResponsibilities.map((responsibility)=>{
                                                return  <span>{responsibility}<br/></span> 
                                            })}
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                        <NavLink className="btn btn-secondary mr-2" to={{pathname:`/edit-employee/${index}`}}>Edit</NavLink>
                                        <button className="btn btn-danger" onClick={()=>{
                                            this.props.deleteEmployee(item._id,index)}
                                        }>Delete</button>
                                        </Card.Footer>
                                    </Card>
                                    </Col>)

                            }
                       
                        })}
                    </Row>
            </div>

        );
    }
}
 
const mapStateToProps = (state) => (
        {employees: state.employees}
)
  
const mapDispatchToProps = {
    deleteEmployee, listEmployees
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ListEmployees);