import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
const TestPath = () => {
  return (
    <h1>Hello hats</h1>
  )
}
function App() {
  return (
    <div >
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/hats" component={TestPath} />

        </Switch>
    </div>
  );
}

export default App;
