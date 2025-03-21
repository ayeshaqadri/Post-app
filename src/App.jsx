import "./firebaseConfig";
import Signup from "./Components/SignupPage"; // ✅ Check this filename
import LoginPage from './Components/LoginPage'
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link,Routes} from "react-router-dom";
function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-950 text-white hover:bg-gray-900">
        <h1 className="text-4xl font-bold  hover:bg-gray-950 hover:text-white-500">Authentication with firebase and css with tailwind💡💡💡</h1>
      </div>
      <Signup />
      <LoginPage />

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path="/about" element={<Singup/>}/>
            <About />
          </Route>
          <Route path="/users" element={<LoginPage/>}/>
        </Routes>
      </div>
    </Router>


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
    </>
  );
}

export default App; 