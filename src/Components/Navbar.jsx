import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Edu Match</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/tutors">Find Tutors</Link></li>
            <li  tabIndex={0}>
              <Link to="/create-proposal"> Find Tution</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/account">Hi,{user.displayName ? user.displayName.split(' ')[0] : ''}</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;