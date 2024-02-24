import { Routes, Route, BrowserRouter } from "react-router-dom";
import Logo from "./components/Logo";
import Users from "./Routes/Users";
import UserInfo from "./Routes/UserInfo";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";

import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import appStore from "./components/store";
import Heading from "./components/UserDetails/Heading";
import MainPage from "./components/UserDetails/MainPage";
import HomePage from "./components/Authentication/HomePage";

const App = () => {
  return (
    <Provider store={appStore}>
     
      <BrowserRouter>
        <Logo/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<Users />} />
           <Route path="/users/:username"  element={<UserInfo/>} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
