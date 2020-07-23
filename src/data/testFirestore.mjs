// import { firestore } from "../firebase.js";



  // state = {
  //   categories: [],
  // };

  // componentDidMount() {
  //   this.setCookbookState();
  // }

  // setCategoriesState = () => {
  //   firestore
  //     .collection("categories")
  //     .get()
  //     .then((querySnapshot) => {
  //       const categories = querySnapshot.docs.map((doc) => doc.data());
  //       console.log(categories);
  //       // this.setState({ categories });
  //     })
  //     .catch((err) => console.log(err));
  // };

  // removeFromCookbook = (recipe) => {
  //   firestore
  //     .collection("recipes")
  //     .doc(recipe.id)
  //     .delete()
  //     .then(this.setCookbookState)
  //     .catch((err) => console.log(err));
  // };

// setCategoriesState();