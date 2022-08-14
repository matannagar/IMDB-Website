import fireabse from "firebase-admin";

// const firebaseConfig = {
//   apiKey
//   authDomain
//   databaseURL
//   projectId
//   storageBucket
//   messagingSenderId
//   appId
//   measurementId
// };

/* init firebase */
fireabse.initializeApp({
  credential: fireabse.credential.cert(serviceAccount),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
});

/* Here you put all the controllers. for example:*/

export const handleGETALL = () => {
  /* Here you put all the code for handling the GET requests from route1*/
  /* For example: */
  console.log("handle GET requests from route1...");

  fireabse
    .database()
    .ref("/route1")
    .once("value")
    .then(function (snapshot) {
      console.log(snapshot.val());
    })
    .then(() => {
      console.log("handle GET requests from route1...done");
    })
    .catch((error) => {
      console.log(console.log("Error getting data: ", error));
    });
};

export const handleGET = (id) => {
  /* Here you put all the code for handling the GET requests from route1*/
  /* For example: */
  console.log("handle GET requests from route1...");

  fireabse
    .database()
    .ref("/route1" + id)
    .once("value")
    .then(function (snapshot) {
      console.log(snapshot.val());
    })
    .then(() => {
      console.log("handle GET requests from route1...done");
    })
    .catch((error) => {
      console.log(console.log("Error getting data: ", error));
    });
};

export const handlePOST = (id) => {
  /* Here you put all the code for handling the POST requests from route1*/
  /* For example: */
  console.log("handle POST requests from route1");

  fireabse
    .database()
    .ref("/route1" + id)
    .set({
      name: "John Doe",
      age: 25,
      isSingle: false,
      location: {
        city: "San Francisco",
        state: "CA",
        zip: 94107,
      },
    })
    .then(() => {
      console.log("Data saved successfully!");
    })
    .catch((error) => {
      console.log("Error writing data: ", error);
    });
};

export const handlePUT = (id) => {
  /* Here you put all the code for handling the PUT requests from route1*/
  /* For example: */
  console.log("handle PUT requests from route1");

  fireabse
    .database()
    .ref("/route1" + id)
    .update({
      isSingle: null,
    })
    .then(() => {
      console.log("Data updated successfully!");
    })
    .catch((error) => {
      console.log("Error writing data: ", error);
    });
};

export const handleDELETE = (id) => {
  /* Here you put all the code for handling the DELETE requests from route1*/
  /* For example: */
  console.log("handle DELETE requests from route1");

  fireabse
    .database()
    .ref("/route1" + id)
    .remove()
    .then(() => {
      console.log("Data deleted successfully!");
    })
    .catch((error) => {
      console.log("Error deleting data: ", error);
    });
};
