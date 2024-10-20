import React from 'react';
import styles from './Signup.module.css';

const Signup = ({ onAddUser, onInputChange, newUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser();  // Call the function to add the user
  };

  return (
    <>
      <body className={styles.bodysignup}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <a href="/">Home</a>
            <a href="/login">Login</a>
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
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </body>
    </>
  );
};

export default Signup;
