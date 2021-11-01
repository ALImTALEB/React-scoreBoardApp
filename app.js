const players = [
    {
        name: "Ali",
        score: 69,
        id:1
      },
      {
        name: "Baha",
        score: 68,
        id:2
      },
      {
        name: "Ghayth",
        score: 67,
        id:3
      },
      {
        name: "Noussair",
        score: 66,
        id:4
      },
      {
        name: "Hichem",
        score: 65,
        id:5
      },
      {
        name: "Nader",
        score: 64,
        id:6
      }
]

const Header = (props) => { 
    
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats" >Players: {props.totalPlayers}</span>
        </header>
    )
     }

const Player = (props) => {
   return (
       <div className="player">
           <span className="player-name">
           {props.name}
           </span>
           <Counter score={props.score} />
       </div>
   )
}

const Counter = (props) => {
    return (
<div className="counter">
    <button className="counter-action decrement"> - </button>
    <span className="counter-score">{props.score}</span>
    <button className="counter-action increment" > + </button>
</div>
    )
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header
             title="Pexa Scoreboard"
              totalPlayers={props.initialPlayers.length} />
            {/* players list*/}
            {props.initialPlayers.map( player => 
                <Player
                 name={player.name}
                 score={player.score}
                 key={player.id.toString()}
                  />
            )}
        </div>
    )
}

ReactDOM.render(
   <App initialPlayers={players} />,
   document.getElementById('root')
)