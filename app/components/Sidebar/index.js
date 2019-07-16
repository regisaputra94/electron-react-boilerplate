import React from 'react';
import styles from './index.css';
import Logo from '../../../assets/img/racing.png';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <img
          src={Logo}
          alt="img-login"
          width="50"
          className="uk-align-center"
        />

        <h3 className={`${styles.sidebar_title}`}>Dental Care</h3>

        <ul className={`${styles.sidebar_menu} uk-nav uk-nav-default`}>
          <li
            className={`${styles.sidebar_menu__item} ${
              styles.sidebar_menu__item_active
            }`}
          >
            <a href="#">
              <span className="uk-margin-small-right" uk-icon="icon: list" />
              Lihat Data
            </a>
          </li>

          <li className={`${styles.sidebar_menu__item}`}>
            <a href="#">
              <span
                className="uk-margin-small-right"
                uk-icon="icon: comments"
              />
              Entry Data
            </a>
          </li>

          <li className={`${styles.sidebar_menu__item}`}>
            <a href="#">
              <span className="uk-margin-small-right" uk-icon="icon: user" />
              Administrasi
            </a>
          </li>

          <li className={`${styles.sidebar_menu__item}`}>
            <a href="#">
              <span
                className="uk-margin-small-right"
                uk-icon="icon: settings"
              />
              Pengaturan
            </a>
          </li>

          <li className={`${styles.sidebar_menu__item}`}>
            <a href="#">
              <span
                className="uk-margin-small-right"
                uk-icon="icon: lifesaver"
              />
              Alat
            </a>
          </li>

          <li className={`${styles.sidebar_menu__item}`}>
            <a href="#">
              <span
                className="uk-margin-small-right"
                uk-icon="icon: commenting"
              />
              Bantuan
            </a>
          </li>
        </ul>

        <button
          type="button"
          className={`${
            styles.sidebar_button__logout
          } uk-button uk-button-danger`}
        >
          Logout
        </button>
      </div>
    );
  }
}
