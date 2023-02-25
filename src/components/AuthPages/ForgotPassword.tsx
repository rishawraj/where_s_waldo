import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./Forgot.module.css";

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
    <div
      className={styles.container}
      // className={sty}
      // style={{
      //   backgroundColor: "whitesmoke",
      //   flex: "1",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignContent: "center",
      // }}
    >
      <div className={styles.forgotContainer}>
        <h1>Forgot Password</h1>
        {message && <div>{message}</div>}
        {message && (
          <div>
            go back to <Link to="/">Home</Link>.
          </div>
        )}
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" ref={emailRef} />
          <button disabled={loading} type="submit">
            Reset Password
          </button>
        </form>
        <div>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
