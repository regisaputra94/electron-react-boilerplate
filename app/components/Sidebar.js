/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/label-has-for */
// @flow
import React, { Component } from 'react';
import Logo from '../../assets/img/racing.png';
import styles from './Sidebar.css';

type Props = {};

export default class Sidebar extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="uk-flex">
        <div
          className="ui-flex uk-width-1-5@m uk-position-left"
          style={{ backgroundColor: '#dff9fb' }}
        >
          <div style={{ marginTop: '15px' }}>
            <img
              src={Logo}
              alt="img-login"
              width="50"
              className="uk-align-center"
            />
          </div>

          <div className="uk-width-1-1@s">
            <ul className="uk-nav uk-nav-default" style={{ padding: '0 20px' }}>
              <li className={`${styles.menu} ${styles.active}`}>
                <a href="#">
                  <span
                    className="uk-margin-small-right"
                    uk-icon="icon: table"
                  />{' '}
                  Lihat Data
                </a>
              </li>
              <li className={`${styles.menu}`}>
                <a href="#">
                  <span
                    className="uk-margin-small-right"
                    uk-icon="icon: table"
                  />{' '}
                  Entry Data
                </a>
              </li>
              <li className={`${styles.menu}`}>
                <a href="#">
                  <span
                    className="uk-margin-small-right"
                    uk-icon="icon: table"
                  />{' '}
                  Administrasi
                </a>
              </li>
              <li className={`${styles.menu}`}>
                <a href="#">
                  <span
                    className="uk-margin-small-right"
                    uk-icon="icon: table"
                  />{' '}
                  Pengaturan
                </a>
              </li>
              <li className={`${styles.menu}`}>
                <a href="#">
                  <span
                    className="uk-margin-small-right"
                    uk-icon="icon: table"
                  />{' '}
                  Alat
                </a>
              </li>
              <li className={`${styles.menu}`}>
                <a href="#">
                  <span
                    className="uk-margin-small-right"
                    uk-icon="icon: table"
                  />{' '}
                  Bantuan
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="ui-flex uk-width-4-5@m uk-position-right uk-padding-large"
          style={{ backgroundColor: '#fff' }}
        >
          <div className="uk-heading-divider uk-flex uk-flex-between@m">
            <div style={{ float: 'left' }}>
              <p>Data Pendaftaran</p>
              <p>Information</p>
            </div>
            <div style={{ float: 'right' }}>
              <button type="button">Pendaftaran</button>
            </div>
          </div>

          <div className="uk-overflow-auto">
            <table className="uk-table uk-table-justify uk-table-hover uk-table-divider">
              <thead>
                <tr>
                  <th className="uk-width-small">Table Heading</th>
                  <th>Table Heading</th>
                  <th>Table Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Table Data</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </td>
                  <td>
                    <button
                      className="uk-button uk-button-default"
                      type="button"
                    >
                      Button
                    </button>
                    <div uk-dropdown>
                      <ul className="uk-nav uk-dropdown-nav">
                        <li className="uk-active">
                          <a href="#">Active</a>
                        </li>
                        <li>
                          <a href="#">Item</a>
                        </li>
                        <li className="uk-nav-header">Header</li>
                        <li>
                          <a href="#">Item</a>
                        </li>
                        <li>
                          <a href="#">Item</a>
                        </li>
                        <li className="uk-nav-divider" />
                        <li>
                          <a href="#">Item</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Table Data</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </td>
                  <td>
                    <button
                      className="uk-button uk-button-default"
                      type="button"
                    >
                      Button
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
