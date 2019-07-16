import React from 'react';
import styles from './index.css';

export default class Table extends React.Component {
  render() {
    return (
      <div className={styles.table}>
        <div className={styles.table_search}>
          <div className={`${styles.table_search__input} uk-inline`}>
            <span className="uk-form-icon" uk-icon="icon: search" />
            <input className="uk-input" placeholder="Search..." />
          </div>
        </div>

        <div className={`${styles.table_table} uk-overflow-auto`}>
          <table className="uk-table uk-table-justify uk-table-divider">
            <thead>
              <tr>
                <th className="uk-width-small">No.Pendaftaran</th>
                <th>Tanggal</th>
                <th>NRM</th>
                <th>Nama</th>
                <th>L/P</th>
                <th>Usia</th>
                <th>Pembiayaan</th>
                <th>Status</th>
                <th>Selesai</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="20" style={{ textAlign: 'center' }}>
                  No data to display
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
