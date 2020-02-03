import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SquadPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: ''
    };
  }
  componentDidMount() {
    let nationality = this.props.player.strNationality.toLowerCase();
    if (
      nationality === 'england' ||
      nationality === 'scotland' ||
      nationality === 'wales'
    ) {
      this.setState({
        flag: `${process.env.PUBLIC_URL}/images/${nationality}.png`
      });
    } else {
      fetch(
        `https://restcountries.eu/rest/v2/name/${this.props.player.strNationality}`
      )
        .then(res => res.json())
        .then(data => {
          data[0] && this.setState({ flag: data[0].flag });
        });
    }
  }
  render() {
    return (
      <Link
        to={`/players/${this.props.player.idPlayer}`}
        className="squad-player"
      >
        <img
          src={
            `${this.props.player.strCutout ||
              this.props.player.strThumb ||
              this.props.player.strRender}/preview` ||
            `${process.env.PUBLIC_URL}/images/headshot.png`
          }
          alt={this.props.player.strPlayer}
          className="player-headshot"
        />
        <div className="squad-player-name">
          <img
            src={this.state.flag}
            alt={this.props.player.strNationality}
            className="flag"
          />
          {this.props.player.strPlayer}
        </div>
      </Link>
    );
  }
}

export default SquadPlayer;
