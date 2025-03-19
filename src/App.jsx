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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
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
