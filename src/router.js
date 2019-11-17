import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AddEmployee from './components/addEmployee';
import ListEmployee from './components/listEmployees';
import EditEmployee from './components/editEmployee';
import login from './components/login';

 const Router = () => (
  
    <Switch>
         <Route exact  path='/'  component={login} ></Route>
         <Route exact path='/dashboard'  component={ListEmployee} ></Route>
         <Route exact path='/add-employee' component={AddEmployee} ></Route>
         <Route exact path='/edit-employee/:id' component={EditEmployee} ></Route>
    </Switch>
)

export default Router;