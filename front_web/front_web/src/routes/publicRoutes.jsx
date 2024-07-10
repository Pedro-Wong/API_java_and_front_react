import { Routes, Route } from "react-router-dom";
import { Login } from "../components/login";
import { SignUp } from "../components/signUp";

export default function PublicRoutesNavigation() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
}
