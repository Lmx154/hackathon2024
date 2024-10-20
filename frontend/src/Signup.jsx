import React from 'react';
//import './Signup.css';
import styles from './Signup.module.css';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate();
  return (
    <>
    <body className={styles.bodysignup}>
        
        <header className={styles.header}>
                <nav className={styles.navbar}>
                    <a href="/" onClick={() => navigate('/')}>Home</a>
                    <a href="#" onClick={() => navigate('/login')}>About</a>
                    <a href="#">Contact Us</a>
                </nav>
                <div className={styles.navrightsection}>
                    <div className={styles.searchcontainer}>
                        <input type="search" className = {styles.search} placeholder='Search..' />
                        <button className="search-btn"><i className="fas fa-search"></i></button>
                    </div>
                    <div><button type='button' className={styles.loginbubble} onClick={() => navigate('/Login')}>Login</button></div>
                </div>
            </header>
        <div className={styles.wrapper}>
            <form action="">
                <h1>SignUp</h1>
                <div className={styles.inputbox}>
                    <input type="text" placeholder='First Name' required />
                </div>
                <div className={styles.inputbox}>
                    <input type="text" placeholder='Last Name' required />
                </div>
                <div className={styles.inputbox}>
                    <input type="text" placeholder='Username' required />
                </div>
                <div className={styles.inputbox}>
                    <input type="text" placeholder='Email' required />
                </div>
                <div className={styles.inputbox}>
                    <input type="password" placeholder='Password' required />
                </div>

                <div className={styles.rememberforgot}>
                    <label><input type="checkbox"/>Is Veteran</label>
                </div>
                <div className={styles.rememberforgot}>
                    <label><input type="checkbox"/>Is Disable</label>
                </div>

                <button type="submit">Submit</button>

                <div className={styles.registerlink}>
                    <p>Have an account? <a href="#" onClick={() => navigate('/Login')}>Login</a></p>
                </div>
            </form>
        </div>
        </body>
    </>
  );
};

export default Signup;