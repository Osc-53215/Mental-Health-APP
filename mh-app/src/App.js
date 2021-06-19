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
            <Route path="/abouts" component = {Abouts}/>
            <Route path="/resources" component = {Resources}/>
            <Route path="/donations" component = {Donations}/>
          </Switch>
    </div>
  );
}

export default App;