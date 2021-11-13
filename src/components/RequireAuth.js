import { Navigate } from 'react-router-dom';
import firebase from '../service/firebase';
import { db, auth } from '../service/firebase';

export function RequireAuth({ Component, redirectLink, user}) {
  if (user) {
    return <Component user={user}/>;
  } else {
    return <Navigate to={redirectLink}/>;
  }
}
