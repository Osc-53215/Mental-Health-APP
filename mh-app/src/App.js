import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Abouts from './components/Abouts';
import Resources from './components/Resources';
import Infographics from './components/Infographics';
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
            <Route path="/inforgraphics" exact> 
              <Header />
                <div className = 'app__body'>
                  <Infographics />
                </div>
            </Route >
          </Switch>
    </div>
  );
}

export default App;