"use client";

import "./account.css";

import { logout } from "@/utils";
import React from "react";

const page = () => {
  return (
    <div>
      <br />
      <center>
        <h1>Account Page</h1>
      </center>

      <br />
      <center>
        <button className="logout-button" onClick={logout}>
          logout
        </button>
      </center>
      <br />
    </div>
  );
};

export default page;
