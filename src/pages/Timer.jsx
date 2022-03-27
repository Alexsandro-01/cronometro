import { Component } from 'react'
import '../styles/timer.css';

class Timer extends Component {
  render() {
    const { mm, ss } = this.props
    return (
      <div className="stopwatch-content">
        <div>
          <p> { mm < 10 ? `0${mm}`: mm } : { ss < 10 ? `0${ss}`: ss } </p>
        </div>
      </div>
    );
  }
}

export default Timer;
