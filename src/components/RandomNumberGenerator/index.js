// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({
      count: prevState.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bgContainer">
        <div className="shortContainer">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <div>
            <button type="button" onClick={this.generateRandomNumber}>
              Generate
            </button>
          </div>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
