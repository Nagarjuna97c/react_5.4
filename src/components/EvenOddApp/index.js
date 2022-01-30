import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.round(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {count % 2 === 0 ? 'Even' : 'Odd'}</p>
          <button
            className="button"
            onClick={this.incrementCount}
            type="button"
          >
            Increment
          </button>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
