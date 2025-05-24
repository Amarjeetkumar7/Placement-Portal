import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();

    if (input.password !== input.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_END_POINT}/reset-password/${token}`,
        {
          password: input.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        toast.success("Password reset successfully! Please login.");
        setTimeout(() => {
          console.log("Redirect to login..");
          navigate("/login"); // Redirect to login after success
        }, 2000); // Redirect to login
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Reset Password</h1>
          <div className="my-2">
            <Label>New Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter new password"
            />
          </div>
          <div className="my-2">
            <Label>Confirm Password</Label>
            <Input
              type="password"
              value={input.confirmPassword}
              name="confirmPassword"
              onChange={changeEventHandler}
              placeholder="Confirm your password"
            />
          </div>
          {loading ? (
            <Button className="w-full my-4" disabled>
              Resetting...
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Reset Password
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
