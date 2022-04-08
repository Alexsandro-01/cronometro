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

  handleItsTime = () => {
    this.setState({
      itsTime: true,
    })
  }

  reset = () => {
    this.setState({
      mm: '',
      ss: '',
      itsTime: false,
    })
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
          onClick={() => this.handleItsTime()}
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
              itsTime ? <Timer mm={ mm } ss={ ss } funcReset={ this.reset }/>
                : this.form()
            }
          </div>
        </div>
      </section>
    )
  }
}

export default StopWatch;
