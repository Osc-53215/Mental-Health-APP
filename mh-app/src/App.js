import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Abouts from './components/Abouts';
import Resources from './components/Resources';
import Donations from './components/Donations';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="app">
      <Router>
          <Switch>
            <Route path="/" exact> 
              <Header />
                <div className = 'app__body'>
                  <Feed />
                  <Widgets />
                </div>
              
            </Route >
            <Route path="/abouts">
              <Abouts />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/donations">
              <Donations />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;