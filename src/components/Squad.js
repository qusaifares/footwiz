import React, { Component } from 'react';
import SquadPlayer from './SquadPlayer.js';

export class Squad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squad: [],
      goalkeepers: [],
      defenders: [],
      midfielders: [],
      forwards: []
    };
  }
  componentDidMount() {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/${process.env.REACT_APP_SOCCER_API_KEY}/lookup_all_players.php?id=${this.props.teamId}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ squad: data.player }, () => {
          this.setState({
            goalkeepers: this.state.squad.filter(player =>
              player.strPosition.toLowerCase().includes('goal')
            ),
            defenders: this.state.squad.filter(
              player =>
                player.strPosition.toLowerCase().includes('back') ||
                player.strPosition.toLowerCase().includes('defender')
            ),
            midfielders: this.state.squad.filter(player =>
              player.strPosition.toLowerCase().includes('midfield')
            ),
            forwards: this.state.squad.filter(
              player =>
                player.strPosition.toLowerCase().includes('forward') ||
                player.strPosition.toLowerCase().includes('wing')
            )
          });
        });
      });
  }
  render() {
    return (
      <div className="squad">
        <div className="squad-title section-title">Squad</div>
        <h3>Goalkeepers</h3>
        <div className="goalkeepers position">
          {this.state.goalkeepers.map(player => (
            <SquadPlayer player={player} key={player.idPlayer} />
          ))}
        </div>
        <h3>Defenders</h3>
        <div className="defenders position">
          {this.state.defenders.map(player => (
            <SquadPlayer player={player} key={player.idPlayer} />
          ))}
        </div>
        <h3>Midfielders</h3>
        <div className="midfielders position">
          {this.state.midfielders.map(player => (
            <SquadPlayer player={player} key={player.idPlayer} />
          ))}
        </div>
        <h3>Forwards</h3>
        <div className="forwards position">
          {this.state.forwards.map(player => (
            <SquadPlayer player={player} key={player.idPlayer} />
          ))}
        </div>
      </div>
    );
  }
}

export default Squad;
