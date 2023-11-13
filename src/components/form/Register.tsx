"use client";

import request from "@/server";
import useAuth from "@/store/auth";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";

const FormRegister = () => {
  const { setIsAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const userData = {
        firstName: e.currentTarget.firstName.value,
        lastName: e.currentTarget.lastName.value,
        phoneNumber: e.currentTarget.phoneNumber.value,
        username: e.currentTarget.username.value,
        password: e.currentTarget.password.value,
      };
      const {
        data: { accesstoken, user },
      } = await request.post(`auth/register`, userData);
      console.log(user);
      toast.success("You Registered Successfuly");
      setIsAuthenticated(user);
      window?.localStorage?.setItem("user", JSON.stringify(user));
      window?.localStorage?.setItem("token", accesstoken);

      setTimeout(() => {
        window.location.href = "/";
      }, 300);
    } catch (err) {
      toast.error("User Alredy exits!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={register} className="auth-form">
      <input
        className="auth-input"
        type="text"
        id="firstName"
        placeholder="Enter Your First Name"
      />
      <div className="sps"></div>

      <input
        className="auth-input"
        type="text"
        id="lastName"
        placeholder="Enter Your Last Name"
      />
      <div className="sps"></div>

      <input
        className="auth-input"
        type="text"
        id="username"
        placeholder="Enter Your username"
      />
      <div className="sps"></div>

      <InputMask
        mask="+\9\98 (99) 999 99 99"
        maskChar=""
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        className="auth-input"
        placeholder="Enter Your Phone Number"
      />
      <div className="sps"></div>

      <input
        className="auth-input"
        type="password"
        id="password"
        placeholder="Enter Your Password"
      />
      <div className="sps"></div>
      <div className="auth-signs">
        <p>I remember you!</p>
      </div>
      <div className="sps"></div>
      <center>
        <button className="auth-button">Register</button>
      </center>
    </form>
  );
};

export default FormRegister;
