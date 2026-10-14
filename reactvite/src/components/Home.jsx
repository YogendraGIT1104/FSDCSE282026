import React from "react";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Login</Link>
          </li>
          {/* <li><Link to='/log'>Login</Link></li>
            <li><Link to='/login'>Login</Link></li> */}
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}

export default Home;
