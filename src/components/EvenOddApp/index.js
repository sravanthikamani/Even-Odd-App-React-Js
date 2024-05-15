// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}
  getRandomNumber = () => Math.ceil(Math.random() * 100)
  onIncreement = () => {
    const ranNum = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + ranNum}))
  }
  render() {
    const {count} = this.state
    const evenOddText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="main-container">
        <h1>Count {count}</h1>
        <p>Count is {evenOddText}</p>
        <button className="button-style" onClick={this.onIncreement}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
