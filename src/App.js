import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import CustomerReview from './components/SplashBoard/CustomerReview/CustomerReview';
import CustomerBook from './components/SplashBoard/CustomerBook/CustomerBook';
import Book from './components/Book/Book/Book';
import NoMatch from './components/NoMatch/NoMatch/NoMatch';
import Login from './components/Login/Login/Login';
import SplashBoard from './components/SplashBoard/SplashBoard/SplashBoard';
import AddService from './components/Admin/AddService/AddService';
import AddRecentWedding from './components/Admin/AddRecentWedding/AddRecentWedding';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AllOrderList from './components/SplashBoard/AllOrderList/AllOrderList';
import AllServiceList from './components/SplashBoard/AllServiceList/AllServiceList';
import Admin from './components/Admin/Admin/Admin';
import OrderDataTable from './components/SplashBoard/OrderDataTable/OrderDataTable';
import AllBookings from './components/AllBookings/AllBookings';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/getBook">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/getBook/:id">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/overview">
            <SplashBoard></SplashBoard>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/books">
            <AllBookings/>
          </PrivateRoute>
          <PrivateRoute path="/book">
            <CustomerBook></CustomerBook>
          </PrivateRoute>
          <Route path="/book/:id">
            <CustomerBook></CustomerBook>
          </Route>
          <PrivateRoute path="/review">
            <CustomerReview></CustomerReview>
          </PrivateRoute>
          <PrivateRoute path="/addRecentWedding">
            <AddRecentWedding></AddRecentWedding>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <AllOrderList />
          </PrivateRoute>
          <PrivateRoute path="/serviceList">
            <AllServiceList />
          </PrivateRoute>
          <PrivateRoute path="/service">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <OrderDataTable />
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
