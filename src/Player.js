import React, { Component } from 'react';

export class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {}
    };
  }
  componentDidMount() {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${this.props.match.params.player}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ player: data.players[0] });
      });
  }
  render() {
    console.log(this.state.player);
    return (
      <div className="player">
        <div className="player-landing">
          <div className="player-banner">
            <div className="banner-left">
              <div className="profile">
                <div className="position">{this.state.player.strPosition}</div>
                <div className="profile-name">
                  {this.state.player.strPlayer}
                </div>
              </div>
              <div className="number">{this.state.player.strNumber}</div>
            </div>
            <div className="banner-right">
              <img
                src={this.state.player.strCutout}
                alt={this.state.player.strPlayer}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
