import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      curruntUser : null
    }
  }

  unsubscribeFormAuth = null;

  componentDidMount(){
    this.unsubscribeFormAuth = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
              curruntUser:{
                id:snapshot.id ,
              ...snapshot.data()}
          });
        })
      }
       console.log("UUUUU",this.state)
      this.setState({
        curruntUser:userAuth
      })
    })
  }

  componentWillUnmount() {
    console.log("unsubscribe")
    this.unsubscribeFormAuth();
  }

  render(){
    const {curruntUser} = this.state;
    console.log("APP state",this.state);
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
