import { Routes, Route } from "react-router-dom";
import { MainPrincipal } from "../components/mainPrincipal";
import { Login } from "../components/login";
import { SignUp } from "../components/signUp";
import HeaderCabecalho from "../components/header";
import FooterRodape from "../components/footer";
import ModalAddSkill from "../components/modal";

export default function PrivateRoutesNavigation() {
  return (
    <>
      <HeaderCabecalho />
      <Routes>
        <Route path="/" element={<MainPrincipal />} />
        <Route path="/modal" element={<ModalAddSkill />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <FooterRodape />
    </>
  );
}
