import React ,{useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import Activate from "./containers/Activate";
import Login from "./containers/Login";
import ResetPassword from "./containers/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import Signup from "./containers/Signup";

import {Provider} from 'react-redux';
import store from "./store";

import Layout from "./hocs/Layout";
import { checkAuthenticated } from './actions/auth';

function App() {
  useEffect(() => {
     store.dispatch(checkAuthenticated());
   }, []);
  return (
    <Provider store={store}>
       <BrowserRouter>
       <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/activate/:uid/:token" element={<Activate />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reset_password" element={<ResetPassword />} />
          <Route exact path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </Provider>
  );
}

export default App;


















// import React ,{useEffect} from "react";


// import { checkAuthenticated } from './actions/auth';

// function App() {
//   // useEffect(() => {
//   //   store.dispatch(checkAuthenticated());
//   // }, []);
//   return (
//     <Provider store={store}>
//        <BrowserRouter>
//        <Layout>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/activate/:uid/:token" element={<Activate />} />
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/reset_password" element={<ResetPassword />} />
//           <Route exact path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
//           <Route exact path="/signup" element={<Signup />} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//     </Provider>
//   );
// }

// export default App;
