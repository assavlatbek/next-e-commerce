"use client";

import React, { useState } from "react";
import useAuth from "@/store/auth";
import Link from "next/link";
import request from "@/server";
import { toast } from "react-toastify";

const FormLogin = () => {
  const { setIsAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const userData = {
        username: e.currentTarget.username.value,
        password: e.currentTarget.password.value,
      };
      const {
        data: { accesstoken, user },
      } = await request.post(`auth/login`, userData);
      console.log(user);
      toast.success("You logined Successfuly");
      setIsAuthenticated(user);
      window?.localStorage?.setItem("user", JSON.stringify(user));
      window?.localStorage?.setItem("token", accesstoken);

      setTimeout(() => {
        if (user.role) {
          window.location.href = "/admin";
          window?.localStorage?.setItem("role", "admin");
        } else {
          window.location.href = "/";
          window?.localStorage?.setItem("role", "user");
        }
      }, 300);
    } catch (err) {
      toast.error("Username or Password incorrect!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={login} className="auth-form">
        <input
          className="auth-input"
          type="text"
          id="username"
          placeholder="Enter Your username"
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
          <button type="submit" className="auth-button">
            Login
          </button>
        </center>
      </form>
    </div>
  );
};

export default FormLogin;
