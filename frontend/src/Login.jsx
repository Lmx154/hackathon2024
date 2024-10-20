import React from 'react';
//import './Login.css';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';


const Login = () => {
    const navigate = useNavigate();
  return (
    <>
    <body className={styles.bodylogin}>
        
        <header className={styles.header}>
                <nav className={styles.navbar}>
                    <a href="/" onClick={() => navigate('/')}>Home</a>
                    <a href="#" onClick={() => navigate('/login')}>About</a>
                    <a href="#">Contact Us</a>
                </nav>
                <div className={styles.navrightsection}>
                    <div className={styles.searchcontainer}>
                        <input type="search" className = {styles.search} placeholder='Search..' />
                        <button className={styles.searchbtn}><i className={styles.fasearch}></i></button>
                    </div>
                    <div><button type='button' className={styles.loginbubble} onClick={() => navigate('/Signup')}>Sign Up</button></div>
                </div>
            </header>
        <div className={styles.wrapper}>
            <form action="">
                <h1>Login</h1>
                <div className={styles.inputbox}>
                    <input type="text" placeholder='Username' required />
                </div>
                <div className={styles.inputbox}>
                    <input type="password" placeholder='Password' required />
                </div>

                <div className={styles.rememberforgot}>
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password</a>
                </div>

                <button type="submit">Login</button>

                <div className={styles.registerlink}>
                    <p>Don't have an account? <a href="#" onClick={() => navigate('/Signup')}>Register</a></p>
                </div>
            </form>
        </div>
    </body>
    </>
  );
};

export default Login;