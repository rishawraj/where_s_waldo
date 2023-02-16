import React from "react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function SignUp() {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const confirmPasswordRef = React.useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const auth = useAuth();
  const signup = auth?.signup;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      alert("passwords do match");
      return;
    }

    if (!passwordRef.current?.value || !emailRef.current?.value) {
      return;
    }

    if (!signup) {
      return;
    }

    try {
      setLoading(true);
      await signup(emailRef.current?.value, passwordRef.current?.value);
      navigate("/login");
    } catch {
      alert("sign up failed");
    }

    setLoading(false);
  }

  return (
    <>
      <h1>Sign Up</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" ref={emailRef} required />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="passwrod"
            name="password"
            ref={passwordRef}
            required
          />
          <br />
          <label htmlFor="password">Confirm Password</label>
          <input
            type="text"
            id="confirmPasswrod"
            name="confirmPasswrod"
            ref={confirmPasswordRef}
            required
          />
          <br />
          <button disabled={loading} type="submit">
            Sign up
          </button>
        </form>

        <div>
          Already Have an Account <Link to="/login">Log In</Link>
        </div>
      </div>
    </>
  );
}
