import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({ logout, isAuthenticated }) => {
  // const [redirect, setRedirect] = useState(false);

  //   const logout_user = () => {
  //       logout();
  //       setRedirect(true);
  //   };

    const guestLinks = () => (
        <Fragment>
            <li className='nav-item'>
                <Link className='nav-link' to='/login'>Login</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/signup'>Sign Up</Link>
            </li>
        </Fragment>
    );

    const authLinks = () => (
        <li className='nav-item'>
            <a className='nav-link' href='#!' onClick={logout}>Logout</a>
        </li>
    );
  return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>Auth System</Link>
        {isAuthenticated ? authLinks() : guestLinks()}
                {/* {isAuthenticated ? 
                <Link className='navbar-brand' to='/'>Auth System</Link>
              :
                 <Link className='navbar-brand' to='/signup'>Auth Sys</Link>
              }
              <Link className='navbar-brand' to='/'>logout</Link> */}
                <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-toggle='collapse' 
                    data-target='#navbarNav' 
                    aria-controls='navbarNav' 
                    aria-expanded='false' 
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item active '>
                            <Link className='nav-link' to='/'>Home <span className='sr-only'>(current)</span></Link>
                        </li>
                        <li className='nav-item px-2'>
                            <Link className='nav-link' to='/login'>Login</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/signup'>Sign up </Link>
                        </li>
                        {isAuthenticated ? authLinks() : guestLinks()}
                    </ul>
                </div>
            </nav>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);


// --------------------------------------------------------------


// import React from 'react';
// import { Link } from 'react-router-dom';
// // import { connect } from 'react-redux';
// // import { logout } from '../actions/auth';


// const Navbar = ({ logout, isAuthenticated }) => {
//   return (
//     <nav className='navbar navbar-expand-lg navbar-light bg-light'>
//       <Link className='navbar-brand' to='/'>Auth System</Link>
//       <button
//         className='navbar-toggler'
//         type='button'
//         data-toggle='collapse'
//         data-target='#navbarNav'
//         aria-controls='navbarNav'
//         aria-expanded='false'
//         aria-label='Toggle navigation'
//       >
//         <span className='navbar-toggler-icon'></span>
//       </button>
//       <div className='collapse navbar-collapse' id='navbarNav'>
//         <ul className='navbar-nav'>
//           <li className='nav-item active'>
//             <Link className='nav-link' to='/'>Home <span className='sr-only'>(current)</span></Link>
//           </li>
//           {isAuthenticated && (
//             <li className='nav-item'>
//               <a className='nav-link' href='#!' onClick={logout}>Logout</a>
//             </li>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;



// -------------------------------------------------------------------

// const Navbar = ({ logout, isAuthenticated }) => {
//   const guestLinks = () => (
//     <Fragment>
//       <li className='nav-item'>
//         <Link className='nav-link' to='/login'>Login</Link>
//       </li>
//       <li className='nav-item'>
//         <Link className='nav-link' to='/signup'>Sign Up</Link>
//       </li>
//     </Fragment>
//   );

//   const authLinks = () => (
//     <li className='nav-item'>
//       <a className='nav-link' href='#!' onClick={logout}>Logout</a>
//     </li>
//   );

//   return (
//     <nav className='navbar navbar-expand-lg navbar-light bg-light'>
//       <Link className='navbar-brand' to='/'>Auth System</Link>
//       <button
//         className='navbar-toggler'
//         type='button'
//         data-toggle='collapse'
//         data-target='#navbarNav'
//         aria-controls='navbarNav'
//         aria-expanded='false'
//         aria-label='Toggle navigation'
//       >
//         <span className='navbar-toggler-icon'></span>
//       </button>
//       <div className='collapse navbar-collapse' id='navbarNav'>
//         <ul className='navbar-nav'>
//           <li className='nav-item active'>
//             <Link className='nav-link' to='/'>Home <span className='sr-only'>(current)</span></Link>
//           </li>
//           {isAuthenticated ? authLinks() : guestLinks()}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { logout })(Navbar);
