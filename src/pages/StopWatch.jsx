import { Component } from "react";
import '../styles/stopwatch.css';
import Timer from "./Timer";

class StopWatch extends Component {
  constructor() {
    super();

    this.state = {
      mm: '',
      ss: '',
      itsTime: false,
    }
  }

  handleMM = ({ target }) => {
    this.setState({
      mm: target.value,
    })
  }

  handleSS = ({ target }) => {
    this.setState({
      ss: target.value,
    })
  }

  start = () => {

    const myInterval = setInterval(() => {
      const { mm, ss } = this.state;
      this.setState({
        mm: ss > 1 ? mm : mm - 1,
        ss: ss > 1 ? ss - 1 : 59,
        itsTime: true,
      }, () => {
        const { mm } = this.state;
        if (mm < 0) {
          clearInterval(myInterval);
          this.setState({
            mm: '',
            ss: '',
            itsTime: false,
          })
        }
      })
      }, 1000);
  }

  form = () => {
    const { mm, ss } = this.state
    return (
      <div className="stopwatch-content">
        <div>
          <input onChange={(e) => this.handleMM(e)} value={mm} type="number" placeholder="MM" />
          {' '}
          :
          {' '}
          <input onChange={(e) => this.handleSS(e)} value={ss} type="number" placeholder="SS" />
        </div>
        <button
          className="btn"
          onClick={() => this.start()}
          disabled={ mm === '' && ss === ''}
        >
          Iniciar
        </button>
        
      </div>
    );
  }

  render() {
    const { mm, ss, itsTime } = this.state;
    return(
      <section className="sect-stopwatch">
        <div className="outside">
          <div className="inside">
            {/* <Form mm={ mm } ss={ ss } /> */}
            {
              itsTime ? <Timer mm={ mm } ss={ ss } />
                : this.form()
            }
          </div>
        </div>
      </section>
    )
  }
}

export default StopWatch;