import React from 'react';
import {render} from 'react-dom';
import Header from './components/shared/header.jsx';
import Footer from './components/shared/footer.jsx';
import Body from './components/shared/body.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';




// pages
import About from './components/about.jsx';
import Home from './components/home.jsx';
import Join from './components/join.jsx';
import Mission from './components/mission.jsx';





class App extends React.Component {
  render () {
    return (
    	<span>
       
       

   
          <div id="top-section" className="d-flex flex-column bd-highlight main-wrapper">
            <div className="main-header"> <Header/> </div>
            <div className="main-body"><Body/></div>
            <div className="main-footer"><Footer/></div>
          </div>
            

       
      </span>
    );
  }
}

let routes = (
<Route component={App} path='/'>
    <Route exact path='/' component={Home}/>
    <Route exact path='/join' component={Join}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/mission' component={Mission}/>
</Route>
);





render(<Router>{routes}</Router>, document.getElementById('app'));







