import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import ReactUseEffect from "./components/ReactUseEffect";
import { BrowserRouter, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";

function App() {
  // <StateHandling />;
  // return<ReactUseEffect/>;
  // return <Product/>

  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="/login" element={<login></login>}></Route>
          <Route
            path="/registration"
            element={<Registration></Registration>}
          ></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
