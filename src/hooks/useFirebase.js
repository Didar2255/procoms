import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import initializeAuthentication from '../Firebase/Firebase.init';
import {
  registerUser,
  setAuthError,
  setIsLoading,
} from '../redux/slices/auth/authSlice';

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
  const dispatch = useDispatch();

  const auth = getAuth();

  //REGISTRATION PROCESS OF USER
  const processSignUp = (name, email, password, navigate) => {
    dispatch(setIsLoading(true));
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(setAuthError(''));

        const newUser = { name, email };

        dispatch(registerUser(newUser));

        // save the user to database
        // axios
        //   .post("url will be here", {
        //     ...newUser,
        //     isPaidUser: false,
        //   })
        //   .then(() => {})
        //   .catch((error) => console.log(error.message));

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => dispatch(setAuthError(error.message)));
        navigate('/');
      })
      .catch((error) => {
        dispatch(setAuthError(error.message));
        console.log(error);
      })
      .finally(() => dispatch(setIsLoading(true)));
  };

  //USER LOGIN PROCESS
  const processSignIn = (email, password, location, navigate) => {
    dispatch(setIsLoading(true));

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const redirect_uri = location?.state?.from || '/';
        navigate(redirect_uri);
        dispatch(setAuthError(''));
      })
      .catch((error) => dispatch(setAuthError(error.message)))
      .finally(() => setIsLoading(false));
  };

  // change the user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName: name, email } = user;
        dispatch(registerUser({ name, email }));
      } else {
        dispatch(registerUser({}));
      }
      dispatch(setIsLoading(false));
    });
    return () => unsubscribed;
  }, [auth, dispatch]);

  //process user logout
  const logout = () => {
    dispatch(setIsLoading(true));
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        dispatch(setAuthError(error.message));
      })
      .finally(() => dispatch(setIsLoading(false)));
  };

  return {
    processSignIn,
    logout,
    processSignUp,
  };
};

export default useFirebase;
