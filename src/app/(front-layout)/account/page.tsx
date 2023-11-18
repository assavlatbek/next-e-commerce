import React from "react";
import AccountForm from "@/components/form/Account";
import { Metadata } from "next";

import "../auth/index.css";

export const metadata: Metadata = {
  title: "E-commerce | Account",
  description: "E-commerce by Savlatbek",
};

const AccountPage = () => {
  return (
    <section className="auth-section">
      <div className="auth-container">
        <h1 className="auth-name">Account</h1>
        <hr />
        <AccountForm />
      </div>
    </section>
  );
};

export default AccountPage;
