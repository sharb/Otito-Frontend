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


class App extends React.Component {
  render () {
    return (
    	<span>
       
       

        <Router>
          <div className="d-flex flex-column bd-highlight main-wrapper">
            <div className="p-2"> <Header/> </div>
            <div className="p-2"><Body/></div>
            <div className="mt-auto p-2 bd-highlight"><Footer/></div>
          </div>
            
        </Router>
       
      </span>
    );
  }
}

render(<App/>, document.getElementById('app'));