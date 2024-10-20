//import './Home.css'
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';


function Home(){
    const navigate = useNavigate();
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
        <body className={styles.bodyhome}>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <a href="/" className={styles.active}>Home</a>
                    <a href=" " onClick={() => navigate('/Login')}>About</a>
                    <a href="#">Contact Us</a>
                </nav>
                <div className={styles.navrightsection}>
                    <div className={styles.searchcontainer}>
                        <input type="search" className = {styles.search} placeholder='Search..' />
                        <button className={styles.searchbtn}><i className={styles.fasearch}></i></button>
                    </div>
                    <div><button type='button' className={styles.loginbubble} onClick={() => navigate('/Login')}>Log In</button></div>
                    <div><button type='button' className={styles.loginbubble} onClick={() => navigate('/Signup')}>Sign Up</button></div>
                </div>
            </header>
        
            <section className={styles.home}>
                <div className={styles.homecontent}>
                    <h1>Hello and Welcome</h1>
                    <h3>he</h3>
                    <p> hi</p>
                </div>
            </section>

        </body>
        </>
    );
}

export default Home