import React from 'react';
import styles from './index.css';

export default class Toolbar extends React.Component {
  render() {
    return (
      <div className={styles.toolbar}>
        <div className={styles.toolbar_left}>
          <h3 className={styles.toolbar_left__title}>Data Pendaftaran</h3>
          <p className={styles.toolbar_left__subtitle}>Information</p>
        </div>
        <div className={styles.toolbar_right}>
          <button
            type="button"
            className={`${
              styles.toolbar_right__button
            } uk-button uk-button-primary`}
          >
            Pendaftaran
          </button>
        </div>
      </div>
    );
  }
}
