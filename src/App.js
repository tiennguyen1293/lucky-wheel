import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const AppWrapper = styled.div``;

const WheelWrapper = styled.div`
  position: relative;
  width: calc(325px + 16px);
  margin: 40px auto 0;
`;

const Wheel = styled.div`
  width: 325px;
  height: 325px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 8px solid #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px, rgba(0, 0, 0, 0.05) 0px 3px 0px;
  transform: rotate(0deg);

  :before {
    content: '';
    position: absolute;
    z-index: 1;
    width: calc(325px - 8px);
    height: calc(325px - 8px);
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }
`;

const InnerWheel = styled.div`
  width: 100%;
  height: 100%;
  transition: all 6s cubic-bezier(0, 0.99, 0.44, 0.99);
  transform: ${props =>
    props.totalDegree ? `rotate(${props.totalDegree}deg)` : 'none'};
`;

const Item = styled.div`
  position: absolute;
  left: 60px;
  top: -6px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 167px 100px 0;
  border-color: #19c transparent;
  transform-origin: 100px 167px;
  opacity: 1;

  :nth-child(1) {
    transform: rotate(60deg);
    border-color: #16a085 transparent;
  }

  :nth-child(2) {
    transform: rotate(120deg);
    border-color: #2980b9 transparent;
  }

  :nth-child(3) {
    transform: rotate(180deg);
    border-color: #34495e transparent;
  }

  :nth-child(4) {
    transform: rotate(240deg);
    border-color: #f39c12 transparent;
  }

  :nth-child(5) {
    transform: rotate(300deg);
    border-color: #d35400 transparent;
  }

  :nth-child(6) {
    transform: rotate(360deg);
    border-color: #c0392b transparent;
  }

  span {
    position: relative;
    z-index: 2;
    display: block;
    margin-top: -100px;
    margin-left: -35px;
    text-align: center;
    color: rgba(0, 0, 0, 0.2);
    text-shadow: rgba(255, 255, 255, 0.1) 0px -1px 0px,
      rgba(0, 0, 0, 0.2) 0px 1px 0px;
  }
`;

const Spin = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 68px;
  height: 68px;
  line-height: 55px;
  margin: -34px 0 0 -34px;
  border-radius: 50%;
  font-size: 16px;
  color: #ccc;
  text-align: center;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 0px;
  user-select: none;
  cursor: pointer;

  :before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 20px 28px 20px;
    border-color: transparent transparent #ffffff transparent;
    top: -12px;
    left: 14px;
  }

  :active {
    font-size: 15px;

    .inner-spin {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px inset;
    }
  }

  :focus {
    outline: 0;
  }
`;

const InnerSpin = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 54px;
  height: 54px;
  margin: -27px 0 0 -27px;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  box-shadow: rgba(255, 255, 255, 1) 0px -2px 0px inset,
    rgba(255, 255, 255, 1) 0px 2px 0px inset, rgba(0, 0, 0, 0.4) 0px 0px 5px;
`;

const Shine = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vw;
  top: 0;
  left: 0;
  opacity: 0.1;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.99) 1%,
    rgba(255, 255, 255, 0.91) 9%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const Text = styled.div``;

class App extends Component {
  state = {
    totalDegree: 0,
    spining: false,
  };

  handleSpin = () => {
    let newTotalDegree = 0;
    //set default degree (360*5)
    let degree = 1800;
    //number of clicks = 0
    let clicks = 0;
    //add 1 every click
    clicks++;
    /*multiply the degree by number of clicks
    generate random number between 1 - 360, 
    then add to the new degree*/
    let newDegree = degree * clicks;
    let extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
    newTotalDegree = newDegree + extraDegree;
    this.setState(prevState => ({
      totalDegree: newTotalDegree + prevState.totalDegree,
    }));
  };

  render() {
    const { totalDegree } = this.state;

    return (
      <AppWrapper>
        <WheelWrapper>
          <Wheel>
            <InnerWheel totalDegree={totalDegree}>
              <Item>
                <span>asdasda</span>
              </Item>
              <Item>
                <span>asdasda</span>
              </Item>
              <Item>
                <span>asdasda</span>
              </Item>
              <Item>
                <span>asdasda</span>
              </Item>
              <Item>
                <span>asdasda</span>
              </Item>
              <Item>
                <span>asdasda</span>
              </Item>
            </InnerWheel>

            <Spin onClick={this.handleSpin}>
              <InnerSpin>SPIN</InnerSpin>
            </Spin>

            <Shine />
          </Wheel>

          <Text />
        </WheelWrapper>
      </AppWrapper>
    );
  }
}

export default App;
