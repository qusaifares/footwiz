import React from 'react';
import { Link } from 'react-router-dom';

function LeagueListItem(props) {
  return (
    <>
      {props.league && (
        <Link to={`/leagues/${props.league.idLeague}`}>
          <img src={props.league.strLogo} alt="" className="league-logo" />
        </Link>
      )}
    </>
  );
}

export default LeagueListItem;
