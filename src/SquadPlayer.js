import React from 'react';
import { Link } from 'react-router-dom';

function SquadPlayer(props) {
  console.log(props.player);
  return (
    <Link to={`/players/${props.player.idPlayer}`} className="squad-player">
      <img
        src={
          props.player.strCutout ||
          props.player.strThumb ||
          props.player.strRender
        }
        alt={props.player.strPlayer}
      />
      <div className="squad-player-name">{props.player.strPlayer}</div>
    </Link>
  );
}

export default SquadPlayer;
