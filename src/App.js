import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Communities from './Communities.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <div className="App">
            <h1 className="header">Calgary Communities</h1>
            <Communities />
          </div>
        </main>

        <footer>
          <section class='contact'>
            <a href="tel:403XXXXXXX">
              <div class="contact_info">
                <h5>Phone: (403)XXX-XXXX</h5>
              </div>
            </a>
            <a href="mailto:XXXXXX@yahoo.com">
              <div class="contact_info">
                <h5>Email: XXXXXX@yahoo.com</h5>
              </div>
            </a>
            <div class="contact_info">
              <h5>Address: Calgary Alberta Canada</h5>
            </div>
          </section>
        </footer>
      </div>

    );
  }
}
export default App;
