import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      curruntUser : null
    }
  }

  unsubscribeFormAuth = null;

  componentDidMount(){
    this.unsubscribeFormAuth = auth.onAuthStateChanged(user =>{
      this.setState({curruntUser:user});
       console.log("UUUUU",user)
    })
  }

  componentWillUnmount() {
    console.log("unsubscribe")
    this.unsubscribeFormAuth();
  }

  render(){
    const {curruntUser} = this.state;
    return (
      <div >
          <Header curruntUser={curruntUser} />
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/signin" component={SignInAndSignUpPage} />
          </Switch>
      </div>
    );
  }
  
}

export default App;
