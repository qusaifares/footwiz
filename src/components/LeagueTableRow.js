import React from 'react';
import { Link } from 'react-router-dom';

function LeagueTableRow(props) {
  return (
    <tr>
      <td className="team-column">
        <Link to={`/teams/${props.data.teamid}`}>{props.data.name}</Link>
      </td>
      <td>{props.data.played}</td>
      <td>{props.data.win}</td>
      <td>{props.data.draw}</td>
      <td>{props.data.loss}</td>
      <td className="mobile-hidden">{props.data.goalsfor}</td>
      <td className="mobile-hidden">{props.data.goalsagainst}</td>
      <td className="mobile-hidden">{props.data.goalsdifference}</td>
      <td className="points">{props.data.total}</td>
    </tr>
  );
}

export default LeagueTableRow;
