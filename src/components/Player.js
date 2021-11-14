import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from './Icon';  
import { Consumer } from "./Context";


class Player extends PureComponent {
  static propTypes = {
    index: PropTypes.number,
    isHighScore: PropTypes.bool

  }
  render() {
    const { 
      index,
      isHighScore
     } = this.props

    return (
      <Consumer>
        { ({actions, players}) => (
          <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>✖</button>
          <Icon isHighScore={isHighScore} /> 
          { players[index].name }
        </span>
  
        <Counter 
        index={index}
        />
      </div>
        ) }
      </Consumer>

    );

  }
  }


  export default Player