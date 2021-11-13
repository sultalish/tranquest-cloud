
import { db, auth } from '../service/firebase';

import Badges from './Badges';
import ProgressBar from './ProgressBar';

const Profile = ( {user} ) => {

  const { photoURL } = auth.currentUser;

  console.log(user.level);

  return (
    <div>
      <div className='profile-page'>
        <div className='profile-header'>
          <div className='profile-header-left'>
            <img alt="avatar" src={photoURL}/>
            <p>{user.name}</p>
          </div>
          <div className='profile-header-right'>
            <p>Level {user.level}</p>
          </div>
        </div>
        <div className='description'>
          <p>{user.description}</p>
        </div>
        <Badges badges={user.badges}/>
        //<ProgressBar user={user}/>
      </div>
    </div>
  )
}

export default Profile;
