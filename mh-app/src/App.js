import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Widgets from './components/Widgets'



function App() {
  return (
    <div className="app">
      <Header />
      <div className = 'app__body'>
        <Feed />
        <Widgets />
        
      </div>
    </div>
  );
}

export default App;
