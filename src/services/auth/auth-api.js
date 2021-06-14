import axios from 'axios'
import { EXPO_BACKEND } from '../../env';

export const signIn = ({
  email,
  password,
})=> {
  return axios.post(`${EXPO_BACKEND}/auth/local`, {
    identifier: email,
    password,
  });
}

export const signOut = () => {}

export const onAuthStateChanged = () => {
  return () => {}
}
