import React  from 'react';
import Login from './components/Signin/Login';
import Register from './components/Signin/Register';
import Home from './Home/Home'
import './App.css';
import Forgot from './components/Signin/Forgot';
import Navigation from './Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import { Provider } from 'react-redux';
import Otpvery from './Component/Otpvery';
import Otpverypass from './Component/Otpverypass'
import MyProfile from './components/My_Profile/My_Profile';
import {store , persistor} from './Redux/Store';
import {PersistGate} from 'redux-persist/integration/react'
import MyPlan from './components/My_Plan/My_Plan';
import OtpNumber from './Component/OtpNumber';
import Checkout from './Home/checkout';
import Number from './Admin/adminLogin/Number';
import Otp from './Admin/adminLogin/Otp'
import Name from './Admin/adminLogin/Name'
import Email from './Admin/adminLogin/Email'
import Password from './Admin/adminLogin/Password';
import Admin from './Admin/Admin';
import MainAdmin from './Admin/MainAdmin';
import NewAdminOtp from './Admin/AddNewAdmin/NewAdminOtp';
import NewAdminAdded from './Admin/AddNewAdmin/NewAdminAdded';
import NewAdminAddress from './Admin/AddNewAdmin/NewAdminAddress';
import AdminAcessOtp from './Admin/AdminAccess/AdminAcessOtp';
import FndBySubDate from './Admin/Components/FndBySubDate';
import FndByNumber from './Admin/Components/FndByNumber';
import FndByExpDate from './Admin/Components/FndByExpDate';
import PlanActivation from './Admin/Components/PlanActivation';
import PlanDeactivation from './Admin/Components/PlanDeactivation';
import WhyWe from './components/WhyWe/WhyWe';
import OurServices from './components/WhyWe/OurServices'
function App() {

  
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <div className="App">
      
      
        <Navigation/>
        <Switch>
          <Route exact path='/Blooma/'>
            <Home/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/Blooma/Login'>
            <Login/>
          </Route>
          <Route path='/Blooma/Register'>
            <Register/>
          </Route>
          <Route path='/Blooma/Forgot'>
            <Forgot/>
          </Route>
          <Router path='/Blooma/OTP'>
            <Otpvery/>
          </Router>
         <Router path='/Blooma/otppass'>
            <Otpverypass/>
          </Router>
          <Router path="/Blooma/whywe">
            <WhyWe/>
          </Router>
          <Router path="/Blooma/ourservices">
            <OurServices/>
          </Router>
          <Router path='/Blooma/my_profile'>
            <MyProfile/>
          </Router>
          
          <Route path='/Blooma/My_Plan'>
            <MyPlan/>
          </Route>
          
          
          <Route path ='/Blooma/otpnumber'>
            <OtpNumber/>
          </Route>
          <Route path ='/Blooma/checkout'>
            <Checkout/>
          </Route>
          {/*Admin Routes are here */}
          <Route path="/Blooma/Admin_Sir_Blooma">
            <Admin/>
          </Route>
          <Route path="/Blooma/Main_Admin">
            <MainAdmin/>
          </Route>
          {/*admin path */}
          <Route path="/Blooma/prince">
            <Number/>
          </Route>
          <Route path="/Blooma/Check_Otp">
            <Otp/>
          </Route>
          <Route path="/Blooma/Check_Name">
            <Name/>
          </Route>
          <Route path="/Blooma/Check_Email">
            <Email/>
          </Route>
          <Route path="/Blooma/Check_Pass">
            <Password/>
          </Route>
          {/*Add New Admin Routes are here */}
          <Route path="/Blooma/AddNewAdminOtp">
            <NewAdminOtp/>
          </Route>
          <Route path="/Blooma/AddNewAdminData">
            <NewAdminAddress/>
          </Route>
          <Route path="/Blooma/AddNewAdminAdded">
            <NewAdminAdded/>
          </Route>
          {/*Add New Admin Routes are here */}
          <Route path="/Blooma/AdminAccessOtp">
            <AdminAcessOtp/>
          </Route>
          {/* Admin Routes are here */}
          <Route path="/Blooma/fndbysubdate">
            <FndBySubDate/>
          </Route>
          <Route path="/Blooma/fndbynumber">
            <FndByNumber/>
          </Route>
          <Route path="/Blooma/fndbyexpdate">
            <FndByExpDate/>
          </Route>
          <Route path="/Blooma/PlanActivation">
          <PlanActivation/>
          </Route>
          <Route path="/Blooma/PlanDeActivation">
          <PlanDeactivation/>
         </Route>
        </Switch>
      
      
    </div>
    </PersistGate>
    </Provider>
  );
}

export default withRouter(App);
