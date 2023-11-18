"use client";
import request from "@/server";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Usertype from "@/types/user";
import InputMask from "react-input-mask";
import useAuth from "@/store/auth";
import { logout } from "@/utils";

const AccountForm = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<Usertype | null>(null);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        setLoading(true);
        const { data } = await request.get("auth/me");
        setUserInfo(data);
        setFormValues({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          username: data.username || "",
          phoneNumber: data.phoneNumber || "",
        });
      } finally {
        setLoading(false);
      }
    };
    getUserInfo();
  }, [setUserInfo]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      const data = new FormData(event.currentTarget);
      const userData = {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        username: data.get("username"),
        phoneNumber: data.get("phoneNumber"),
      };

      await request.put("auth/update", userData);
      toast.success("Your information is saved successfully!");
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-wrap">
      <div className="form-container" style={{ marginTop: "30px" }}>
        <div>
          <form onSubmit={handleSubmit} className="auth-form">
            <input
              className="auth-input"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={(e) =>
                setFormValues({ ...formValues, firstName: e.target.value })
              }
            />
            <div className="sps"></div>
            <input
              className="auth-input"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={(e) =>
                setFormValues({ ...formValues, lastName: e.target.value })
              }
            />
            <div className="sps"></div>

            <input
              className="auth-input"
              type="text"
              name="username"
              id="username"
              placeholder="username"
              value={formValues.username}
              onChange={(e) =>
                setFormValues({ ...formValues, username: e.target.value })
              }
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
              value={formValues.phoneNumber}
              onChange={(e) =>
                setFormValues({ ...formValues, phoneNumber: e.target.value })
              }
            />
            <div className="sps"></div>

            <center className="space-center">
              <button className="auth-button" type="submit">
                change
              </button>
              <button className="logout-button" onClick={logout}>
                logout
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
