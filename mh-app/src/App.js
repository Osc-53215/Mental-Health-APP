import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Abouts from './components/Abouts';
import Resources from './components/Resources';
import Donations from './components/Donations';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
          <Switch>
            <Route path="/" exact> 
              <Header />
                <div className = 'app__body'>
                  <Feed />
                  <Widgets />
                </div>
            </Route >
            <Route path="/abouts" exact> 
              <Header />
                <div className = 'app__body'>
                  <Abouts />
                </div>
            </Route >
            <Route path="/resources" exact> 
              <Header />
                <div className = 'app__body'>
                  <Resources />
                  <Widgets />
                </div>
            </Route >
            <Route path="/donations" exact> 
              <Header />
                <div className = 'app__body'>
                  <Donations />
                </div>
            </Route >
          </Switch>
    </div>
  );
}

export default App;