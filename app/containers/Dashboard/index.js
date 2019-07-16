import React, { Component } from 'react';
import Table from '../../components/Table/index';
import Sidebar from '../../components/Sidebar/index';
import Toolbar from '../../components/Toolbar/index';

type Props = {};
export default class Dashboard extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="uk-flex">
        <div
          className="ui-flex uk-width-1-5@m uk-position-left"
          style={{ backgroundColor: '#ecf0f1' }}
        >
          <Sidebar />
        </div>

        <div
          className="ui-flex uk-width-4-5@m uk-position-right uk-padding-large"
          style={{ backgroundColor: '#fff' }}
        >
          <Toolbar />
          <Table />
        </div>
      </div>
    );
  }
}
