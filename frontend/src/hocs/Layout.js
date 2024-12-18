import React , {useEffect} from "react";
import Navbar from "../components/Navbar";
import { connect } from 'react-redux';
import { checkAuthenticated , load_user } from "../actions/auth";

 const Layout = ( props ) => {
  useEffect(() => {
            checkAuthenticated();
            load_user();
        }, []);
  return (
    <>

<Navbar isAuthenticated={props.isAuthenticated} />

     {props.children}
  
    </>
  );
};

export default connect(null, {checkAuthenticated , load_user})(Layout);

// const Layout = ({ checkAuthenticated, load_user, children }) => {
//     useEffect(() => {
//         checkAuthenticated();
//         load_user();
//     }, []);

//     return (
//         <div>
//             <Navbar />
//             {children}
//         </div>
//     );
// };

// export default connect(null, { checkAuthenticated, load_user })(Layout);
