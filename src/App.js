import './App.css';
import {Route, Routes} from 'react-router-dom';
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
