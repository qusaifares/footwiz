import React from 'react';
import LeagueListItem from './LeagueListItem.js';

function Home(props) {
  return (
    <div className="home">
      <h2>Select a League</h2>
      <div className="leagues">
        {props.leaguesInfo.map(league => (
          <LeagueListItem league={league} key={league.idLeague} />
        ))}
      </div>
    </div>
  );
}

export default Home;
