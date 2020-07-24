import React, { Component } from 'react';
import './App.css';
import { globalHistory } from '@reach/router';
import Routes from './containers/Routes/Routes.jsx';
import './data/fa-library';
import firebase from './firebase';
import { firestore } from './firebase';

class App extends Component {
  state = {
    user: null,
    emailAddress: null,
    password: null,
    categories: []
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
    this.setCategoriesState();
  }

  userSignInAttempt = event => {
    event.preventDefault();
    const { emailAddress, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => globalHistory.navigate('dashboard'))
      .catch(error => {
        alert("Oops. We couldn't sign you in. " + error.message);
      });
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        globalHistory.navigate('dashboard');
        this.setState({ user: null });
      })
      .catch((error) => {
        alert("Sorry!" + error.message);
      });
  };


  setEmail = event => {
    this.setState({ emailAddress: event.target.value });
  };

  setPassword = event => {
    this.setState({ password: event.target.value });
  };

  getSubcategories = (category) => {
    const categories = firestore.collection("categories").doc(category);

    categories.get().then((doc) => {
      doc.exists ?
        console.log("Document data:", doc.data().queries)
        :
        console.log("No such document!");
    }
    ).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }

  setCategoriesState = () => {
    firestore
      .collection("categories")
      .get()
      .then((snapshot) => {
        const categories = snapshot.docs
          .map((doc) => doc.data());
        this.setState({ categories });
      })
      .catch((err) => console.log(err));
  };

  addSubcategory = (category, newSubcategory) => {
    firestore
      .collection("categories")
      .doc(category)
      .update({
        queries: firebase.firestore.FieldValue.arrayUnion(newSubcategory)
      })
      .then(this.setCategoriesState)
      .catch((err) => console.log(err));
  };

  removeSubcategory = (category, queryToRemove) => {
    firestore
      .collection("categories")
      .doc(category)
      .update({
        queries: firebase.firestore.FieldValue.arrayRemove(queryToRemove)
      })
      .then(this.setCategoriesState)
      .catch((err) => console.log(err));
  };

  render() {
    return <Routes
      userSignInAttempt={this.userSignInAttempt}
      signOut={this.signOut}
      setEmail={this.setEmail}
      setPassword={this.setPassword}
      user={this.state.user}
      emailAddress={this.state.emailAddress}
      password={this.state.password}
      setCategoriesState={this.setCategoriesState}
      addSubcategory={this.addSubcategory}
      removeSubcategory={this.removeSubcategory}
      categories={this.state.categories}
    />;
  }
}

export default App;
