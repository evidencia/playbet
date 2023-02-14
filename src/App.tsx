import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from 'react-modal';

import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { User } from "./pages/User";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Bets } from "./pages/Bets";
import { Deposit } from "./pages/Deposit";
import { Profile } from "./pages/Profile";

Modal.setAppElement('#root');

export function App() {
  return (
    <>
      <GlobalStyle />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/recover" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/home" element={<User />} />
          <Route path="/bets" element={<Bets />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/deposit" element={<Deposit />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
