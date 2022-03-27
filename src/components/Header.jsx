import { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
  render() {
    return(
      <header>
        <h1>
          Cronos
        </h1>
        <nav>
          <ul>
            <li>Stopwatch</li>
            <li>Cronometer</li>
            <li>Pomodoro</li>
            <li>Word Time</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
