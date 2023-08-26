
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./screen_display/Home";
import Login from "./screen_display/Login";
import "./App.css"
/*
  Now lets use the React router dom to navigate between the pages or components. for that fist install the 
  package npm i react-router-dom. and then import the components of the react-router-dom package. 
*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./screen_display/Signup";
import { CartProvider } from "./components/ContextReducer";


function App() {
  return (
    // here i have wraped the routers inside the cartprovider context so that it can be asseces throughout the code
    // by or in any component.
    <CartProvider>
      <Router>
        <div>
          <Routes>
            < Route exact path="/" element={<Home />} />
            < Route exact path="/login" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>

  );
}

export default App;
