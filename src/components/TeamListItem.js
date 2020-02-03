import React from 'react';
import { Link } from 'react-router-dom';

function TeamListItem(props) {
  return (
    <Link to={`/teams/${props.team.idTeam}`} className="team-list-item">
      <img
        src={props.team.strTeamBadge}
        alt={props.team.strTeam}
        className="team-badge"
      />
      <div className="team-list-name">{props.team.strTeam}</div>
    </Link>
  );
}

export default TeamListItem;
