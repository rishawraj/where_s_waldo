import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const emailRef = React.useRef<HTMLInputElement>(null);

  const auth = useAuth();
  const resetPassword = auth?.resetPassword;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!emailRef.current?.value) return;
    if (!resetPassword) return;

    try {
      setLoading(true);
      await resetPassword(emailRef.current?.value);
      setMessage("check your inbox for further info!");
    } catch {
      alert("password reset failed!");
    }

    setLoading(false);
  }

  return (
    <>
      <h1>Forgot Password</h1>
      {message && <div>{message}</div>}
      {message && (
        <div>
          go back to <Link to="/">Home</Link>.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" ref={emailRef} />
        <br />
        <button disabled={loading} type="submit">
          Reset Password
        </button>
      </form>
      <hr />
      <div>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
