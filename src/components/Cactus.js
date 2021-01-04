import React from "react";
import "./style/cactus.css";

class Cactus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      x: 0,
      cactus: {},
    };
    this.move = this.move.bind(this);
    this.teleport = this.teleport.bind(this);
    this.checkPos = this.checkPos(this);
  }

  componentDidMount() {
    //update the variables from the parent component (Cactus.js)
    this.setState({
      playing: this.props.playing,
    });

    //if your are not dead or in the main menu, the cactus will move.
    this.state.playing && this.move();
  }

  move() {
    return;
  }

  teleport() {
    return;
  }

  checkPos() {
    let cactusMovement = setInterval(() => {
      //if the cactus is visible, make it move, otherwise teleport it at the beginning of the canvas
      if (this.state.x > 0) {
        this.move();
      } else {
        this.teleport();
      }

      //if it not playing, clear the catusMovement
      if (!this.state.playing) {
        clearInterval(cactusMovement);
      }
    }, 500);
  }

  render() {
    return (
      <div
        style={
          {
            /*mettere che la sua x è uguale a this.state.x*/
            //backgroundColor: "blue",
          }
        }
      ></div>
    );
  }
}

export default Cactus;
