import Link from "next/link";
import "../index.css";

import { Metadata } from "next";
import FormRegister from "@/components/form/Register";

export const metadata: Metadata = {
  title: "E-commerce | Register",
  description: "E-commerce by Savlatbek",
};

const Register = () => {
  return (
    <section className="auth-section">
      <div className="auth-container">
        <h1 className="auth-name">Register</h1>
        <hr />
        <FormRegister />
      </div>
    </section>
  );
};

export default Register;
