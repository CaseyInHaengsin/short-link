import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';





//create and import basic version of Login
//create the route for / and login

const routes = (

   <BrowserRouter>
        <Switch>
            <Route exact path='/signup' component={Signup}/>
            <Route path='/link' component={Link}/>
            <Route exact path='/' component={Login}/>
            <Route path='*' component={NotFound}/>


        </Switch>

   </BrowserRouter>



);


Meteor.startup(() => {
   ReactDOM.render(routes, document.getElementById('app'));
});