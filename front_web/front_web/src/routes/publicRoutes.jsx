import { Routes, Route } from "react-router-dom";
import { Login } from "../components/login";
import { SignUp } from "../components/signUp";
import  NewLogin  from "../components/singUP/signUp2";

export default function PublicRoutesNavigation() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/newLogin" element={<NewLogin/>}/>
    </Routes>
  );
}
