import React from 'react';
import { Link } from 'react-router-dom';

function SquadPlayer(props) {
  return (
    <Link to={`/players/${props.player.idPlayer}`} className="squad-player">
      <img
        src={
          props.player.strCutout ||
          props.player.strThumb ||
          props.player.strRender ||
          `${process.env.PUBLIC_URL}/images/headshot.png`
        }
        alt={props.player.strPlayer}
      />
      <div className="squad-player-name">{props.player.strPlayer}</div>
    </Link>
  );
}

export default SquadPlayer;
