import FormLogin from "@/components/form/Login";
import "../index.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce | Login",
  description: "E-commerce by Savlatbek",
};

const Login = () => {
  return (
    <section className="auth-section">
      <div className="auth-container">
        <h1 className="auth-name">Login</h1>
        <hr />
        <FormLogin />
      </div>
    </section>
  );
};

export default Login;
