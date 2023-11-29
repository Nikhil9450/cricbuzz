// import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const navbar = () => {

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Spacex</div>
      </Link>
      <nav>
        <ul>
           <li>
           <Link to='/home'>Login</Link>
         </li>
         
          <li>
            <Link to='/livescore'>Spacex Missions</Link>
          </li>
          
            {/* <li>
            <button onClick={logoutHandler}>Logout</button>
          </li> */}
          
        </ul>
      </nav>
    </header>
  );
};

export default navbar;