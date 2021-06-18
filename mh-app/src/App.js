import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Widgets from './components/Widgets'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/" exact className="app"> 
              <Header />
              <Feed className = 'app__body'/>
              <Widgets className = 'app__body'/>
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