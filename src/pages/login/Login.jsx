import styles from "./Login.module.css";

export default function Login() {
  return (
    <form className={styles["login-form"]}>
      <h2>Log in</h2>
      <label>
        <span>Email:</span>
        <input type="email" />
      </label>

      <label>
        <span>Password:</span>
        <input type="password" />
      </label>

      <button className="btn">Log In</button>
    </form>
  );
}
