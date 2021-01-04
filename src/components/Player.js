import React from "react";
import "./style/player.css";

const keyCode = {
  space: 32,
};

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isJumping: false,
      y: 0,
    };

    this._handleKeyDown = this._handleKeyDown.bind(this);
    this.jump = this.jump.bind(this);
  }

  _handleKeyDown = (event) => {
    switch (event.keyCode) {
      // SPACE BAR
      case keyCode.space:
        this.setState({
          isJumping: true,
        });
        this.state.y === 0 && this.jump();
        break;

      //DEFAULT
      default:
        break;
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleKeyDown);
  }

  jump = () => {
    let i = 10;
    let g;

    let timerId = setInterval(
      () => {
        if (i >= -10) {
          g = 1;
          if (i < 0) {
            g = -1;
          }
          this.setState({
            //EQUAZIONE DEL MOTO PARABOLICO
            y: this.state.y - i ** 2 * 0.5 * g,
          });
          console.log(this.state.y);

          i--;
        } else {
          this.setState({
            isJumping: false,
          });
          i = 10;
          clearInterval(timerId);
        }
      },
      //per cambiare velocità salto modificare tick animazione
      20
    );
    this.setState({
      isJumping: false,
    });
  };

  render() {
    return <div className="player" style={{ top: `${this.state.y}px` }}></div>;
  }
}

export default Player;
