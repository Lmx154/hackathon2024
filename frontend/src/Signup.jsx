import React from 'react';
import styles from './Signup.module.css';

const Signup = ({ onAddUser, onInputChange, newUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser();  // Call the function to add the user
    const navigate = useNavigate();
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    onInputChange({ target: { name, value: checked } });
  };

  return (
    <>
      <body className={styles.bodysignup}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <a href="/">Home</a>
            <a href="/login" className={styles.loginbubble}>Login</a>
          </nav>
        </header>

        <div className={styles.wrapper}>
          <form onSubmit={handleSubmit}>
            <h1>SignUp</h1>

            <div className={styles.inputbox}>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={newUser.first_name}
                onChange={onInputChange}
                required
              />
              <label>First Name</label>
            </div>

            <div className={styles.inputbox}>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={newUser.last_name}
                onChange={onInputChange}
                required
              />
              <label>Last Name</label>
            </div>

            <div className={styles.inputbox}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={newUser.email}
                onChange={onInputChange}
                required
              />
              <label>Email</label>
            </div>

            <div className={styles.inputbox}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={newUser.username}
                onChange={onInputChange}
                required
              />
              <label>Username</label>
            </div>

            <div className={styles.inputbox}>
                    <input 
                    type="password"
                    name="password"
                    placeholder='Password' 
                    required 
                  />
                  <label>Password</label>
              </div>

                <div className={styles.rememberforgot}>
                  <label>
                    <input
                    type="checkbox"
                    name="is_veteran"
                    checked={newUser.is_veteran || false}
                    onChange={handleCheckboxChange}
                    />
                    Is Veteran
                  </label>
                </div>

                <div className={styles.rememberforgot}>
                  <label>
                    <input
                    type="checkbox"
                    name="is_disabled"
                    checked={newUser.is_disabled || false}
                    onChange={handleCheckboxChange}
                    />
                    Is Disabled
                  </label>
                </div>

            <button type="submit">Sign Up</button>

            <div className={styles.registerlink}>
                    <p>Have an account? <a href="/login">Login</a></p>
                </div>
          </form>
        </div>
      </body>
    </>
  );
};

export default Signup;
