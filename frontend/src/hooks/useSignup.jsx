import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    gender,
    password,
    confirmPassword,
  }) => {
    const isValid = validateFields(
      fullName,
      username,
      gender,
      password,
      confirmPassword
    );
    if (!isValid) return;
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.log("oops some error occured", error);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, signup };
};

const validateFields = (
  fullName,
  username,
  gender,
  password,
  confirmPassword
) => {
  if (!fullName || !username || !gender || !password || !confirmPassword) {
    console.log("Please fill all details");
    return false;
  }

  if (password != confirmPassword) {
    console.log("Passwords donot match");
    return false;
  }

  if (password.length < 6) {
    console.log("Password must be at least 6 characters");
    return false;
  }

  return true;
};
export default useSignup;
