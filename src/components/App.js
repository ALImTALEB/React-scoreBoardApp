import React, { Component } from "react";
import { Provider } from "./Context";
import Header from "./Header";

import AddPlayerForm from "./AddPlayerForm";
import PlayerList from "./PlayerList";

class App extends Component {
  state = {
    players: [
      {
        name: "Ali",
        score: 0,
        id: 1,
      },
      {
        name: "Ghayth",
        score: 0,
        id: 2,
      },
      {
        name: "Baha",
        score: 0,

        id: 3,
      },
      {
        name: "Hichem",
        score: 0,

        id: 4,
      },
      {
        name: "Noussair",
        score: 0,

        id: 5,
      },
      {
        name: "Nader",
        score: 0,

        id: 6,
      },
    ],
  };

  //player id counter

  prevPlayerId = 6;

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
  };

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name,
          score: 0,
          id: (this.prevPlayerId += 1),
        },
      ],
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  getHighScore = () => {
    const scores = this.state.players.map((p) => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  render() {
    const highScore = this.getHighScore();

    return (
      <Provider
        value={{
          players: this.state.players,
          actions: {
            changeScore: this.handleScoreChange,
            removePlayer: this.handleRemovePlayer,
            addPlayer: this.handleAddPlayer,
          },
        }}
      >
        <div className="scoreboard">
          <Header />

          <PlayerList />

          <AddPlayerForm />
        </div>
      </Provider>
    );
  }
}

export default App;
