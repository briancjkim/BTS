import React, { Component } from 'react';
import Slide from 'react-reveal/Fade';

export class TimeUntil extends Component {
  static defaultProps = {
    deadline: 'Dec, 31, 2019'
  }
  state = {
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  }
  componentDidMount() {
    this.timeInterval = setInterval(() => {
      this.getTimeUnitll(this.props.deadline)
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }
  getTimeUnitll = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date())
    if (time < 0) {
      console.log("Date passed")
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / 1000 / 60 / 60) % 24);
      const days = Math.floor((time / 1000 / 60 / 60 / 24));
      this.setState({
        seconds, minutes, hours, days
      })
    }

  }
  render() {
    const { seconds, minutes, hours, days } = this.state;
    return (
      <Slide left delay={1000} >
        <div className="countdown_wrapper">
          <div className="countdown_top">
            Event Starts In
        </div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">
                {days}
              </div>
              <div className="countdown_tag">
                days
              </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">
                {hours}
              </div>
              <div className="countdown_tag">
                Hs
             </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">
                {minutes}
              </div>
              <div className="countdown_tag">
                Min
             </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">
                {seconds}
              </div>
              <div className="countdown_tag">
                sec
             </div>
            </div>
          </div>
        </div>
      </Slide>
    )
  }
}

export default TimeUntil
