import React, { Component } from 'react';
import Logo from '../../../assets/img/racing.png';

type Props = {};

export default class Login extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="uk-flex" uk-grid="true">
        <div
          className="ui-flex uk-width-2-5@m uk-position-right uk-padding-large"
          style={{ backgroundColor: '#fff' }}
        >
          <div style={{ marginTop: '150px' }}>
            <img
              src={Logo}
              alt="img-login"
              width="100"
              className="uk-align-center"
            />
          </div>

          <form>
            <fieldset className="uk-fieldset">
              <legend className="uk-legend uk-text-center uk-text-bold">
                Login
              </legend>

              <div className="uk-margin">
                <input className="uk-input" type="email" placeholder="Email" />
              </div>

              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="uk-margin">
                <label htmlFor="save-credential" style={{ fontSize: '14px' }}>
                  <input
                    id="save-credential"
                    className="uk-checkbox"
                    type="checkbox"
                  />{' '}
                  Save credentials
                </label>
              </div>

              <div className="uk-margin">
                <button
                  type="button"
                  className="uk-button uk-button-primary uk-align-center"
                >
                  Login
                </button>
                <div className="uk-text-center">
                  <p
                    style={{ margin: 0, fontSize: '14px', marginBottom: '5px' }}
                  >
                    Forgot Password? <a href="#">Reset</a>
                  </p>
                  <p style={{ margin: 0, fontSize: '14px' }}>
                    Dont have account? <a href="#">Signup</a>
                  </p>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="ui-flex uk-width-3-5@m uk-position-left intro-login">
          {/* <h1>Hello World</h1> */}
        </div>
      </div>
    );
  }
}
