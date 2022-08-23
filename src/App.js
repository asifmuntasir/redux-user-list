import React from "react";
import User from './Component/User';
import {
  BrowserRouter as Broter,
  Routes,
  Route
} from "react-router-dom";
import UserDetails from "./Component/UserDetails";

function App() {
  return (
    <>
      <h1>Hello Users</h1>
      <Broter>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/usreDetails/:id' element={<UserDetails />} />
        </Routes>
      </Broter>
    </>
  );
}

export default App;