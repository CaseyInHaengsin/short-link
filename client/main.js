import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { Tracker } from 'meteor/tracker';
import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

const unauthenticatedPages = ['/', '/signup'];
const authenticated = ['/link'];



//create and import basic version of Login
//create the route for / and login

const history = createHistory();
console.log(history);
//const location = history.location;

const onEnterPublicPage = () => {
    if(Meteor.userId()){
        history.replace('/link');
    }
};

//create onEnterPrivatePage
//check if user is not logged in
//if not, redirect to /

const onEnterPrivatePage = () => {
    if(Meteor.userId() == false){
        history.replace('/');
    }
};


const routes = (

   <Router history={history}>
        <Switch>
            <Route exact path='/' component={Login} componentWillReceiveProps={onEnterPublicPage}/>
            <Route exact path='/signup' component={Signup} componentWillReceiveProps={onEnterPublicPage}/>
            <Route path='/link' component={Link} componentWillReceiveProps={onEnterPrivatePage} />
            <Route path='*' component={NotFound}/>


        </Switch>

   </Router>



);



Tracker.autorun(() => {
    //this line is verifying whether or not a user is logged in.


    //console.log(props);

    const isAuthenticated = !!Meteor.userId();
    const pathname = history.location.pathname;
   //console.log(this.history.pushState);

    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticated.includes(pathname);

    //console.log(isUnauthenticatedPage);


    //if on unauthenticated page and user is logged in, redirect to /links
    //if on authenticated page and not logged in, redirect to /

    if(isUnauthenticatedPage && isAuthenticated){
        //const history1 = createHistory();
        //this.context.history.push('/link');
        //console.log(history);
        //<Redirect to='/link'/>
        history.replace('/link');
        //console.log('u');

    }
    else if(isAuthenticatedPage && isAuthenticated == false){
        //this.context.history.push('/');
        history.replace('/');
        //console.log('authed');
    }
    //console.log('isAuthenticated', isAuthenticated);
});


Meteor.startup(() => {
   ReactDOM.render(routes, document.getElementById('app'));
});