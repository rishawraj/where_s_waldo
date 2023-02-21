import React, { FormEvent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const prevLocation = localStorage.getItem("prevLocation");

  const login = useAuth()?.login;

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!emailRef.current?.value || !passwordRef.current?.value) {
      return;
    }

    try {
      setError("");
      setLoading(true);
      await login?.(emailRef.current.value, passwordRef.current.value);
      // navigate("/");
      navigate(prevLocation || "/");
    } catch {
      setError("Failed to log in: ");
      alert("failed to login!");
    }

    setLoading(false);
  }

  return (
    <>
      <h1>Log In</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" ref={emailRef} />
          <br />
          <label htmlFor="password">Password</label>
          <input type="text" id="passwrod" name="password" ref={passwordRef} />
          <br />
          <button disabled={loading} type="submit">
            Log In
          </button>
        </form>
        <div>
          <Link to="/forgot-password">forgot password</Link>
        </div>
        <div>
          Dont' Have an Account <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
}
