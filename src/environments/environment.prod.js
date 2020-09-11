export const environment = {
  production: false,
  constants: {
    db: {
      users: 'users',
    },
    question: {
      image : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/friends-tv-show-1542126105.jpg?resize=500:*"
    }
  },
  firebase: {
    apiKey: 'insertApiKeyHere',
    authDomain: 'projectName.firebaseapp.com',
    databaseURL: 'https://projectName.firebaseio.com',
    storageBucket: 'projectName.appspot.com',
    messagingSenderId: 'uniqueFirebaseSenderID',
    projectId: 'projectName'
  }
};
export default environment;