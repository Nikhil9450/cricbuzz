import React from 'react';
import Match from './Match';
import classes from "./MatchList.module.css";
function MatchList(props) {

  return (
    <div className={classes.grid}>
      
         {props.data.map((item)=>(
             <Match
             matchId={item.matchId}
             teamHeading={item.teamHeading}
             matchNumberVenue={item.matchNumberVenue}
             battingTeam={item.battingTeam}
             battingTeamScore={item.battingTeamScore}
             bowlTeam={item.bowlTeam}
             bowlTeamScore={item.bowlTeamScore}
             liveText={item.liveText}
             status={item.status}
             date={item.date}
             />
         ))}
    </div>
  )
}

export default MatchList;