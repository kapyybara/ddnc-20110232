import auth from '@react-native-firebase/auth';

export const register = async (email: string, pass: string) => {
  return auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        throw new Error('That email address is invalid!');
      }

      console.error(error);
    });
};

export const signInUserPassword = async (email: string, pass: string) => {
  return auth()
    .signInWithEmailAndPassword(email, pass)
    .then(() => {
      console.log('login successful');
    })
    .catch(error => {
      console.log(error);
    });
};

export const signOut = async () => {
    console.log('signout')
  return auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};
