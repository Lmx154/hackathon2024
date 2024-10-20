import React from 'react';
import styles from './Form.module.css';

const Form = () => {
  return (
    <div className={styles.bodyform}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a href="/">Home</a>
        </nav>
      </header>

      <div className={styles.wrapper}>
        <form onSubmit="#">
          <h1 className={styles.formtitle}>Fill Sheet</h1>

          <div className={styles.inputbox}>
            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              required
            />
            <label>Occupation</label>
          </div>

          <div className={styles.inputbox}>
            <span className={styles.inputprefix}>$</span>
            <input
              type="number"
              name="annual_income"
              placeholder="Annual Income"
              required
            />
            <label>Annual Income</label>
          </div>

          <div className={styles.inputbox}>
            <span className={styles.inputprefix}>$</span>
            <input
              type="number"
              name="expenses"
              placeholder="Expenses"
              required
            />
            <label>Expenses</label>
          </div>

          <div className={styles.inputbox}>
            <span className={styles.inputprefix}>$</span>
            <input
              type="number"
              name="savings"
              placeholder="Savings"
              required
            />
            <label>Savings</label>
          </div>

          <div className={styles.inputbox}>
            <span className={styles.inputprefix}>$</span>
            <input
              type="number"
              name="debt"
              placeholder="Debt"
              required
            />
            <label>Debt</label>
          </div>

          <div className={styles.inputbox}>
            <span className={styles.inputprefix}>$</span>
            <input
              type="number"
              name="score"
              placeholder="Credit Score"
              required
            />
            <label>Credit Score</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
