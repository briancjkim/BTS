import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';
export class Discount extends Component {
  static defaultProps = {
    discountEnd: 30
  }
  state = {
    discount: 0
  }
  increasePercentage = () => {
    const { discount } = this.state;
    // state를 update해서 re-render시킨다
    if (discount < this.props.discountEnd) {
      this.setState({ discount: discount + 1 });
    }
  }
  // re-render하고나서 다시 발동하는함수
  componentDidUpdate() {
    // 다시 percentage올리기 근데 setTimeOut안하면 너무빨리처리되서 눈에안보임
    setTimeout(this.increasePercentage, 45)
  }
  // Fade에 onReveal은 reveal이끝낫을때 실행되는함수다.
  render() {
    const { discount } = this.state;
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={this.increasePercentage}>
            <div className="discount_percentage">
              <span>{discount}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right >
            <div className="discount_description">
              <h3>Purchase tickets before 31th November</h3>
              <p>Don't miss out the fantastic performance from the K-pop boy band. Be the first to know when they tour near you. 346,211 fans get concert alerts for this artist.</p>
              <MyButton text="Buy Ticket" bgColor="#ffa800" color="white" link="https://www.songkick.com/artists/135912-bts"></MyButton>
            </div>
          </Slide>

        </div>
      </div>
    )
  }
}

export default Discount
