import './App.css';
import {Route, Routes} from 'react-router-dom';
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import MainPage from "./components/pages/MainPage";
import MyPage from "./components/pages/MyPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
          <Route path="/mypage" element={<MyPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
