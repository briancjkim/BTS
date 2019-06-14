import React, { Component } from 'react'
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

export class Pricing extends Component {
  state = {
    prices: [100, 150, 200],
    positions: ['Balcony', 'Medium', 'Star'],
    desc: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi iste explicabo ea soluta culpa. Cupiditate quos aperiam libero. Possimus soluta illo minima autem consequuntur. Quod maiores placeat est sed! Error!',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium culpa, quaerat expedita tempora quam amet, officia, consequatur eos temporibus quae repudiandae porro! Dolore necessitatibus accusantium deleniti consequatur, impedit nam esse!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex voluptas ratione blanditiis provident reprehenderit magnam, tenetur inventore fuga itaque libero qui id harum, perferendis quae debitis, numquam ipsum quasi?'
    ],
    linkTo: [
      'https://www.songkick.com/artists/135912-bts',
      'https://www.songkick.com/artists/135912-bts',
      'https://www.songkick.com/artists/135912-bts'
    ],
    delay: [500, 0, 500]
  }
  showBoxes = () => {
    return (
      this.state.prices.map((box, i) => (
        <Zoom delay={this.state.delay[i]} key={i}>
          <div className="pricing_item">
            <div className="pricing_inner_wrapper">
              <div className="pricing_title">
                <span>${this.state.prices[i]}</span>
                <span>{this.state.positions[i]}</span>
              </div>
              <div className="pricing_description">
                {this.state.desc[i]}
              </div>
              <div className="pricing_buttons">
                <MyButton text="Buy Ticket" link={this.state.linkTo[i]} bgColor="rgb(255, 168, 0)"></MyButton>
              </div>
            </div>
          </div>
        </Zoom>
      ))
    )
  }
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    )
  }
}

export default Pricing
