import "./firebaseConfig";
import Signup from "./Components/SignupPage"; // ✅ Check this filename
import LoginPage from './Components/LoginPage'

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Hello, Tailwind in React! 🚀</h1>
      </div>
      <Signup />
      <LoginPage />
    </>
  );
}

export default App;
