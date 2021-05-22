import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import { Switch, Route, Redirect} from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkout/checkout.component';
import ShopPage from './pages/shop/shop.component';
import { auth , createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {

  unsubscibeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } =this.props;
    this.unsubscibeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userref =await createUserProfileDocument(userAuth);
        userref.onSnapshot(snapshot=>{
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
        })
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth = null;
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/signIn" render={()=> this.props.currentUser ? (<Redirect to='/'/>):(<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps = state =>({
  currentUser: state.user.currentUser
})

const mapDispatchToProps= dispatch =>({
   setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);
