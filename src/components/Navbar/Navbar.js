// import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import AuthContext from '../../store/auth-context';

import classes from './Navbar.module.css';

const navbar = () => {

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>CricMad</div>
      </Link>
      <nav>
        <ul>
          <li>
           <Link to='/home'>Home</Link>
         </li>
         <li>
           <Link to='/otherPage'>Next Page</Link>
         </li> 
          {/* <li>
            <Link to='/livescore'>Live score</Link>
          </li> */}
          
            {/* <li>
            <button onClick={logoutHandler}>Logout</button>
          </li> */}
          
        </ul>
      </nav>
    </header>
  );
};

export default navbar;