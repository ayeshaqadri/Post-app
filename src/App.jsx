import "./firebaseConfig";
import Signup from "./Components/SignupPage"; // ✅ Check this filename
import LoginPage from './Components/LoginPage'

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-950 text-white hover:bg-gray-900">
        <h1 className="text-4xl font-bold  hover:bg-gray-950 hover:text-gray-500">ecommerce website</h1>
      </div>
      <Signup />
      <LoginPage />
    </>
  );
}

export default App;
