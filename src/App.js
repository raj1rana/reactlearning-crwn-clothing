import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop-components.jsx';
import Header from './components/header/header-component';
import {auth, createUserProfileDocument} from './firebase/firebase-utils'
import SignInAndSignupPage from './pages/login-and-register-page/login-and-register-page.component'
class  App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount(){
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      this.setState({currentUser:userAuth})
      console.log(this.state)

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return( <div>
      <Header  currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignupPage} />
      </Switch>
    </div>)
  }
}

export default App;
