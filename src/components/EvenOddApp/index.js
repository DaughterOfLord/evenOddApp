/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  render() {
    return (
      <div className="container">
        <div className="main-container">
          <h1 className="heading">Count 0</h1>
          <p className="description">Count is Event</p>
          <button className="button">Increment</button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
