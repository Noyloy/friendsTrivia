export const environment = {
    production: false,
    constants: {
      db: {
        users: 'users',
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