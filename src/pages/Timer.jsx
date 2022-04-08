import { Component } from 'react'
import { FaPause, FaPlay, FaRedoAlt } from 'react-icons/fa';
import '../styles/timer.css';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      mm: '',
      ss: '',
      pause: false,
    }
  }

  componentDidMount() {
    const { mm, ss } = this.props;
    this.setState({
      mm,
      ss,
    });
    this.start();
  }

  start = () => {

    const myInterval = setInterval(() => {
      const { mm, ss, pause } = this.state;
      
      if (pause) {
        clearInterval(myInterval);
      }

      this.setState({
        mm: ss > 1 ? mm : mm - 1,
        ss: ss > 1 ? ss - 1 : 59,
        itsTime: true,
      }, () => {
        const { mm } = this.state;
        if (mm < 0) {
          clearInterval(myInterval);
          this.setState({
            mm: 0,
            ss: 0,
            itsTime: false,
          })
        }
      })
      }, 1000);
  }

  pause = () => {
    const { pause } = this.state;
    if (pause) {
      this.start();
    }
    this.setState({
      pause: !pause,
    })
  }

  render() {
    const { mm, ss, pause } = this.state;
    const { funcReset } = this.props;
    return (
      <div className="timer">
        <div>
          <p> { mm < 10 ? `0${mm}`: mm } : { ss < 10 ? `0${ss}`: ss } </p>
        </div>
        <div className="btn-pause-resume">
          <button onClick={ () => this.pause() } className="btn">
            {
              pause ? <FaPlay /> : <FaPause />
            }
          </button>
          <button onClick={ () => funcReset() } className="btn">
            <FaRedoAlt />
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
